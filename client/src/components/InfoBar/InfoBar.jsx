/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-21 07:05:56
 * @modify date 2021-02-21 07:05:56
 * @desc [description]
 */
import React from 'react';

import closeIcon from '../../assets/close.svg';
import onlineIcon from '../../assets/online.svg';
import './InfoBar.css';

function InfoBar({room}) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} className="onlineIcon" alt="Online" />
        <h3> Room: {room} </h3>
      </div>
      <div className="rightInnerContaine">
        <a href="/">
          <img src={closeIcon} alt="Close Icon" />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
