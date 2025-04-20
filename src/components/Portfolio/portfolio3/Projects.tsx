// components/Projects.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface ProjectsProps {
  projects: IUserPortfolio['projects'];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-3xl font-serif text-gray-800 mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-pink-50 border border-pink-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-pink-600">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex space-x-4 text-pink-500">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-700"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
