import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <div className="border-b border-neutral-900 pb-10">
      <h1 className="text-white my-10 text-center text-4xl">
        <span className="text-gray-500">Personal</span> Projects
      </h1>

      <div className="space-y-10">
        {displayedProjects && displayedProjects.length > 0 ? (
          displayedProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-wrap lg:items-start lg:justify-center bg-neutral-800 p-6 rounded-lg shadow-md"
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/4 mb-4 lg:mb-0 lg:mr-8 flex justify-center">
                <img
                  src={project.image}
                  alt={project.title || 'Project Image'}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>

              {/* Description Section */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-white text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center lg:justify-start mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-purple-500 bg-neutral-900 px-2 py-1 mr-2 mb-2 rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub & (Conditional) Live Demo Buttons */}
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
                  >
                    GitHub
                  </a>

                  {/* Only show Live Demo for Portfolio Website */}
                  {project.title === 'Portfolio Website' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No projects to display.</p>
        )}
      </div>

      {/* "View More" Button */}
      {!showAll && PROJECTS.length > 3 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
