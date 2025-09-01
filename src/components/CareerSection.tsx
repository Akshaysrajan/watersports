import React from 'react';
import { Users, MapPin, Clock, Heart, Award, Briefcase } from 'lucide-react';

const CareerSection: React.FC = () => {
  return (
    <section id="careers" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Join Our Team
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Be part of Kerala's premier water sports team. We're looking for passionate individuals 
            who love adventure and want to share the thrill of water sports with others.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">Why Work With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-blue-600" size={24} />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Passionate Environment</h4>
              <p className="text-gray-600 text-sm">Work with a team that loves what they do</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-600" size={24} />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Growth Opportunities</h4>
              <p className="text-gray-600 text-sm">Advance your career with training and certifications</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Beautiful Location</h4>
              <p className="text-gray-600 text-sm">Work in one of India's most scenic destinations</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Team Culture</h4>
              <p className="text-gray-600 text-sm">Join a supportive and collaborative team</p>
            </div>
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">Current Openings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-3">
                <Briefcase className="text-blue-600 mr-2" size={20} />
                <h4 className="font-bold text-blue-900">Water Sports Instructor</h4>
              </div>
              <p className="text-gray-600 mb-2">Full-time • Experience Required</p>
              <p className="text-gray-700 text-sm">Lead water sports activities, ensure safety protocols, and provide excellent customer service.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-3">
                <Users className="text-green-600 mr-2" size={20} />
                <h4 className="font-bold text-blue-900">Customer Service Representative</h4>
              </div>
              <p className="text-gray-600 mb-2">Full-time • Entry Level</p>
              <p className="text-gray-700 text-sm">Handle bookings, customer inquiries, and ensure exceptional guest experiences.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <div className="flex items-center mb-3">
                <Clock className="text-yellow-600 mr-2" size={20} />
                <h4 className="font-bold text-blue-900">Seasonal Guide</h4>
              </div>
              <p className="text-gray-600 mb-2">Part-time • Seasonal</p>
              <p className="text-gray-700 text-sm">Assist with tours, equipment setup, and guest safety during peak seasons.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-3">
                <Award className="text-purple-600 mr-2" size={20} />
                <h4 className="font-bold text-blue-900">Safety Officer</h4>
              </div>
              <p className="text-gray-600 mb-2">Full-time • Certification Required</p>
              <p className="text-gray-700 text-sm">Oversee safety protocols, equipment maintenance, and emergency procedures.</p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-900 text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Apply Now</h3>
              <p className="text-blue-100">
                Ready to join our team? Fill out the application form below and we'll get back to you soon.
              </p>
            </div>
            
            <div className="p-6">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src="https://forms.gle/mHdPrVaFE7vZfqPv7"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                  title="Career Application Form"
                >
                  Loading…
                </iframe>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 text-center">
                  <strong>Note:</strong> If the form doesn't load properly, you can also apply by sending your resume to{' '}
                  <a href="mailto:careers@keralawatersports.com" className="text-blue-600 hover:text-blue-800">
                    careers@keralawatersports.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;