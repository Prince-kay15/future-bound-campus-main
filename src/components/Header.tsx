
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would navigate to search results
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-university-500 font-semibold' : 'text-university-700 hover:text-university-500';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-university-500 text-white rounded-md flex items-center justify-center font-bold text-xl">FB</div>
            <span className="text-xl font-bold text-university-800 hidden sm:inline-block">Future Bound Campus</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6 items-center">
              <Link to="/" className={`font-medium transition-colors ${isActive('/')}`}>Home</Link>
              <Link to="/courses" className={`font-medium transition-colors ${isActive('/courses')}`}>Courses</Link>
              <Link to="/about" className={`font-medium transition-colors ${isActive('/about')}`}>About Us</Link>
              <button 
                onClick={toggleSearch} 
                className="text-university-700 hover:text-university-500 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </nav>
            <Link to="/apply" className="university-btn">Apply Now</Link>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            <button 
              onClick={toggleSearch} 
              className="p-2 text-university-700 hover:text-university-500"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              onClick={toggleMenu} 
              className="p-2 text-university-700 hover:text-university-500"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar - Toggled by Search Button */}
        {isSearchOpen && (
          <div className="mt-4 animate-fade-in">
            <form onSubmit={handleSearch} className="flex">
              <Input
                type="text"
                placeholder="Search courses, programs..."
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button 
                type="submit"
                className="ml-2 university-btn"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-md md:hidden animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link to="/" className={`font-medium ${isActive('/')}`}>Home</Link>
              <Link to="/courses" className={`font-medium ${isActive('/courses')}`}>Courses</Link>
              <Link to="/about" className={`font-medium ${isActive('/about')}`}>About Us</Link>
              <Link to="/apply" className="university-btn text-center">Apply Now</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
