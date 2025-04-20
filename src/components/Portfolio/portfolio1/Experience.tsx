import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  type: 'Internship' | 'Full-Time' | 'Part-Time' | 'Freelance';
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="py-10 px-6 bg-gray-100" id="experience">
      <h2 className="text-2xl font-bold text-center mb-8">Experience</h2>
      <div className="max-w-5xl mx-auto space-y-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between flex-wrap md:flex-nowrap md:items-center">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600">
                  {exp.company} • {exp.location}
                </p>
              </div>
              <div className="text-sm text-gray-500 mt-2 md:mt-0 text-right">
                {exp.startDate} – {exp.endDate}
              </div>
            </div>
            <div className="mt-2 text-sm text-blue-600 font-medium">
              {exp.type}
            </div>
            <p className="mt-3 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
