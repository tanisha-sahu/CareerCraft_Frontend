// src/components/Logout.tsx
import React from 'react';
import { useUser } from '../../contexts/UserContext';

const Logout: React.FC = () => {
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex items-center justify-center min-h-[200px] p-4 bg-[#F8F8EC]">
      <div className="bg-white rounded-xl shadow-xl border border-gray-200 w-full max-w-md">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Logout
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Are you sure you want to log out? Please confirm to proceed.
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-colors focus:outline-none"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
