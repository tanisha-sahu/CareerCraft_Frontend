// components/Certifications.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface CertificationsProps {
  certifications: IUserPortfolio['certifications'];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <div className="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">Certifications</h2>
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
            <p className="text-sm text-gray-400">{cert.issuer}</p>
            <p className="text-sm text-gray-400">{cert.issueDate}</p>
            <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 mt-2 inline-block">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
