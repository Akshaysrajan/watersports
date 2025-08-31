import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Kerala Water Sports Adventure"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight leading-tight animate-fade-in-up">
          Every <span className="text-yellow-400">Journey</span> is one paddle away
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90 animate-fade-in-up animation-delay-300">
          Discover Kerala's stunning backwaters and coastal beauty through 
          exciting water sports and activities
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
          <a
            href="#activities"
            className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Explore Activities
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold rounded-full transition-all transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;