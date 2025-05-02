
import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <>
      <div className="hero-gradient absolute inset-0"></div>
      {/* Decorative elements - more responsive now */}
      <div className="hidden md:block absolute -bottom-12 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 -right-12 sm:-right-16 md:-right-20 lg:-right-24 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-university-600/30 rounded-full blur-xl sm:blur-2xl md:blur-3xl"></div>
      <div className="hidden md:block absolute -top-12 sm:-top-16 md:-top-20 lg:-top-24 -left-12 sm:-left-16 md:-left-20 lg:-left-24 w-40 sm:w-48 md:w-64 lg:w-80 h-40 sm:h-48 md:h-64 lg:h-80 bg-university-700/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl"></div>
    </>
  );
};

export default HeroBackground;
