
import React from 'react';

const HeroTitle: React.FC = () => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 font-serif leading-tight">
      Shape Your Future at <br className="hidden sm:block" />
      <span className="text-university-400">Future Bound Campus</span>
    </h1>
  );
};

export default HeroTitle;
