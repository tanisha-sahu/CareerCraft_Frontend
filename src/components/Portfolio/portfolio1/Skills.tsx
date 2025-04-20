import React from 'react';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Group skills by category
  const categorizedSkills = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const getBadgeColor = (level: Skill['level']) => {
    switch (level) {
      case 'Beginner':
        return 'bg-yellow-200 text-yellow-800';
      case 'Intermediate':
        return 'bg-blue-200 text-blue-800';
      case 'Advanced':
        return 'bg-green-200 text-green-800';
    }
  };

  return (
    <section className="py-10 px-6 bg-white" id="skills">
      <h2 className="text-2xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">{category}</h3>
            <ul className="space-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{skill.name}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${getBadgeColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
