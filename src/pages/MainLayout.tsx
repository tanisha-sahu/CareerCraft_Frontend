// MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/landing/Navbar'; // adjust path as needed
import Footer from '../components/landing/Footer'; // adjust path as needed
// import InfiniteScrollBar from '../components/landing/InfiniteScrollBar';

const MainLayout: React.FC = () => {
  return (
    <div className='bg-[#F8F8EC]'>
      {/* <InfiniteScrollBar/> */}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
