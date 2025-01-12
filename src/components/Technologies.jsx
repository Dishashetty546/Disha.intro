import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiC, SiExpress, SiMongodb, SiTailwindcss, SiMysql } from 'react-icons/si';

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='text-white my-10 text-center text-4xl'>
        <span className='text-gray-500'>Tech</span>nologies
      </h1>
      <div className='text-white flex justify-center items-center gap-6 flex-wrap'>
        {/* Java */}
        <div className='flex flex-col items-center'>
          <FaJava size={40} className='text-red-600' />
          <p className='mt-1 text-sm'>Java</p>
        </div>
        {/* C */}
        <div className='flex flex-col items-center'>
          <SiC size={40} className='text-blue-600' />
          <p className='mt-1 text-sm'>C</p>
        </div>
        {/* HTML */}
        <div className='flex flex-col items-center'>
          <FaHtml5 size={40} className='text-orange-600' />
          <p className='mt-1 text-sm'>HTML</p>
        </div>
        {/* CSS */}
        <div className='flex flex-col items-center'>
          <FaCss3Alt size={40} className='text-blue-500' />
          <p className='mt-1 text-sm'>CSS</p>
        </div>
        {/* React */}
        <div className='flex flex-col items-center'>
          <FaReact size={40} className='text-blue-400' />
          <p className='mt-1 text-sm'>React</p>
        </div>
        {/* Node.js */}
        <div className='flex flex-col items-center'>
          <FaNodeJs size={40} className='text-green-500' />
          <p className='mt-1 text-sm'>Node.js</p>
        </div>
        {/* Express */}
        <div className='flex flex-col items-center'>
          <SiExpress size={40} className='text-gray-500' />
          <p className='mt-1 text-sm'>Express</p>
        </div>
        {/* MongoDB */}
        <div className='flex flex-col items-center'>
          <SiMongodb size={40} className='text-green-600' />
          <p className='mt-1 text-sm'>MongoDB</p>
        </div>
        {/* SQL */}
        <div className='flex flex-col items-center'>
          <SiMysql size={40} className='text-blue-600' />
          <p className='mt-1 text-sm'>SQL</p>
        </div>
        {/* Tailwind CSS */}
        <div className='flex flex-col items-center'>
          <SiTailwindcss size={40} className='text-blue-400' />
          <p className='mt-1 text-sm'>TailwindCSS</p>
        </div>
        {/* Python */}
        <div className='flex flex-col items-center'>
          <FaPython size={40} className='text-yellow-500' />
          <p className='mt-1 text-sm'>Python</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
