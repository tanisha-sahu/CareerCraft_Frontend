// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Career Craft. All rights reserved.</p>
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

export default Footer;
