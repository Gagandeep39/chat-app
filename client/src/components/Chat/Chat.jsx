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

let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const applicationUrl = process.env.REACT_APP_SERVER_URL || 'localhost:5000';
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(applicationUrl);
    setName(name);
    setRoom(room);
    console.log(socket);
  }, [location, applicationUrl]);

  return <div>Chat Component</div>;
};

export default Chat;
