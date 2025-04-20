// App.tsx
import React from 'react';
import Sidebar from '../components/Portfolio/portfolio2/Sidebar';
import Header from '../components/Portfolio/portfolio2/Header';
import About from '../components/Portfolio/portfolio2/About';
import Skills from '../components/Portfolio/portfolio2/Skills';
import Projects from '../components/Portfolio/portfolio2/Projects';
import Experience from '../components/Portfolio/portfolio2/Experience';
import Education from '../components/Portfolio/portfolio2/Education';
import Certifications from '../components/Portfolio/portfolio2/Certifications';
import Achievements from '../components/Portfolio/portfolio2/Achievements';
import DarkFooter from '../components/Portfolio/portfolio2/DarkFooter';
import { IUserPortfolio } from '../types';

interface PortfolioProps {
  data: IUserPortfolio;
}

const Portfolio2: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen relative">
      <Sidebar personalInfo={data.personalInfo}/>
      {/* Use ml-0 on small screens and ml-64 on large screens */}
      <main className="ml-0 lg:ml-64 px-6 py-8 space-y-10">
        <section id="header">
          <Header personalInfo={data.personalInfo} />
        </section>
        <section id="about">
          <About personalInfo={data.personalInfo} />
        </section>
        <section id="skills">
          <Skills skills={data.skills} />
        </section>
        <section id="projects">
          <Projects projects={data.projects} />
        </section>
        <section id="experience">
          <Experience experience={data.experience} />
        </section>
        <section id="education">
          <Education education={data.education} />
        </section>
        <section id="certifications">
          <Certifications certifications={data.certifications} />
        </section>
        <section id="achievements">
          <Achievements achievements={data.achievements} />
        </section>
        <DarkFooter personalInfo={data.personalInfo} />
      </main>
    </div>
  );
};

export default Portfolio2;
