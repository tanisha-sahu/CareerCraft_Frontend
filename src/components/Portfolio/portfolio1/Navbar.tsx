import React, { useState } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling (React Scroll)


interface HeroProps {
  personalInfo: {
    fullName: string;
    bio: string;
    profileImage: string;
    resumeLink: string;
    socialLinks: { platform: string; url: string }[];
  };
}


const Navbar: React.FC<HeroProps>  = ({ personalInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 left-0 w-full bg-gray-200 text-gray-900 shadow-md z-10">
      <div className="max-w-8xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo (you can replace with an image or text) */}
        <div className="text-2xl font-bold">{personalInfo.fullName}</div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Projects
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Education
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Experience
          </Link>
          <Link
            to="certifications"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Certifications
          </Link>
          <Link
            to="achievements"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Achievements
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-gray-800 text-white py-4 space-y-4`}
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="block text-center py-2 hover:text-blue-400"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="block text-center py-2 hover:text-blue-400"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="block text-center py-2 hover:text-blue-400"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="education"
          smooth={true}
          duration={500}
          className="block text-center py-2 hover:text-blue-400"
          onClick={() => setIsOpen(false)}
        >
          Education
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="block text-center py-2 hover:text-blue-400"
          onClick={() => setIsOpen(false)}
        >
          Experience
        </Link>
        <Link
          to="certifications"
          smooth={true}
          duration={500}
          className="block text-center py-2 hover:text-blue-400"
          onClick={() => setIsOpen(false)}
        >
          Certifications
        </Link>
        <Link
          to="achievements"
          smooth={true}
          duration={500}
          className="block text-center py-2 hover:text-blue-400"
          onClick={() => setIsOpen(false)}
        >
          Achievements
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
