import React, { useState } from 'react';
import { MapPin, Filter, List, Grid } from 'lucide-react';
import { Property } from '../../types';
import { PropertyCard } from '../Property/PropertyCard';

export const MapView: React.FC = () => {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data
  const properties: Property[] = [
    {
      id: '1',
      address: '123 Oak Street, Downtown',
      lat: 40.7128,
      lng: -74.0060,
      type: 'apartment',
      bedrooms: 2,
      bathrooms: 1,
      rent: 2500,
      photos: ['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'],
      landlordId: '1',
      landlord: {
        id: '1',
        name: 'John Smith',
        email: 'john@email.com',
        role: 'landlord',
        verified: true,
        rating: 4.7,
        reviewCount: 23,
        joinedDate: '2022-03-15'
      },
      rating: 4.8,
      reviewCount: 15,
      tags: ['pet-friendly', 'parking', 'laundry']
    },
    {
      id: '2',
      address: '456 Pine Avenue, Midtown',
      lat: 40.7580,
      lng: -73.9855,
      type: 'house',
      bedrooms: 3,
      bathrooms: 2,
      rent: 3200,
      photos: ['https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'],
      landlordId: '2',
      landlord: {
        id: '2',
        name: 'Sarah Johnson',
        email: 'sarah@email.com',
        role: 'landlord',
        verified: true,
        rating: 4.9,
        reviewCount: 31,
        joinedDate: '2021-11-20'
      },
      rating: 4.6,
      reviewCount: 12,
      tags: ['garden', 'parking', 'quiet']
    }
  ];

  return (
    <div className="h-screen flex flex-col safe-area-top">
      {/* Map Controls */}
      <div className="bg-white border-b border-gray-200 p-3 sm:p-4 safe-area-left safe-area-right">
        <div className="flex items-center justify-between mb-3 sm:mb-0">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation text-sm sm:text-base"
            >
              <Filter size={16} />
              <span className="hidden sm:inline">Filters</span>
            </button>
            <span className="text-xs sm:text-sm text-gray-600">
              {properties.length} properties
            </span>
          </div>
          
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-md transition-colors touch-manipulation text-sm ${
                viewMode === 'map'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <MapPin size={14} />
              <span className="hidden sm:inline">Map</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-md transition-colors touch-manipulation text-sm ${
                viewMode === 'list'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <List size={14} />
              <span className="hidden sm:inline">List</span>
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mt-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-base touch-manipulation">
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Condo</option>
                  <option>Room</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-base touch-manipulation">
                  <option>Any Price</option>
                  <option>Under $2,000</option>
                  <option>$2,000 - $3,000</option>
                  <option>$3,000 - $4,000</option>
                  <option>Over $4,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-base touch-manipulation">
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-base touch-manipulation">
                  <option>Any Rating</option>
                  <option>4.0+ Stars</option>
                  <option>4.5+ Stars</option>
                  <option>5.0 Stars</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Map/List Content */}
      <div className="flex-1 overflow-hidden">
        {viewMode === 'map' ? (
          <div className="h-full bg-gray-100 relative">
            {/* Mock Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
              <div className="text-center px-4">
                <MapPin size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Interactive Map</h3>
                <p className="text-sm sm:text-base text-gray-600">Map integration would be implemented here</p>
              </div>
            </div>

            {/* Property Pins (Mock) */}
            <div className="absolute top-1/4 left-1/3 bg-blue-600 text-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 active:bg-blue-800 transition-colors touch-manipulation">
              <MapPin size={18} />
            </div>
            <div className="absolute top-1/2 right-1/3 bg-green-600 text-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-green-700 active:bg-green-800 transition-colors touch-manipulation">
              <MapPin size={18} />
            </div>
          </div>
        ) : (
          <div className="h-full overflow-y-auto p-3 sm:p-4 safe-area-left safe-area-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};