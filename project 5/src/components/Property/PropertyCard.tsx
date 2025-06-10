import React from 'react';
import { MapPin, Bed, Bath, DollarSign, Star } from 'lucide-react';
import { Property } from '../../types';
import { StarRating } from '../Common/StarRating';
import { Badge } from '../Common/Badge';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={property.photos[0]}
          alt={property.address}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-semibold text-green-600">
          ${property.rent}/mo
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center space-x-2 text-gray-600 mb-2">
          <MapPin size={16} />
          <span className="text-sm">{property.address}</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Bed size={16} />
              <span>{property.bedrooms} bed</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath size={16} />
              <span>{property.bathrooms} bath</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <StarRating rating={property.rating} size={14} />
            <span className="text-sm text-gray-600">({property.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <img
              src={property.landlord.avatar}
              alt={property.landlord.name}
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="text-sm text-gray-700">{property.landlord.name}</span>
            {property.landlord.verified && <Badge type="verified" size="sm" />}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {property.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {property.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{property.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};