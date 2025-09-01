import React from 'react';
import { Shield, Award, Users } from 'lucide-react';
import aboutimage from '../assets/images/3.jpeg';
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Welcome to Lakeside Water Sports, where adventure meets the beauty of Kerala's
            pristine waters. we've been providing unforgettable water
            experiences for thrill-seekers and nature lovers alike.
          </p>  
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-900 transform translate-x-3 translate-y-3 rounded-lg"></div>
            <img
              // src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              src={aboutimage}
              alt="Kerala backwaters adventure"
              className="relative z-10 rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Story & Mission</h3>
            <p className="text-gray-700 mb-6">
              Lakeside Water Sports
              began with a simple vision: to share the beauty of Kerala's waters through exciting
              and safe adventures. We believe that everyone should experience the thrill of water
              sports while connecting with nature.
            </p>
            <p className="text-gray-700 mb-8">
              Our mission is to provide high-quality water sports experiences that are safe,
              environmentally responsible, and unforgettable. We pride ourselves on our expert
              instructors, top-notch equipment, and personalized service that caters to both
              beginners and experienced adventurers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <h4 className="font-bold text-blue-900">Safety First</h4>
                <p className="text-sm text-gray-600">Certified equipment & procedures</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Award className="text-blue-600" size={24} />
                </div>
                <h4 className="font-bold text-blue-900">Expert Guides</h4>
                <p className="text-sm text-gray-600">Certified & experienced instructors</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Users className="text-blue-600" size={24} />
                </div>
                <h4 className="font-bold text-blue-900">For Everyone</h4>
                <p className="text-sm text-gray-600">Activities for all skill levels</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;