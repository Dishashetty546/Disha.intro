import React from 'react'
import { ABOUT_TEXT } from '../constants'
import about from '../assets/projects/About.jpg'
const About = () => {
  return (
   
        <div className='border-b border-neutral-900 pb-4'>
             <h1 className='text-white my-20 text-center text-4xl'>  <span className='text-gray-500'>About</span>me</h1>
<div className='flex flex-wrap'>
    <div className='w-full lg:w-1/2 lg:p-8'>
    <div className='flex items-center justify-center'>
    <img 
  className="w-60 h-60 lg:w-64 lg:h-64 rounded-2xl object-cover" 
  src={about} 
  alt="" 
/>

        </div>
        </div>
        <div className='w-full  lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
                <p className=' my-2 max-w-xl py-6 text-white front-transparent'>{ABOUT_TEXT}</p>
            </div>
      
        </div>
</div>
        
        </div>
   
  )
}

export default About