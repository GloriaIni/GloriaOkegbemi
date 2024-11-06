import React from 'react';
import FadeIn from '@/variants'; // Assuming you have a fade-in animation variant

const experiences = [
  {
    id: 1,
    title: 'Walmart USA Advanced Software Engineering Virtual Experience',
    date: 'November 2024',
    highlights: [
      "Engineered a highly efficient heap data structure in Java, optimizing performance for Walmart’s shipping logistics.",
      "Designed comprehensive UML and entity relationship diagrams, enhancing data flow and processing capabilities.",
      "Collaborated with cross-functional teams to deliver solutions that meet complex business requirements."
    ],
  },
  {
    id: 2,
    title: 'Commonwealth Bank Software Engineering Job Simulation',
    date: 'November 2024',
    highlights: [
      "Led the enhancement of backend services with C# and MongoDB, resulting in improved system responsiveness and functionality.",
      "Revamped a React/Redux frontend to streamline user experience, demonstrating strong skills in user-centric design.",
      "Developed robust unit tests with C# and .NET, ensuring high code quality and reliability for future deployments."
    ],
  },
  {
    id: 3,
    title: 'J.P. Morgan Software Engineering Virtual Experience',
    date: 'September 2024',
    highlights: [
      "Established a seamless local development environment, significantly reducing setup time for future projects.",
      "Leveraged JPMorgan Chase’s open-source library to deliver a live data visualization tool, enhancing decision-making for traders."
    ],
  },
];

const BeyondProjects = () => {
  return (
    <div id='experiences' className=" mx-auto mt-20 lg:px-28">
      <FadeIn direction={"down"} delay={0.4}>
        <h2 className="h2 flex items-center justify-center text-center">PRACTICAL CERTIFICATIONS</h2>
      </FadeIn>
      <div className="mt-4">
        {experiences.map((experience) => (
          <FadeIn key={experience.id} direction={"up"} delay={0.5}>
            <div className="border p-4 rounded-lg mb-4 shadow-md">
              <h3 className="text-lg font-semibold">
                {experience.title} <span className="text-gray-500">({experience.date})</span>
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {experience.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export default BeyondProjects;
 