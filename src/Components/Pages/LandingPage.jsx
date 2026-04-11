import React from 'react';
import NavBar from '../LandingPage/NavBar';
import HeroSection from '../LandingPage/HeroSection';
import ProblemSection from '../LandingPage/ProblemSection';
import SolutionSection from '../LandingPage/SolutionSection';
import HowItWorks from '../LandingPage/HowItWorks';
import WhoItsFor from '../LandingPage/WhoItsFor';
import TrustSection from '../LandingPage/TrustSection';
import CTASection from '../LandingPage/CTASection';
import Footer from '../LandingPage/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <WhoItsFor />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
