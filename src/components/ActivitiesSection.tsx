import React from 'react';
import ActivityCard from './ActivityCard';
import { activities } from '../data/activities';

const ActivitiesSection: React.FC = () => {
  return (
    <section
      id="activities"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Popular Activities
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Explore our exciting range of water sports and activities, suitable for all ages and
            skill levels. All activities include professional equipment and guidance from our
            certified instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;