import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { PortfolioFormData } from '../types';
import PersonalInfoSection from '../components/form/PersonalInfoSection';
import SkillsSection from '../components/form/SkillsSection';
import ProjectsSection from '../components/form/ProjectsSection';
import EducationSection from '../components/form/EducationSection';
import ExperienceSection from '../components/form/ExperienceSection';
import CertificationsSection from '../components/form/CertificationsSection';
import AchievementsSection from '../components/form/AchievementsSection';
import { useToast } from "../components/landing/ToastContext";

const DynamicPortfolioForm: React.FC = () => {
  const { showToast } = useToast();
  const methods = useForm<PortfolioFormData>({
    defaultValues: {
      personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        bio: '',
        profileImage: '',
        resumeLink: '',
        socialLinks: [{ platform: '', url: '' }],
      },
      skills: [],
      projects: [],
      education: [],
      experience: [],
      certifications: [],
      achievements: [],
    },
  });

  const { handleSubmit } = methods;
  const navigate = useNavigate();
  const { template } = useParams(); // ✅ move this here
  const userId = localStorage.getItem('userId'); // ✅ also put this here
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<PortfolioFormData> = async (data) => {
    setIsLoading(true);
    const finalData = {
      ...data,
      template: template as 'dark' | 'light' | 'modern',
      createdAt: new Date(),
      userId: userId,
    };

    console.log(finalData.personalInfo);
    try {
      const response = await fetch('https://creercraftbackend-mongouri.up.railway.app/api/portfolio/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        navigate(`/profile/portfolioList`);
        showToast('success', 'Portfolio submitted successfully!');
        
        
      } else {
        showToast("danger", "Error submitting portfolio.");
      }
    } catch (error) {
      showToast("danger", "Error submitting portfolio.");
    } finally {
      setIsLoading(false);
    }
    
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-5xl mx-auto p-8 bg-[#F8F8EC] shadow-lg rounded space-y-10"
      >
        <h1 className="text-3xl font-bold text-center mb-8">Portfolio Form</h1>
        <PersonalInfoSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <CertificationsSection />
        <AchievementsSection />
        <div className="relative">
          <button
            type="submit"
            className={`w-full py-3 mt-4 text-white font-bold bg-green-600 hover:bg-green-700 rounded transition ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            Submit Portfolio
          </button>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="animate-spin h-8 w-8 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default DynamicPortfolioForm;
