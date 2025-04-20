import React from 'react';

interface Achievement {
  title: string;
  description: string;
  date: string;
}

interface AchievementsProps {
  achievements: Achievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section className="py-10 px-6 bg-gray-100" id="achievements">
      <h2 className="text-2xl font-bold text-center mb-8">Achievements</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {achievements.map((achieve, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="flex justify-between flex-wrap md:flex-nowrap md:items-center">
              <h3 className="text-lg font-semibold">{achieve.title}</h3>
              <span className="text-sm text-gray-500 mt-2 md:mt-0">
                {achieve.date}
              </span>
            </div>
            <p className="mt-2 text-gray-700">{achieve.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
