import React from 'react';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300">
        <h3 className="text-2xl font-bold mb-2">{activity.title}</h3>
        {/* <div className="flex items-center justify-between mb-3">
          <span className="bg-yellow-400 text-blue-900 font-bold px-3 py-1 rounded-full text-sm">
            ₹{activity.price} per person
          </span>
        </div> */}
        <p className="text-gray-200 mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {activity.description}
        </p>
        
      </div>
    </div>
  );
};

export default ActivityCard;