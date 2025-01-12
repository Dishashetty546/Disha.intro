import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-8">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-white text-2xl font-bold">Disha<span className="text-gray-500 text-2xl font-bold">.intro</span></h1>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl text-white">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
