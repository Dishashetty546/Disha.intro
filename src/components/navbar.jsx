import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-8">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-white text-2xl font-bold">
          Disha<span className="text-gray-500 text-2xl font-bold">.intro</span>
        </h1>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl text-white">
        <a href="https://in.linkedin.com/in/disha-73932b237" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Dishashetty546" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/dishashetty55/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://leetcode.com/u/dishashetty546/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
