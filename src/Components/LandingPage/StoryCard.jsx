import React, { useState, useEffect } from 'react';

const StoryCard = ({ story, detailed = false }) => {
  const [showOwner, setShowOwner] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowOwner((prev) => !prev);
    }, 4000); // Swap every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`
      flex-shrink-0 
      ${detailed ? 'w-full' : 'w-[320px] sm:w-[380px]'} 
      bg-white 
      rounded-[2.5rem] 
      overflow-hidden
      flex 
      flex-col 
      transition-all 
      duration-500 
      group
      border border-soft-sage/10
      shadow-sm 
      hover:shadow 
      hover:scale-[1.03]
      relative
    `}>
      {/* Top Banner: Image Toggle (Brand <-> Owner) */}
      <div className="h-56 relative bg-soft-sage/5 overflow-hidden">
        {/* Brand Image */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${showOwner ? 'opacity-0' : 'opacity-100'}`}>
          <img 
            src={story.imageUrl} 
            alt={story.type} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-muted-dark-green/40 to-transparent"></div>
          <div className="absolute top-4 right-6">
            <span className="bg-white/90 backdrop-blur-sm text-muted-dark-green text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-soft-sage/20 shadow-sm">
              The Brand
            </span>
          </div>
        </div>

        {/* Owner Image */}
        <div className={`absolute inset-0 transition-opacity  duration-1000 ${showOwner ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src={story.ownerImageUrl} 
            alt={story.name} 
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-muted-dark-green/40 to-transparent"></div>
          <div className="absolute top-4 right-6">
            <span className="bg-mint-green text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-mint-green/20">
              The Founder
            </span>
          </div>
        </div>

        {/* Floating Tag */}
        <div className="absolute bottom-4 left-6">
          <span className="bg-white text-muted-dark-green text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-soft-sage/20 shadow-md">
            {story.type}
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-8 flex flex-col gap-6">
        {/* Header/Name */}
        <div className="mb-2">
          <h3 className="text-3xl font-medium text-muted-dark-green font-serif mb-2">{story.name}</h3>
          <p className="text-[10px] font-bold text-mint-green uppercase tracking-[0.2em] opacity-80">Transformational Journey</p>
        </div>
        
        {/* Transformation Lane */}
        <div className="flex items-center justify-between relative px-2">
          <div className="flex-1">
            <p className="text-[10px] font-bold text-muted-dark-green/30 uppercase tracking-widest mb-1">Before</p>
            <p className="text-sm font-medium text-muted-dark-green/60 italic leading-tight">{story.before}</p>
          </div>
          
          <div className="flex flex-col items-center gap-1 mx-4">
             <div className="w-8 h-8 rounded-full bg-light-pastel-green flex items-center justify-center text-mint-green">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5-5 5M6 12h12" />
                </svg>
             </div>
          </div>

          <div className="flex-1 text-right">
            <p className="text-[10px] font-bold text-mint-green uppercase tracking-widest mb-1">After</p>
            <p className="text-sm font-bold text-muted-dark-green leading-tight">{story.after}</p>
          </div>
        </div>

        {/* Growth Stats: Three Columns (Income, Reach, Sales) */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-light-pastel-green/30 p-4 rounded-2xl flex flex-col items-center text-center">
            <p className="text-lg font-bold text-muted-dark-green mb-0.5">{story.growth.income}</p>
            <p className="text-[9px] font-bold text-muted-dark-green/40 uppercase tracking-widest">Income</p>
          </div>
          <div className="bg-soft-sage/5 p-4 rounded-2xl flex flex-col items-center text-center border border-soft-sage/10">
            <p className="text-lg font-bold text-mint-green mb-0.5">{story.growth.reach}</p>
            <p className="text-[9px] font-bold text-muted-dark-green/40 uppercase tracking-widest">Reach</p>
          </div>
          <div className="bg-light-pastel-green/30 p-4 rounded-2xl flex flex-col items-center text-center">
            <p className="text-lg font-bold text-muted-dark-green mb-0.5">{story.growth.sales}</p>
            <p className="text-[9px] font-bold text-muted-dark-green/40 uppercase tracking-widest">Sales</p>
          </div>
        </div>

        {/* The Human Story */}
        <div className="space-y-3">
          <p className={`
            text-muted-dark-green/70 
            font-normal
            leading-relaxed
            ${detailed ? 'text-lg' : 'text-sm italic line-clamp-3'}
          `}>
             "{story.story}"
          </p>
        </div>

      </div>

      {/* Footer Decoration */}
      <div className="h-2 w-full bg-gradient-to-r from-mint-green/20 via-soft-sage/20 to-mint-green/20 opacity-30"></div>
    </div>
  );
};

export default StoryCard;
