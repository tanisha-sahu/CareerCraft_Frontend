// components/Certifications.tsx
import React from 'react';
import { IUserPortfolio } from '../../../types';

interface CertificationsProps {
  certifications: IUserPortfolio['certifications'];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-3xl font-serif text-gray-800 mb-6">Certifications</h2>
      {certifications.map((cert, index) => (
        <div key={index} className="mb-6 border-b pb-4 last:border-0 last:pb-0">
          <p className="text-lg text-gray-700"><strong>{cert.title}</strong></p>
          <p className="text-lg text-gray-600">Issuer: {cert.issuer}</p>
          <p className="text-gray-500">Issued: {cert.issueDate}</p>
          <a
            href={cert.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            View Certificate
          </a>
        </div>
      ))}
    </section>
  );
};

export default Certifications;
