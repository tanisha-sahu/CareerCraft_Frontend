import React from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="py-10 px-6 bg-white" id="education">
      <h2 className="text-2xl font-bold text-center mb-8">Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between flex-wrap md:flex-nowrap md:items-center">
              <div>
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
                <p className="text-gray-600">{edu.degree} in {edu.fieldOfStudy}</p>
              </div>
              <div className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right">
                {edu.startDate} – {edu.endDate}
              </div>
            </div>
            <p className="text-gray-700 mt-2">Grade: {edu.grade}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
