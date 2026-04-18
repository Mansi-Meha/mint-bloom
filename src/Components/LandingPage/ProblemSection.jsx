import React from 'react';

const ProblemSection = () => {
  const problems = [
    {
      label: "Visual Story",
      title: "No Clear Branding",
      description: "Your product is amazing, but it lacks a visual story that people remember and trust.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
          <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10c0 5-2 5-2 10s-5-2-8-2Z"/>
        </svg>
      ),
      rotation: "rotate-[-3deg]",
      translate: "translate-y-0 translate-x-4 lg:translate-x-8"
    },
    {
      label: "Packaging",
      title: "No Professional Identity",
      description: "Generic packaging fails to convey the premium quality of your handcrafted goods.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
          <path d="m3.3 7 8.7 5 8.7-5"/>
          <path d="M12 22V12"/>
        </svg>
      ),
      rotation: "rotate-[2deg]",
      translate: "translate-y-[-10px] translate-x-0"
    },
    {
      label: "Digital Reach",
      title: "Limited Local Sales",
      description: "Customers can't find you online, restricting your reach to only your neighborhood.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
          <path d="M2 12h20"/>
        </svg>
      ),
      rotation: "rotate-[-1deg]",
      translate: "translate-y-[-20px] translate-x-4 lg:translate-x-8"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-light-mint/20 relative overflow-hidden flex items-center justify-center">
      
      {/* Watercolor Background Textures */}
      
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-mint-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl w-[90%] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start gap-8 max-w-xl">
            <div className="inline-flex px-5 py-2 rounded-full bg-white/60 border border-mint-green/10 text-mint-green text-sm font-medium tracking-wide shadow-sm">
              The Problem
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl lg:text-[3.5rem]  text-muted-dark-green font-serif leading-[1.15]">
                It should be easier for <br className="hidden md:block font-serif" />
                <span className="text-mint-green italic font-serif">local products</span> to reach <br className="hidden md:block font-serif" />
                the <span className="font-brand text-3xl md:text-4xl lg:text-5xl block mt-2 text-muted-dark-green/90">global market</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-dark-green/60 leading-relaxed font-light">
                Because most brand-building tools were made for corporate giants—not independent women building something of their own—taking your business to the next level is tough.
              </p>
            </div>
          </div>

          {/* Right Column: Stacked Tilted Cards */}
          <div className="relative flex flex-col items-center lg:items-end pr-0 lg:pr-12 pt-8 lg:pt-0 pb-12 lg:pb-0">
            <div className="w-full max-w-[420px] flex flex-col gap-6 lg:gap-2">
              {problems.map((item, index) => (
                <div
                  key={index}
                  className={`
                    bg-white rounded-[2rem] p-8 shadow-xl shadow-muted-dark-green/5 
                    border border-gold-beige/20 flex flex-col gap-4 
                    transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:z-20
                    ${item.rotation} ${item.translate}
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-light-mint flex items-center justify-center text-mint-green">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-dark-green/30 px-3 py-1 rounded-full bg-light-mint/30">
                      {item.label}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-muted-dark-green leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-dark-green/50 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;