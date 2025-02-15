import React, { useState, useEffect } from 'react';
import { HERO_CONTENT } from '../constants/index.js';
import Disha from '../assets/Disha.jpg';
import DishaResume from '../assets/Disha_Resume.pdf'; // Import Resume

const Hero = () => {
  const roles = [
    { text: "Tech Enthusiast", color: "text-blue-500" },
    { text: "Learner", color: "text-purple-500" },
    { text: "Full Stack Developer", color: "text-green-500" },
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Left Section */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-4">
          <h1 className="text-5xl font-bold text-white lg:text-7xl">Disha</h1>
          <span className={`text-2xl lg:text-4xl font-semibold ${roles[currentRoleIndex].color}`}>
            {roles[currentRoleIndex].text}
          </span>
          <p className="text-white text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            {HERO_CONTENT}
          </p>
          
          {/* Transparent Resume Download Button */}
          <a
            href={DishaResume}
            download="Disha_Resume.pdf"
            className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white border-2 border-white rounded-lg shadow-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={Disha}
            alt="Disha"
            className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg border-4 border-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
