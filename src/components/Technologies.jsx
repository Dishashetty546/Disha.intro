import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiC, SiExpress, SiMongodb, SiTailwindcss, SiMysql } from 'react-icons/si';

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='text-white my-20 text-center text-4xl'>  <span className='text-gray-500'>Tech</span>nologies</h1>
      <div className='text-white flex flex-wrap items-center justify-center gap-8'>
        {/* Java */}
        <div className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center'>
          <FaJava size={40} className='text-red-600' />
          <p className='mt-2'>Java</p>
        </div>
        {/* C */}
        <div className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center'>
          <SiC size={40} className='text-blue-600' />
          <p className='mt-2'>C</p>
        </div>
        {/* HTML */}
        <div className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center'>
          <FaHtml5 size={40} className='text-orange-600' />
          <p className='mt-2'>HTML</p>
        </div>
        {/* CSS */}
        <div className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center'>
          <FaCss3Alt size={40} className='text-blue-500' />
          <p className='mt-2'>CSS</p>
        </div>
        {/* React */}
        <div className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center'>
          <FaReact size={40} className='text-blue-400' />
          <p className='mt-2'>React</p>
        </div>
        {/* Node.js */}
        <div className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center'>
          <FaNodeJs size={40} className='text-green-500' />
          <p className='mt-2'>Node.js</p>
        </div>
        {/* Express */}
        <div className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center'>
          <SiExpress size={40} className='text-gray-500' />
          <p className='mt-2'>Express</p>
        </div>
        {/* MongoDB */}
        <div className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center'>
          <SiMongodb size={40} className='text-green-600' />
          <p className='mt-2'>MongoDB</p>
        </div>
        {/* SQL */}
        <div className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center'>
          <SiMysql size={40} className='text-blue-600' />
          <p className='mt-2'>SQL</p>
        </div>
        {/* Tailwind CSS */}
        <div className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center'>
          <SiTailwindcss size={40} className='text-blue-400' />
          <p className='mt-2'>TailwindCSS</p>
        </div>
        {/* Python */}
        <div className='rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center'>
          <FaPython size={40} className='text-yellow-500' />
          <p className='mt-2'>Python</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
