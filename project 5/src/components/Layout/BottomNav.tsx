import React from 'react';
import { Home, Map, Plus, User, MessageSquare } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'map', icon: Map, label: 'Map' },
    { id: 'review', icon: Plus, label: 'Review' },
    { id: 'reviews', icon: MessageSquare, label: 'Reviews' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-1 md:hidden safe-area-bottom safe-area-left safe-area-right">
      <div className="flex justify-around max-w-sm mx-auto">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center py-2 px-2 rounded-lg transition-all duration-200 touch-manipulation min-w-0 flex-1 ${
              activeTab === id
                ? 'text-blue-600 bg-blue-50 scale-105'
                : 'text-gray-600 hover:text-gray-800 active:bg-gray-100'
            }`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Icon size={20} className="mb-1" />
            <span className="text-xs font-medium truncate">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};