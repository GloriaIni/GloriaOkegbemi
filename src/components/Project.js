"use client";
import FadeIn from '@/variants';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Fragrance.Hub',
    description: 'An eight-page e-commerce website for a perfume store, featuring search, product sorting, add-to-cart, and user authentication with Firebase.',
    technologies: ['React', 'Tailwind CSS', 'Firebase'], 
    liveLink: 'https://fragrance-hub-iota.vercel.app',
  },
  {
    id: 2,
    title: 'Frontend Engineer Portfolio',
    description: 'A responsive, animated portfolio website showcasing technical skills and projects.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://gloria-okegbemi.vercel.app/',
  },
];

const Project = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 1; 
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <div id='projects' className="mx-auto flex items-center justify-center text-center lg:py-28 py-10">
       <div className='container px-7 lg:px-28'>

        <FadeIn direction={"up"} delay={0.4} > 
              <h2 className="h2 flex items-center justify-center mb-7">PROJECTS</h2>
        </FadeIn>

        {/* Mobile */}
        <div className="block md:hidden">
          {currentProjects.map((project) => (
            <FadeIn key={project.id} direction={currentPage > 0 ? "left" : "right"} delay={0.5}>
              <div className="text-center border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 w-full h-72 lg:h-64 flex flex-col justify-between">
                <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center mb-2"> 
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-center bg-gray-200 border border-gray-400 text-gray-700 py-1 px-2 rounded-full text-sm mr-2 my-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Link href={project.liveLink} target="_blank" className="font-medium text-gray-800 hover:underline">
                    Explore
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <button 
              onClick={handlePrevious} 
              className="font-medium text-gray-800 hover:underline"
              disabled={currentPage === 0}
            >
              &#8592;
            </button>
           
            <button 
              onClick={handleNext} 
              className="font-medium text-gray-800 hover:underline"
              disabled={currentPage === totalPages - 1}
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* large screens */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <FadeIn key={project.id} direction={index === startIndex ? "left" : "right"} delay={0.5 + index * 0.5}>
              <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 w-80 h-80 flex flex-col justify-between">
                <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center mb-2"> 
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-200 border border-gray-400 text-gray-700 py-1 px-2 rounded-full text-sm mr-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Link href={project.liveLink} target="_blank" className="font-medium text-gray-800 hover:underline">
                    Explore
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Project;
