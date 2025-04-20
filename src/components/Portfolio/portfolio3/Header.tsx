// components/Header.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface HeaderProps {
  personalInfo: IUserPortfolio['personalInfo'];
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <header className="text-center py-10">
      <img 
        src={personalInfo.profileImage} 
        alt="Profile" 
        className="w-32 h-32 mx-auto rounded-full border-4 border-pink-300 shadow-lg" 
      />
      <h1 className="mt-4 text-4xl font-serif text-gray-800">{personalInfo.fullName}</h1>
      <p className="mt-2 text-lg text-gray-600">{personalInfo.bio}</p>
      <div className="flex justify-center space-x-4 mt-4">
        {personalInfo.socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            {link.platform}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
