import React from 'react';

interface HeroProps {
  personalInfo: {
    fullName: string;
    bio: string;
    profileImage: string;
    resumeLink: string;
    socialLinks: { platform: string; url: string }[];
  };
}

const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  return (
    <section className="text-center py-10 bg-gray-50">
      <img src={personalInfo.profileImage} alt="Profile" className="w-32 h-32 mx-auto rounded-full mb-4" />
      <h1 className="text-3xl font-bold">{personalInfo.fullName}</h1>
      <p className="text-gray-600 max-w-xl mx-auto mt-2">{personalInfo.bio}</p>
      <div className="mt-4 flex justify-center gap-4">
        {personalInfo.socialLinks.map((link) => (
          <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {link.platform}
          </a>
        ))}
      </div>
      <a
        href={personalInfo.resumeLink}
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </section>
  );
};

export default Hero;
