// components/Experience.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface ExperienceProps {
  experience: IUserPortfolio['experience'];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-3xl font-serif text-gray-800 mb-6">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-6 border-b pb-4 last:border-0 last:pb-0">
          <p className="text-lg text-gray-700">
            <strong>{exp.title}</strong> at {exp.company}
          </p>
          <p className="text-lg text-gray-600">Location: {exp.location}</p>
          <p className="text-gray-500">Duration: {exp.startDate} - {exp.endDate}</p>
          <p className="text-gray-500">Type: {exp.type}</p>
          <p className="text-gray-500 mt-2">{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
