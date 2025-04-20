// components/Experience.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface ExperienceProps {
  experience: IUserPortfolio['experience'];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">Experience</h2>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.company} | {exp.location}</p>
            <p className="text-sm text-gray-400">{exp.startDate} - {exp.endDate}</p>
            <p className="text-gray-300 mt-2">{exp.description}</p>
            <p className="text-sm text-gray-500 mt-2">Type: {exp.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
