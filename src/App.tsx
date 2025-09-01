import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ActivitiesSection from './components/ActivitiesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
// import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import CareerSection from './components/CareerSection';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Lakeside watersports';
    
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for fixed header
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Add scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animate-active');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <WhyChooseUsSection />
      {/* <GallerySection /> */}
      <TestimonialsSection />
      <ContactSection />
      <CareerSection />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;