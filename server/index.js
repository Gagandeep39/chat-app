/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-20 14:34:16
 * @modify date 2021-02-20 14:34:16
 * @desc [description]
 */
const express = require('express');

const http = require('http');
const router = require('./router');
const { addUser, getUser, removeUser, getUsersInRoom } = require('./users');
const PORT = process.env.PORT || 5000;

const app = express();

const server = http.createServer(app);

// Socket Config
const socketio = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});
socketio.on('connection', (socket) => {
  // Socket event when a new user joins a room
  // Callback refers to additional data sent to user after recieving a data from user
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);

    // Sends to single user with whom this socket is created
    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, Welcome to room ${user.room}`,
    });
    // Sends message to everyone except that user
    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin', text: `${user.name}, jas joined.` });
    // Joins user in a room (Inbuilt function)
    socket.join(user.room);

    // Sends users in current room
    socketio
      .to(user.room)
      .emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    // Fetch user who sent the message
    const user = getUser(socket.id);
    // Send a message to user's room
    socketio.to(user.room).emit('message', { user: user.name, text: message });
    // Sends users in current room
    socketio
      .to(user.room)
      .emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    callback();
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
    const user = removeUser(socket.id);
    if (user)
      socketio.to(user.room).emit('message', {
        user: 'admin',
        text: `${user.name} has left.`,
      });
  });
});

app.use(router);
server.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
