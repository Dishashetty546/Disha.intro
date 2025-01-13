import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='text-white my-20 text-center text-4xl'>
        <span className='text-gray-500'>Personal</span> Projects
      </h1>
      <div className='space-y-10'>
        {PROJECTS && PROJECTS.length > 0 ? (
          PROJECTS.map((project, index) => (
            <div key={index} className='flex flex-wrap lg:items-start lg:justify-center'>
              {/* Image Section */}
              <div className='w-full lg:w-1/4 mb-4 lg:mb-0 lg:mr-8'>
                <img
                  src={project.image}
                  alt={project.title || 'Project Image'}
                  width={150}
                  height={150}
                  className='rounded object-cover mx-auto lg:mx-0'
                />
              </div>
              
              {/* Description Section */}
              <div className='flex-1'>
                <h2 className='text-white text-lg font-semibold mb-2'>{project.title}</h2>
                <p className='text-gray-400 text-sm'>{project.description}</p>
                {project.technologies.map((tech,index)=>(
                    <span
                        key={index}
                        className=' text-purple-500 mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-'
                        >{tech}
                    </span>
                ))}
              </div>
              
            </div>
          ))
        ) : (
          <p className='text-gray-400 text-center'>No projects to display.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
