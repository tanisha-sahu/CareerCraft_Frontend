// components/Footer.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface FooterProps {
  personalInfo: IUserPortfolio['personalInfo'];
}

const DarkFooter: React.FC<FooterProps> = ({ personalInfo }) => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <p>&copy; {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</p>
      <p>
        <a
          href="https://example.com/privacy-policy"
          className="text-blue-400 hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default DarkFooter;
