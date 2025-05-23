import React, { useState, useEffect } from 'react';
import { Menu, X, } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-blue-900/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        

        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
  <a href="#" className="flex items-center space-x-2 text-white">
    <img src={logo} alt="Lakeside Logo" className="h-10 w-auto" />
    <span className="text-xl font-bold">Lakeside Water Sports</span>
  </a>
</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            About
          </a>
          <a
            href="#activities"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Activities
          </a>
          {/* <a
            href="#gallery"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Gallery 
          </a> */}
          <a
            href="#testimonials"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-blue-900/95 backdrop-blur-md transition-all duration-300 ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden py-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a
            href="#home"
            className="text-white hover:text-yellow-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-yellow-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#activities"
            className="text-white hover:text-yellow-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Activities
          </a>
          <a
            href="#gallery"
            className="text-white hover:text-yellow-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#testimonials"
            className="text-white hover:text-yellow-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-white hover:text-yellow-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;