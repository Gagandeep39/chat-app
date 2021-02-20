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
const PORT = process.env.PORT || 5000;

const app = express();

const server = http.createServer(app);

// Socket Config
const socketio = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
socketio.on('connection', (socket) => {
  console.log('New Connection Created~');

  // Callback refers to additional data sent to user after recieving a data from user
  socket.on('join', ({name, room}, callback) => {
    console.log(name, room);
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.use(router);
server.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
