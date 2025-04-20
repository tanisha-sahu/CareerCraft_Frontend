import React from 'react';
import { IUserPortfolio } from '../types.ts';
import Navbar from '../components/Portfolio/portfolio1/Navbar.tsx';
import Hero from '../components/Portfolio/portfolio1/Hero.tsx';
import Skills from '../components/Portfolio/portfolio1/Skills.tsx';
import Projects from '../components/Portfolio/portfolio1/Projects.tsx';
import Education from '../components/Portfolio/portfolio1/Education.tsx';
import Experience from '../components/Portfolio/portfolio1/Experience.tsx';
import Certifications from '../components/Portfolio/portfolio1/Certifications.tsx';
import Achievements from '../components/Portfolio/portfolio1/Achievements.tsx';
import Footer from '../components/Portfolio/portfolio1/Footer.tsx';

interface PortfolioProps {
  data: IUserPortfolio;
}


const Portfolio1: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <div className="font-sans text-gray-800">
      <Navbar personalInfo={data.personalInfo} />
      <Hero personalInfo={data.personalInfo} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Education education={data.education} />
      <Experience experience={data.experience} />
      <Certifications certifications={data.certifications} />
      <Achievements achievements={data.achievements} />
      <Footer />
    </div>
  );
};

export default Portfolio1;
