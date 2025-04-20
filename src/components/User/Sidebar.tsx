// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const location = useLocation();

  const menuItems = [
    { name: 'Personal Detail', path: '/profile' },
    { name: 'Your Portfolio', path: '/profile/portfolioList' },
    { name: 'Privacy & Security', path: '/profile/privacy' },
    { name: 'Logout', path: '/profile/logout' },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Mobile header with fixed hamburger at the top */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-[#F8F8EC] p-4 shadow z-20 flex justify-between items-center">
        <span className="font-bold text-lg"> <img src="logo.png" className="h-10 p-1 mx-auto mb-2 " alt="Logo" /></span>
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar for desktop */}
      <div
        className="hidden md:block md:fixed md:inset-y-0 md:left-0 md:w-64 bg-[#F8F8EC]  min-h-screen"
        style={{ boxShadow: '4px 0 8px rgba(0, 0, 0, 0.2)' }}
      >
        <div className="p-6">
          <Link to="/">
            <img src="logo.png" className="h-10 p-1 mx-auto mb-2 border-b" alt="Logo" />
          </Link>
          {user && <p className="mb-6 font-semibold text-gray-500">Welcome, {user.name}!</p>}
          <nav>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 rounded mb-3 transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-blue-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-10 overflow-y-auto">
          <div className="p-6 pt-20">
            <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>
            {user && <p className="mb-6 text-gray-500">Welcome, {user.name}!</p>}
            <nav>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-3 px-4 rounded mb-3 transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-blue-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
