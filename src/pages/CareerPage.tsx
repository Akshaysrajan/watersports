import React from 'react';
import Navbar from '../components/Navbar';
import CareerSection from '../components/CareerSection';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

const CareerPage: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="pt-20"> {/* Add padding to account for fixed navbar */}
        <CareerSection />
      </div>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default CareerPage;