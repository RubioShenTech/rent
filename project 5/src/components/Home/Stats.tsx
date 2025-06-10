import React from 'react';
import { Users, Home, MessageSquare, MapPin } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Active Users',
      color: 'text-blue-600'
    },
    {
      icon: Home,
      value: '5,500+',
      label: 'Properties Reviewed',
      color: 'text-green-600'
    },
    {
      icon: MessageSquare,
      value: '25,000+',
      label: 'Reviews Posted',
      color: 'text-purple-600'
    },
    {
      icon: MapPin,
      value: '50+',
      label: 'Cities Covered',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  <Icon size={48} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};