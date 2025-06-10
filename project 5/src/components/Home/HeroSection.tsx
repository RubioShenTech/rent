import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 sm:py-16 px-4 safe-area-top safe-area-left safe-area-right">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Find Your Perfect
          <span className="block text-blue-200">Rental Experience</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 px-4">
          Connect with trusted landlords and tenants through verified reviews
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 active:bg-blue-100 transition-colors touch-manipulation text-base">
            Search Properties
          </button>
          <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 active:bg-blue-50 active:text-blue-600 transition-colors touch-manipulation text-base">
            Post a Review
          </button>
        </div>
      </div>
    </div>
  );
};