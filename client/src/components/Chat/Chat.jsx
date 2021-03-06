/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-20 14:27:11
 * @modify date 2021-02-20 14:27:11
 * @desc [description]
 */
import React, { useState, useEffect } from 'react';
import queryString from 'query-string'; // Parses query Params
import io from 'socket.io-client';

import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';

let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const applicationUrl = process.env.REACT_APP_SERVER_URL || 'localhost:5000';
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(applicationUrl);
    setName(name);
    setRoom(room);

    // Executed when user joins chat
    socket.emit('join', { name, room }, (callback) => {
      console.log(callback);
    });
    // Leave chat on changing screen
    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [location, applicationUrl]);

  // Reads messages of others
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });

    socket.on('roomData', ({ users }) => setUsers(users));
  }, [messages, users]);

  // Send message
  const sendMessage = (event) => {
    // Prvent full browser refresh
    event.preventDefault();
    if (message) socket.emit('sendMessage', message, () => setMessage(''));
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
