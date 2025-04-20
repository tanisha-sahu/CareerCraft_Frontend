// components/About.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface AboutProps {
  personalInfo: IUserPortfolio['personalInfo'];
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-3xl font-serif text-gray-800 mb-4">About Me</h2>
      <p className="text-lg text-gray-600 mb-2"><strong>Email:</strong> {personalInfo.email}</p>
      <p className="text-lg text-gray-600 mb-2"><strong>Phone:</strong> {personalInfo.phone}</p>
      <p className="text-lg text-gray-600 mb-2"><strong>Location:</strong> {personalInfo.location}</p>
      <a
        href={personalInfo.resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700"
      >
        View Resume
      </a>
    </section>
  );
};

export default About;
