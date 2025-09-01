import React from 'react';
import {  Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import logo from '../assets/images/logo.png';
const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Lakeside Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold">Lakeside Water Sports</span>
            </div>
            <p className="text-blue-100 mb-4">
              Experience the thrill of water adventures in the beautiful backwaters and coastlines of
              Kerala. Safe, fun, and unforgettable experiences for everyone.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Activities
                </a>
              </li>
              <li>
                {/* <a
                  href="#gallery"
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Gallery
                </a> */}
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>  
                
                <a
                  href="#contact"
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Activities</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#activities"
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Jet Skiing
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Sailing
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Banana Boat Rides
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Kayaking
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Stand-Up Paddleboarding
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Power Boating
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-blue-100">
                Edavannapara Road, Kayalam, Mavoor, Calicut, Kerala - 673661 
              </li>
              <li className="text-blue-100">+917907119952</li>
              <li className="text-blue-100">info@lakesidewatersportsltd.com</li>
              <li className="text-blue-100">Daily: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-blue-800 text-center text-blue-200">
          <p>© {new Date().getFullYear()} Lakeside Water Sports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;