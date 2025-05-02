
import React from 'react';
import HeroTitle from './hero/HeroTitle';
import HeroDescription from './hero/HeroDescription';
import HeroButtons from './hero/HeroButtons';
import HeroBackground from './hero/HeroBackground';

const Hero = () => {
  return (
    <div className="relative bg-university-800 text-white overflow-hidden">
      <HeroBackground />
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <HeroTitle />
          <HeroDescription />
          <HeroButtons />
        </div>
      </div>
    </div>
  );
};

export default Hero;
