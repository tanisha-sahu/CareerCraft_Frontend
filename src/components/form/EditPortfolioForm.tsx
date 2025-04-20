import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PortfolioFormData } from '../../types';
import PersonalInfoSection from './PersonalInfoSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import CertificationsSection from './CertificationsSection';
import AchievementsSection from './AchievementsSection';
import { useToast } from "../landing/ToastContext";

interface EditPortfolioFormProps {
  portfolioData: PortfolioFormData;
}

const EditPortfolioForm: React.FC<EditPortfolioFormProps> = ({ portfolioData }) => {
  const { showToast } = useToast();
  // Initialize the form with the provided portfolioData.
  const methods = useForm<PortfolioFormData>({
    defaultValues: portfolioData,
  });

  const { handleSubmit } = methods;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // This onSubmit function sends the updated data to your backend.
  const onSubmit: SubmitHandler<PortfolioFormData> = async (data) => {
    setIsLoading(true);
    try {
      // Replace the URL with your backend API endpoint for updating the portfolio.
       const response = await fetch(`http://localhost:3000/api/portfolio/edit/${portfolioData._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data),
      });
      if (response.ok) {
        navigate('/profile/portfolioList');
        showToast('success', 'Portfolio updated successfully!');
      } else {
        showToast('danger', 'Failed to update portfolio.');
      }
    } catch (error) {
      showToast('danger', 'Failed to update portfolio.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto p-8 bg-[#F8F8EC] shadow-lg rounded space-y-10">
        <h1 className="text-3xl font-bold text-center mb-8">Edit Portfolio</h1>
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
            className={`w-full py-3 mt-4 text-white font-bold bg-green-600 hover:bg-green-700 rounded transition ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            Update Portfolio
          </button>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="animate-spin h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            </div>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default EditPortfolioForm;
