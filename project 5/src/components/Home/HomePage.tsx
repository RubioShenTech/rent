import React from 'react';
import { HeroSection } from './HeroSection';
import { SearchSection } from './SearchSection';
import { FeaturedReviews } from './FeaturedReviews';
import { Stats } from './Stats';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchSection />
      </div>
      <Stats />
      <FeaturedReviews />
    </div>
  );
};