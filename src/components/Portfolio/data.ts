import { useParams } from 'react-router-dom';
import { IUserPortfolio } from '../../types';

// This custom hook will return the dynamic portfolio data based on the URL params
export const data = (): IUserPortfolio => {
  const { template } = useParams<{ template: 'dark' | 'light' | 'modern' }>();

  const data: IUserPortfolio = {
    _id: "Demo",
    userId: '1',
    template: template || 'light', // Use the template from URL or default to 'light'
    personalInfo: {
      fullName: 'Tanisha Sahu',
      email: 'tanisha@example.com',
      phone: '1234567890',
      location: 'Ujjain, India',
      bio: 'Frontend Developer and Tech Enthusiast',
      profileImage: 'https://static.vecteezy.com/system/resources/previews/020/389/525/original/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-vector.jpg',
      resumeLink: 'https://example.com/resume.pdf',
      socialLinks: [
        { platform: 'GitHub', url: 'https://github.com/ritik' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/ritik' },
        { platform: 'Twitter', url: 'https://twitter.com/ritik' },
      ],
    },
    skills: [
      { name: 'JavaScript', level: 'Advanced', category: 'Frontend' },
      { name: 'React', level: 'Advanced', category: 'Frontend' },
      { name: 'CSS', level: 'Intermediate', category: 'Frontend' },
      { name: 'Node.js', level: 'Intermediate', category: 'Backend' },
      { name: 'MongoDB', level: 'Intermediate', category: 'Database' },
    ],
    projects: [
      {
        title: 'Portfolio Website',
        description: 'A personal portfolio website to showcase projects and skills.',
        techStack: ['React', 'Tailwind CSS', 'JavaScript'],
        liveUrl: 'https://example.com/portfolio',
        githubUrl: 'https://github.com/ritik/portfolio',
        image: 'https://storage.googleapis.com/webdesignledger.pub.network/WDL/Portfolios_Featured_Image_06.jpg',
        featured: true,
      },
      {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce platform built with React and Node.js.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
        liveUrl: 'https://example.com/ecommerce',
        githubUrl: 'https://github.com/ritik/ecommerce',
        image: 'https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b',
        featured: true,
      },
    ],
    education: [
      {
        institution: 'Ujjain University',
        degree: 'Bachelor of Technology',
        fieldOfStudy: 'Computer Science and Engineering',
        startDate: '2019-08-01',
        endDate: '2023-06-30',
        grade: 'A',
      },
      {
        institution: 'Ujjain High School',
        degree: 'Higher Secondary',
        fieldOfStudy: 'Science',
        startDate: '2017-06-01',
        endDate: '2019-05-31',
        grade: 'A+',
      },
    ],
    experience: [
      {
        title: 'Frontend Developer Intern',
        company: 'Tech Solutions',
        location: 'Remote',
        startDate: '2022-06-01',
        endDate: '2022-08-31',
        description: 'Worked on improving the frontend of an e-commerce platform using React.',
        type: 'Internship',
      },
      {
        title: 'Full Stack Developer',
        company: 'WebDev Inc.',
        location: 'Ujjain, India',
        startDate: '2023-01-01',
        endDate: 'Present',
        description: 'Building and maintaining full-stack web applications with React, Node.js, and MongoDB.',
        type: 'Full-Time',
      },
    ],
    certifications: [
      {
        title: 'React Developer Certificate',
        issuer: 'Udemy',
        issueDate: '2022-05-15',
        certificateUrl: 'https://example.com/certificate/react',
      },
      {
        title: 'JavaScript Algorithms and Data Structures',
        issuer: 'freeCodeCamp',
        issueDate: '2022-07-10',
        certificateUrl: 'https://example.com/certificate/js',
      },
    ],
    achievements: [
      {
        title: 'Best Project Award - Hackathon 2022',
        description: 'Won the Best Project Award in the 2022 Ujjain Tech Hackathon.',
        date: '2022-11-15',
      },
      {
        title: 'Top Contributor in Open Source',
        description: 'Contributed to multiple open-source repositories, including React and Node.js.',
        date: '2023-02-05',
      },
    ],
    createdAt: new Date(),
  };

  return data;
};
