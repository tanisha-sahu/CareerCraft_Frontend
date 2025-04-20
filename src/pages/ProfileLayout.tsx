import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/User/Sidebar';
import { Link } from 'react-router-dom';

const ProfileLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-[#F8F8EC]">
      {/* Sidebar - fixed width */}
      <div className="md:w-[250px] flex-shrink-0 bg-[#F8F8EC]">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-5 bg-[#F8F8EC]">
        <Outlet />
        <div className="mt-10 flex justify-center">
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default ProfileLayout;
