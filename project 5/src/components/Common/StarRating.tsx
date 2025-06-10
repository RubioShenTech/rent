import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  readonly?: boolean;
  onRatingChange?: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 16,
  readonly = true,
  onRatingChange
}) => {
  const handleStarClick = (newRating: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {[...Array(maxRating)].map((_, index) => {
        const starRating = index + 1;
        const isActive = starRating <= rating;
        const isPartial = starRating - 0.5 <= rating && rating < starRating;

        return (
          <button
            key={index}
            onClick={() => handleStarClick(starRating)}
            disabled={readonly}
            className={`${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'} transition-transform`}
          >
            <Star
              size={size}
              className={`${
                isActive
                  ? 'text-yellow-400 fill-current'
                  : isPartial
                  ? 'text-yellow-400 fill-yellow-200'
                  : 'text-gray-300'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};