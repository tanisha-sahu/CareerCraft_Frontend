import React from 'react';

interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  certificateUrl: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section className="py-10 px-6 bg-white" id="certifications">
      <h2 className="text-2xl font-bold text-center mb-8">Certifications</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex justify-between items-center flex-wrap">
              <div>
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-gray-600 text-sm">
                  {cert.issuer} • {cert.issueDate}
                </p>
              </div>
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm mt-2 md:mt-0"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
