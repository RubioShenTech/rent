import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { User } from '../../types';

interface HeaderProps {
  user: User | null;
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 safe-area-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 safe-area-left safe-area-right">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
            >
              <Menu size={20} />
            </button>
            <div className="flex-shrink-0 flex items-center ml-2 md:ml-0">
              <h1 className="text-lg sm:text-xl font-bold text-blue-600">RentConnect</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search properties or users..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80 text-base"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors touch-manipulation">
              <Bell size={18} />
            </button>
            {user && (
              <div className="flex items-center space-x-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover"
                />
                <span className="hidden md:block text-sm font-medium text-gray-700">
                  {user.name}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};