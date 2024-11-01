"use client"
import FadeIn from '@/variants';
import BeyondProjects from './BeyondProjects';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Fragance.Hub',
    description: 'An online platform for fragrance enthusiasts.',
    technologies: ['React', 'Node.js', 'MongoDB'], 
    link: 'https://github.com/yourusername/project-one',
    liveLink: 'https://yourliveprojectone.com',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A simple project description.',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/project-two',
    liveLink: 'https://yourliveprojecttwo.com',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Another project description.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    link: 'https://github.com/yourusername/project-three',
    liveLink: 'https://yourliveprojectthree.com',
  },
];

const Project = () => {
  return (
    <div id='projects' className="mx-auto lg:py-28 py-10">
      <div className='container px-7 lg:px-28'>
       <FadeIn 
       direction={"down"}
       delay={0.4}>
       <h2 className="h2 flex items-center justify-center">PROJECTS</h2>
       </FadeIn>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn
            direction={"up"}
            delay={0.5 + index * 0.5}>
                  <div key={project.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-2">
                
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-200 border border-gray-400 text-gray-700 py-1 px-2 rounded-full text-sm mr-2">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <Link href={project.link} target="_blank" className="font-medium text-gray-800 hover:underline">
                  View Code
                </Link>
                <Link href={project.liveLink} target="_blank" className="font-medium text-gray-800 hover:underline">
                  Live Demo
                </Link>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>

        <BeyondProjects />
      </div>
    </div>
  );
};

export default Project;
