// components/Education.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface EducationProps {
  education: IUserPortfolio['education'];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
            <p className="text-sm text-gray-400">{edu.degree} in {edu.fieldOfStudy}</p>
            <p className="text-sm text-gray-400">{edu.startDate} - {edu.endDate}</p>
            <p className="text-gray-300 mt-2">Grade: {edu.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
