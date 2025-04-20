// src/components/PersonalDetail.tsx
import React from 'react';
import { useUser } from '../../contexts/UserContext';

const PersonalDetail: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="max-w-3xl mx-auto md:mt-0 mt-12 p-6 bg-[#F8F8EC] rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Profile picture placeholder */}
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold text-gray-700">
          {user?.name?.charAt(0) || ''}
        </div>
        {/* User info */}
        <div className="mt-4 md:mt-0 md:ml-6">
          <h1 className="text-3xl font-bold text-gray-800">{user?.name}</h1>
          <p className="text-gray-500">{user?.profession}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 border-t pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email Section */}
          <div>
            <p className="text-sm text-gray-500 uppercase">Email</p>
            <p className="text-lg font-medium text-gray-700">{user?.email}</p>
          </div>
          {/* User ID Section */}
          <div>
            <p className="text-sm text-gray-500 uppercase">User ID</p>
            <p className="text-lg font-medium text-gray-700">{user?.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
