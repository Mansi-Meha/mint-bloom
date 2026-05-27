import React from 'react';
import { Search, MessageCircle, Bell } from 'lucide-react';
import MintBloomLogo from '../../assets/LandingPageImg/MintBloomLogo.png';

const TopBar = () => {
  return (
    <div className="w-full flex items-center justify-between py-6 px-8 font-primary bg-transparent">
      {/* Left side: Logo and Title */}
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <img src={MintBloomLogo} alt="Mint Bloom" className="h-12 w-auto" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-brand text-muted-dark-green tracking-wide">
            mint bloom
          </h1>
          <p className="text-sm pt-2 font-primary text-muted-dark-green/60 font-medium">
            Explore information and activity about your business
          </p>
        </div>
      </div>

      {/* Right side: Search and Actions */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative flex items-center bg-white rounded-full shadow-sm border border-soft-sage/20 px-4 py-1.5 w-72 transition-all focus-within:ring-2 focus-within:ring-mint-green/20">
          <input 
            type="text" 
            placeholder="Search..." 
            className="flex-1 bg-transparent border-none outline-none text-sm text-muted-dark-green placeholder:text-muted-dark-green/40 py-2"
          />
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-muted-dark-green text-white hover:bg-mint-green transition-colors shrink-0">
            <Search className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

        {/* Action Buttons */}
       

        <button className="flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-sm border border-soft-sage/20 text-muted-dark-green hover:text-mint-green hover:border-mint-green/30 transition-all">
          <Bell className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
