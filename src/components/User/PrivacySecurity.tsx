import React, { useState } from 'react';

const PrivacySecurity: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }

    // TODO: Call API to update password
    alert('Password changed successfully!');
  };

  return (
    <div className="max-w-2xl md:mt-0 mt-12 mx-auto p-6 bg-[#F8F8EC] rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy & Security</h1>

      <div className="space-y-4 text-gray-700">
        <p>
          Your privacy and security are important to us. We are committed to protecting your personal data and maintaining transparency in how we handle your information.
        </p>
        <p>
          We use encryption, secure storage practices, and regular audits to ensure your data is safe. You can review our privacy policy to learn more about how your data is used.
        </p>
        <p>
          If you feel your account may have been compromised, please update your password immediately and contact support.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Change Password</h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PrivacySecurity;
