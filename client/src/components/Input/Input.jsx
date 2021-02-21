/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-21 07:08:49
 * @modify date 2021-02-21 07:08:49
 * @desc Input Component
 */
import React from 'react';
import sendIcon from '../../assets/send.svg';
import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      type="text"
      className="input"
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? sendMessage(event) : null
      }
    />
    <button className="sendButton" onClick={(event) => sendMessage(event)}>
      <img src={sendIcon} alt="Send" />
    </button>
  </form>
);

export default Input;
