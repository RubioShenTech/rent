import React from 'react';
import { Check, Shield, Award } from 'lucide-react';

interface BadgeProps {
  type: 'verified' | 'top-reviewer' | 'landlord' | 'tenant';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge: React.FC<BadgeProps> = ({ type, size = 'md' }) => {
  const getBadgeConfig = () => {
    switch (type) {
      case 'verified':
        return {
          icon: Check,
          text: 'Verified',
          className: 'bg-green-100 text-green-800 border-green-200'
        };
      case 'top-reviewer':
        return {
          icon: Award,
          text: 'Top Reviewer',
          className: 'bg-purple-100 text-purple-800 border-purple-200'
        };
      case 'landlord':
        return {
          icon: Shield,
          text: 'Landlord',
          className: 'bg-blue-100 text-blue-800 border-blue-200'
        };
      case 'tenant':
        return {
          icon: Shield,
          text: 'Tenant',
          className: 'bg-orange-100 text-orange-800 border-orange-200'
        };
      default:
        return {
          icon: Check,
          text: 'Badge',
          className: 'bg-gray-100 text-gray-800 border-gray-200'
        };
    }
  };

  const config = getBadgeConfig();
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16
  };

  return (
    <span className={`inline-flex items-center space-x-1 rounded-full border ${config.className} ${sizeClasses[size]} font-medium`}>
      <Icon size={iconSizes[size]} />
      <span>{config.text}</span>
    </span>
  );
};