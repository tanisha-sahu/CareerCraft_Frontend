// components/Achievements.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface AchievementsProps {
  achievements: IUserPortfolio['achievements'];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-3xl font-serif text-gray-800 mb-6">Achievements</h2>
      {achievements.map((ach, index) => (
        <div key={index} className="mb-6 border-b pb-4 last:border-0 last:pb-0">
          <p className="text-lg text-gray-700"><strong>{ach.title}</strong></p>
          <p className="text-gray-500">{ach.description}</p>
          <p className="text-gray-500">Date: {ach.date}</p>
        </div>
      ))}
    </section>
  );
};

export default Achievements;
