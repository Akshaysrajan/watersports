import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ActivitiesSection from '../components/ActivitiesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import FloatingButton from '../components/FloatingButton';

const HomePage: React.FC = () => {
  useEffect(() => {
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
    <div>
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingButton />
    </div>
  );
};

export default HomePage;