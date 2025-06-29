/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const Navbar = ({ setToken }) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="logo" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li>
          <a
            href="https://youngwolves.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 hover:text-gray-900"
          >
            <p>PREVIEW</p>
            <hr className="hidden w-2/4 h-[1.5px] bg-gray-700 border-none" />
          </a>
        </li>
      </ul>
      <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>

    </div>
  )
}

export default Navbar