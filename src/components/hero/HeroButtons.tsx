
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-4 w-full sm:w-auto">
      <Link to="/apply" className="w-full sm:w-auto">
        <Button className="w-full bg-university-400 hover:bg-university-500 text-white font-medium px-4 sm:px-6 py-6 sm:py-6 text-sm sm:text-base">
          Start Your Application
        </Button>
      </Link>
      <Link to="/courses" className="w-full sm:w-auto">
        <Button variant="outline" className="w-full border-2 border-white bg-white/20 hover:bg-white/30 text-white font-medium px-4 sm:px-6 py-6 sm:py-6 text-sm sm:text-base">
          Explore Our Courses
        </Button>
      </Link>
    </div>
  );
};

export default HeroButtons;
