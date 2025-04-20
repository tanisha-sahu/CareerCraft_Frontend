// components/About.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface AboutProps {
  personalInfo: IUserPortfolio['personalInfo'];
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <div className="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-4">About Me</h2>
      <p className="text-gray-300 mb-4">{personalInfo.bio}</p>
      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="flex flex-col mb-4 md:mb-0">
          <h3 className="text-gray-400 font-semibold">Contact</h3>
          <p className="text-gray-300">{personalInfo.email}</p>
          <p className="text-gray-300">{personalInfo.phone}</p>
          <p className="text-gray-300">{personalInfo.location}</p>
        </div>
        <div className="flex space-x-4">
          {personalInfo.socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
