import React, { useState, useEffect } from 'react';
import { HERO_CONTENT } from '../constants/index.js';
import Disha from '../assets/Disha.jpg';

const Hero = () => {
  const roles = [
    { text: "Tech Enthusiast", color: "text-blue-900" },
    { text: "Learner", color: "text-purple-900" },
    { text: "Full Stack Developer", color: "text-green-900" },
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1000); // Change text every second

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [roles.length]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-6xl pb-16 font-thin tracking-tight lg:mt-16 lg:text-8xl text-white">
              Disha
            </h1>
            <span
              className={`text-4xl font-semibold tracking-tight ${
                roles[currentRoleIndex].color
              }`}
            >
              {roles[currentRoleIndex].text}
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-white">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* Add dimensions to the image */}
            <img
              src={Disha}
              alt=""
              className="w-80 h-80 lg:w-64 lg:h-64 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
