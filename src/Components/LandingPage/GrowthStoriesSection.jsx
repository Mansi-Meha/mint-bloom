import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { stories } from '../../data/stories';
import StoryCard from './StoryCard';

const GrowthStoriesSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="growth-stories" className="py-24 bg-light-mint/25 relative overflow-hidden scroll-mt-24">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-muted-dark-green max-w-lg leading-tight">
              <span className="font-brand">Growth Stories.</span> <br />From Real Buisnesses.
            </h2>
            <p className="text-xl text-muted-dark-green/60 max-w-md leading-relaxed font-light">
              See how entrepreneurs across Bharat are transforming their crafts into digital brands.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              to="/stories"
              className="group flex items-center gap-3 px-7 py-3.5 bg-muted-dark-green text-white rounded-full font-bold text-sm hover:bg-mint-green hover:shadow-xl hover:shadow-mint-green/20 hover:-translate-y-0.5 transition-all duration-500"
            >
              Explore All Stories
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-soft-sage/30 flex items-center justify-center text-muted-dark-green hover:bg-white hover:border-mint-green hover:text-mint-green transition-all duration-300 shadow-sm"
                aria-label="Scroll Left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-soft-sage/30 flex items-center justify-center text-muted-dark-green hover:bg-white hover:border-mint-green hover:text-mint-green transition-all duration-300 shadow-sm"
                aria-label="Scroll Right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pt-10 pb-16 scrollbar-none snap-x snap-mandatory px-4"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {stories.map((story) => (
              <div key={story.id} className="snap-center">
                <StoryCard story={story} />
              </div>
            ))}
          </div>

          </div>

        
          
      </div>
    </section>
  );
};

export default GrowthStoriesSection;
