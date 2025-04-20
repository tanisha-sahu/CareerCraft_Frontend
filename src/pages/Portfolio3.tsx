// Portfolio3.tsx
import React from 'react';
import { IUserPortfolio } from '../types';
import Header from '../components/Portfolio/portfolio3/Header';
import About from '../components/Portfolio/portfolio3/About';
import Skills from '../components/Portfolio/portfolio3/Skills';
import Projects from '../components/Portfolio/portfolio3/Projects';
import Education from '../components/Portfolio/portfolio3/Education';
import Experience from '../components/Portfolio/portfolio3/Experience';
import Certifications from '../components/Portfolio/portfolio3/Certifications';
import Achievements from '../components/Portfolio/portfolio3/Achievements';
import Footer from '../components/Portfolio/portfolio3/Footer';

interface Portfolio3Props {
  data: IUserPortfolio;
}

const Portfolio3: React.FC<Portfolio3Props> = ({ data }) => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen pb-10">
      <Header personalInfo={data.personalInfo} />
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <About personalInfo={data.personalInfo} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
        <Experience experience={data.experience} />
        <Certifications certifications={data.certifications} />
        <Achievements achievements={data.achievements} />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio3;
