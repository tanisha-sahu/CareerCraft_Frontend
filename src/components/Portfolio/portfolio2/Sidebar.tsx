// components/Sidebar.tsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';

interface HeroProps {
  personalInfo: {
    fullName: string;
    bio: string;
    profileImage: string;
    resumeLink: string;
    socialLinks: { platform: string; url: string }[];
  };
}
const Sidebar:  React.FC<HeroProps>  = ({ personalInfo }) => {
  // Only use mobile state for toggling on small screens
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Desktop Sidebar (always visible on large screens)
  const desktopSidebar = (
    <div className="hidden lg:block fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between p-4">
        <span className="text-2xl font-bold">{personalInfo.fullName}</span>
      </div>
      <nav className="mt-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="header"
              smooth={true}
              duration={500}
              offset={-50}
              className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-50}
              className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-50}
              className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-50}
              className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-50}
              className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              offset={-50}
              className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="certifications"
              smooth={true}
              duration={500}
              offset={-50}
              className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              to="achievements"
              smooth={true}
              duration={500}
              offset={-50}
              className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Achievements
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );

  // Mobile Sidebar (visible on small screens)
  const mobileSidebar = (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded focus:outline-none"
        onClick={toggleMobileSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hamburger icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar overlay with smooth sliding */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-bold">Ritik</span>
          <button onClick={toggleMobileSidebar} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-10">
          <ul className="space-y-4">
            <li>
              <Link
                to="header"
                smooth={true}
                duration={500}
                offset={-50}
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={toggleMobileSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-50}
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={toggleMobileSidebar}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-50}
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={toggleMobileSidebar}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-50}
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={toggleMobileSidebar}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                offset={-50}
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={toggleMobileSidebar}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="education"
                smooth={true}
                duration={500}
                offset={-50}
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={toggleMobileSidebar}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="certifications"
                smooth={true}
                duration={500}
                offset={-50}
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={toggleMobileSidebar}
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link
                to="achievements"
                smooth={true}
                duration={500}
                offset={-50}
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={toggleMobileSidebar}
              >
                Achievements
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-50}
                className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={toggleMobileSidebar}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

  return (
    <>
      {desktopSidebar}
      {mobileSidebar}
    </>
  );
};

export default Sidebar;
