// components/Header.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface HeaderProps {
  personalInfo: IUserPortfolio['personalInfo'];
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <div className="bg-gray-900 text-white text-center rounded-4xl py-10 px-4 md:px-10">
      <img
        src={personalInfo.profileImage}
        alt="Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 object-cover"
      />
      <h1 className="text-2xl md:text-4xl font-bold">{personalInfo.fullName}</h1>
      <p className="text-md md:text-lg text-gray-400 mt-2">{personalInfo.bio}</p>
      <a
        href={personalInfo.resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white text-sm md:text-base"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Header;
