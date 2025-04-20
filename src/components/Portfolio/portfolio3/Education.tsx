// components/Education.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface EducationProps {
  education: IUserPortfolio['education'];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-3xl font-serif text-gray-800 mb-6">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-6 border-b pb-4 last:border-0 last:pb-0">
          <p className="text-lg text-gray-700"><strong>{edu.degree}</strong> in {edu.fieldOfStudy}</p>
          <p className="text-lg text-gray-600">{edu.institution}</p>
          <p className="text-gray-500">Duration: {edu.startDate} - {edu.endDate}</p>
          <p className="text-gray-500">Grade: {edu.grade}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
