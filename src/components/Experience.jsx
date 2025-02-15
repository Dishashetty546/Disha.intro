import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <div className="min-h-screen w-full border-b border-neutral-500 pb-4">
      <h1 className="text-white my-20 text-center text-4xl">
        <span className="text-gray-500">Relevant</span> Experience
      </h1>
      <div className="flex flex-col items-center">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex w-full max-w-6xl flex-wrap lg:justify-between">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-white text-lg">{experience.year}</p>
            </div>
            <div className="w-full max-w-3xl lg:w-3/4">
              {/* Role on one line, Company on the next line */}
              <h6 className="mb-1 text-xl font-semibold text-white">{experience.role}</h6>
              <span className="mb-2 text-lg text-purple-100 block">{experience.company}</span>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mt-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-500"
                    key={index}
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
