// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6">
      <p className="text-gray-600">&copy; {new Date().getFullYear()} Creer craft. All rights reserved.</p>
      <p className="mt-2 text-pink-500 hover:text-pink-700 transition-colors cursor-pointer">Privacy Policy</p>
    </footer>
  );
};

export default Footer;
