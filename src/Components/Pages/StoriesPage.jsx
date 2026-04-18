import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../LandingPage/NavBar';
import Footer from '../LandingPage/Footer';
import { stories } from '../../data/stories';
import StoryCard from '../LandingPage/StoryCard';

const StoriesPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <NavBar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-serif text-muted-dark-green mb-6 leading-tight">
              Stories of Growth <br/>with <span className="text-mint-green font-brand">mint bloom</span>
            </h1>
            <p className="text-xl text-muted-dark-green/70 max-w-2xl mx-auto leading-relaxed font-light">
              Every brand started with a small dream and a lot of heart. 
              Explore the journeys of women entrepreneurs who took the leap.
            </p>
          </div>

          {/* Grid Layout for Desktop, Stacks on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} detailed={true} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="relative overflow-hidden bg-muted-dark-green rounded-[3rem] p-12 md:p-20 text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-mint-green/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-beige/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-brand">
                Start Your Brand Journey Today
              </h2>
              <p className="text-soft-sage text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
                Join our pilot program and get personalized guidance to grow your local business into a national brand.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-10 py-5 bg-mint-green text-white rounded-full font-bold text-lg hover:bg-white hover:text-muted-dark-green transition-all duration-300 shadow-xl shadow-mint-green/20">
                  Apply for Pilot
                </button>
                <Link to="/" className="text-soft-sage hover:text-white transition-colors duration-300 font-medium">
                  Go Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StoriesPage;
