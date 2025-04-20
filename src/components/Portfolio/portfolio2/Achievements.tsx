// components/Achievements.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface AchievementsProps {
  achievements: IUserPortfolio['achievements'];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <div className="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">Achievements</h2>
      <div className="space-y-6">
        {achievements.map((ach, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">{ach.title}</h3>
            <p className="text-sm text-gray-400">{ach.date}</p>
            <p className="text-gray-300 mt-2">{ach.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
