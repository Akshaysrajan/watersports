import React from 'react';
import { ShieldCheck, Trophy, Clock, Heart, LifeBuoy, Smile } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Safety First",
      description: "All activities follow strict safety protocols with certified equipment and trained staff."
    },
    {
      icon: <Trophy className="w-10 h-10 text-blue-600" />,
      title: "Certified Instructors",
      description: "Our team consists of certified professionals with years of water sports experience."
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "Flexible Scheduling",
      description: "Choose from multiple time slots throughout the day to fit your travel plans."
    },
    {
      icon: <Heart className="w-10 h-10 text-blue-600" />,
      title: "Customer Satisfaction",
      description: "We pride ourselves on our 4.9-star rating and hundreds of happy customers."
    },
    {
      icon: <LifeBuoy className="w-10 h-10 text-blue-600" />,
      title: "Quality Equipment",
      description: "We use only the best equipment, regularly maintained and updated for your safety."
    },
    {
      icon: <Smile className="w-10 h-10 text-blue-600" />,
      title: "Personalized Experience",
      description: "We tailor each activity to your skill level, ensuring a fun and safe experience."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100">
            We're committed to providing safe, exciting, and memorable water adventures for everyone.
            Here's what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-blue-100">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;