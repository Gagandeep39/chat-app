/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-21 08:05:42
 * @modify date 2021-02-21 08:05:42
 * @desc [description]
 */
import React from 'react';
import onlineIcon from '../../assets/online.svg';
import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Realtime Chat Application</h1>
      <h2>Created with ❤️</h2>
    </div>
    {users ? (
      <div>
        <h1>People currently chatting</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
