// components/Projects.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface ProjectsProps {
  projects: IUserPortfolio['projects'];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.description}</p>
              <div className="mt-2">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-xs mr-2 mt-2">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex space-x-4">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">GitHub</a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
