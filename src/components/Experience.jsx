import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className="my-20 text-center text-4xl ">
                Experience
            </h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4 flex flex-col items-center">
                            {/* Image Section (now above the year) */}
                            {experience.image && (
                                <img src={experience.image} alt={`${experience.company} logo`} className="w-16 h-16 mb-4" />
                            )}

                            {/* Year Section */}
                            <p className='text-sm text-neutral-400'>
                                {experience.year}
                            </p>
                        </div>



                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} -{" "}
                                <span className='text-sm text-purple-100'>
                                    {experience.company}
                                </span>
                            </h6>
                            <p className='mb-4 text-neutral-400'>
                                {experience.description}
                            </p>
                            <div>

                                {experience.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 mt-4 rounded bg-neutral-900
                                    py-1 px-3 text-sm font-medium text-purple-800'>
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