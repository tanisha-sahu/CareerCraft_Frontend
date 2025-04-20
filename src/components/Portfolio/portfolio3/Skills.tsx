// components/Skills.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface SkillsProps {
  skills: IUserPortfolio['skills'];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-3xl font-serif text-gray-800 mb-6">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 rounded-lg bg-pink-50 border border-pink-200 shadow-sm">
            <h3 className="text-xl text-pink-600 font-semibold">{skill.name}</h3>
            <p className="text-gray-600">Category: {skill.category}</p>
            <p className="text-gray-600">Level: {skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
