import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import TopBar from './TopBar';
import watercolourBg from '../../assets/LandingPageImg/watercolour-bg.png';

const AfterLogin = () => {
  return (
    <div className="min-h-screen flex font-primary relative bg-warm-white">
      {/* Background Layer with reduced opacity */}
      <div
        className="absolute inset-0 z-0 opacity-70 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url(${watercolourBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      ></div>

      <div className="relative z-10 w-full flex">
        <SideBar />
        <div className="flex-1 ml-28 flex flex-col min-h-screen">
          <TopBar />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterLogin;
