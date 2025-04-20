// components/Skills.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface SkillsProps {
  skills: IUserPortfolio['skills'];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-4 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-700 text-center p-4 rounded-lg">
            <h3 className="text-white font-semibold">{skill.name}</h3>
            <p className="text-sm text-gray-400">{skill.level}</p>
            <p className="text-xs text-gray-500">{skill.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
