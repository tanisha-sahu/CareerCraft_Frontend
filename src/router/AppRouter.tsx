import  { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingLayout from '../pages/MainLayout';
import ProfileLayout from '../pages/ProfileLayout';
import ProtectedRoute from './ProtectedRoute';
import { UserProvider } from '../contexts/UserContext';
import TemplateSelection from '../pages/TemplateSelection';
import ResumeATSChecker from '../components/landing/ResumeATSChecker';
import DynamicPortfolioForm from '../pages/DynamicPortfolioForm';
import Logout from '../components/User/Logout';
import Portfolio from '../pages/Portfolio';
import EditPortfolio from '../pages/EditPortfolio';
import { data } from '../components/Portfolio/data';
import Portfolio1 from '../pages/Portfolio1';
import Portfolio2 from '../pages/Portfolio2';
import Portfolio3 from '../pages/Portfolio3';
import { ToastProvider } from '../components/landing/ToastContext';
// Public landing page components
const HomePage = lazy(() => import('../components/landing/HeroSection'));
const AboutPage = lazy(() => import('../components/landing/AboutSection'));
const ServicesPage = lazy(() => import('../components/landing/ServicesPage'));
const ContactPage = lazy(() => import('../components/landing/ContactUs'));
const LoginPage = lazy(() => import('../components/User/Login'));
const SignUpPage = lazy(() => import('../components/User/Signup'));

// Profile pages (user-specific, with sidebar)
const PersonalDetail = lazy(() => import('../components/User/PersonalDetail'));
const PrivacySecurity = lazy(() => import('../components/User/PrivacySecurity'));
const PortfolioList = lazy(() => import('../components/User/PortfolioList'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ToastProvider>
      <Suspense fallback={<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fefefb]">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-gray-700 font-medium">Loading, please wait...</p>
    </div>}>
      <UserProvider>

      
        <Routes>
          {/* Public Landing Routes */}
          <Route element={<LandingLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="ats" element={<ProtectedRoute><ResumeATSChecker /></ProtectedRoute>} />
            <Route path="template" element={<ProtectedRoute><TemplateSelection/></ProtectedRoute>} />
          </Route>

          {/* Protected User Profile Routes */}
          <Route
            path="/profile"
            element={
              <>
                <ProtectedRoute>
                    <ProfileLayout />
                </ProtectedRoute>
              </>
              
            }
          >
            <Route index element={<ProtectedRoute><PersonalDetail /></ProtectedRoute>} />
            <Route path="privacy" element={<PrivacySecurity />} />
            <Route path="portfolioList" element={<PortfolioList />} />
            <Route path="logout" element={<Logout/>} />
            <Route path="*" element={<h1>Hello ye route nhi he</h1>} />
          </Route>

          {/* Public Portfolio Routes */}
          <Route element={<ProtectedRoute><LandingLayout /></ProtectedRoute>}>
            <Route path="/portfolio/create/:template" element={<DynamicPortfolioForm/>} />
            <Route path="/portfolio/edit/:id" element={<EditPortfolio/>} />
            <Route path="/portfolio/preview/:template" element={<DynamicPortfolioForm/>} />
          </Route>
          
          <Route path="/portfolio/view/:portfolioId" element={<Portfolio/>} />

          <Route path="/preview/dark" element={<Portfolio2 data={data()} />} />
          <Route path="/preview/light" element={<Portfolio1 data={data()} />} />
          <Route path="/preview/modern" element={<Portfolio3 data={data()} />} />   
        </Routes>
        </UserProvider>
      </Suspense>
      </ToastProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
