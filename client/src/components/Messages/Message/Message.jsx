/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-21 07:26:22
 * @modify date 2021-02-21 07:26:22
 * @desc [description]
 */
import React from 'react';
import ReactEmoji from 'react-emoji';
import './Message.css';

const Message = ({ message: { user, text }, name }) => {
  console.log(user, name);
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) isSentByCurrentUser = true;
  return isSentByCurrentUser ? (
    // Send by current User
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText"> {ReactEmoji.emojify(text)} </p>
      </div>
    </div>
  ) : (
    // Sent b current User
    <div className="messageContainer justifyStart">
      <div className="messageBox">
        <p className="messageText colorDark"> {ReactEmoji.emojify(text)} </p>
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  );
};

export default Message;
