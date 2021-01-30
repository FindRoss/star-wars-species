import React from 'react';
import { Link } from "react-router-dom";

import rebel from '../images/rebel-logo-white.png';
import imperial from '../images/imperial-logo-white.png';
import { ReactComponent as Ackbar } from '../AdmiralAckbar.svg'

function Nav({ handleDarkToggle, darkMode }) {

  return (
    <header className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-4 py-4 flex">
        <div className="flex-1">
          <Link to="/">
            <div className="flex items-center">
              <Ackbar fill={darkMode ? '#ffffff' : '#000000'} />
              <h1 className="ml-4 text-3xl">Star Wars Species</h1>
            </div>
          </Link>
        </div>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            checked={darkMode}
            id="chk"
            onChange={(event) => handleDarkToggle(event.target.checked)}
          />
          <label className="label" for="chk">
            <img width="25" height="25" src={imperial} alt="imperal dark" />
            <img width="25" height="25" src={rebel} alt="rebel ligh" />
            <div class="ball shadow-lg"></div>
          </label>
        </div>
      </div>
    </header >
  )
}

export default Nav; 
