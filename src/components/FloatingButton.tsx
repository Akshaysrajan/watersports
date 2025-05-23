import React, { useState } from 'react';
import { MessageCircle, X, Phone, Mail} from 'lucide-react';

const FloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Quick Access Options */}
      <div
        className={`flex flex-col items-center mb-3 space-y-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <a
          href="tel:+917907119952"
          className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
          title="Call Us"
        >
          <Phone size={20} />
        </a>
        <a
          href="mailto:info@lakesidewatersportsltd.com"
          className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
          title="Email Us"
        >
          <Mail size={20} />
        </a>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          isOpen
            ? 'bg-red-500 hover:bg-red-600 rotate-45'
            : 'bg-yellow-400 hover:bg-yellow-500'
        }`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-blue-900" />
        )}
      </button>
    </div>
  );
};

export default FloatingButton;