import React from 'react';
import { Link } from 'react-router-dom';
import MintBloomLogo from '../../assets/LandingPageImg/MintBloomLogo.png';

const NavBar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl h-20 bg-warm-white/90 backdrop-blur-md border border-gold-beige/30 rounded-full shadow-lg shadow-muted-dark-green/5 flex items-center px-8 transition-all duration-500 ease-in-out">
      <div className="w-full flex justify-between items-center">
        {/* Left: Logo and Title */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="bg-warm-white p-1.5 rounded-full transition-transform duration-500 group-hover:rotate-12">
            <img src={MintBloomLogo} alt="Mint Bloom Logo" className="h-12 md:h-14 w-auto object-contain" />
          </div>
          <span className="font-brand text-3xl md:text-4xl text-muted-dark-green leading-none pt-1 transition-colors duration-300 group-hover:text-mint-green">
            mint bloom
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          {['Home', 'How it works', "Who it's for", "Growth Stories"].map((item) => (
            <Link 
              key={item}
              to={`/#${item.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`} 
              className="relative text-muted-dark-green font-medium text-[0.95rem] opacity-75 hover:opacity-100 hover:text-mint-green transition-all duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-mint-green rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link to="/join-pilot" className="hidden sm:block px-6 py-2.5 rounded-full text-sm font-semibold text-muted-dark-green border-1.5 border-soft-sage/40 hover:bg-gold-beige/20 hover:border-mint-green hover:text-mint-green transition-all duration-300 font-primary">
            Join pilot
          </Link>
          <Link to="/login" className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-mint-green shadow-lg shadow-mint-green/20 hover:bg-muted-dark-green hover:shadow-xl hover:shadow-muted-dark-green/10 hover:-translate-y-0.5 transition-all duration-300 font-primary flex items-center justify-center">
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;