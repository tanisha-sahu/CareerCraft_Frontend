export interface IUserPortfolio {
  _id: string;
  userId: string;
  template: 'dark' | 'light' | 'modern';
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    profileImage: string;
    resumeLink: string;
    socialLinks: Array<{
      platform: string;
      url: string;
    }>;
  };
  skills: Array<{
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    category: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
    image: string;
    featured: boolean;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    grade: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    type: 'Internship' | 'Full-Time' | 'Part-Time' | 'Freelance';
  }>;
  certifications: Array<{
    title: string;
    issuer: string;
    issueDate: string;
    certificateUrl: string;
  }>;
  achievements: Array<{
    title: string;
    description: string;
    date: string;
  }>;
  createdAt: Date;
}

// The form will not handle userId and createdAt.
export type PortfolioFormData = Omit<IUserPortfolio, 'userId' | 'createdAt'>;
