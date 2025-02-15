import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <div className="w-full border-b border-neutral-500 pb-10">
      <h1 className="text-white my-10 text-center text-4xl">
        <span className="text-gray-500">Relevant</span> Experience
      </h1>
      <div className="flex flex-col items-center space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex w-full max-w-6xl flex-wrap lg:justify-between">
            {/* Year Section */}
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <p className="text-white text-lg">{experience.year}</p>
            </div>

            {/* Experience Details */}
            <div className="w-full max-w-3xl lg:w-3/4">
              <h6 className="text-xl font-semibold text-white">{experience.role}</h6>
              <span className="text-lg text-purple-100 block">{experience.company}</span>
              <p className="text-neutral-400 mt-2">{experience.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap mt-3">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
