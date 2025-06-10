import React, { useState } from 'react';
import { StarRating } from '../Common/StarRating';
import { Camera, Send } from 'lucide-react';

export const ReviewForm: React.FC = () => {
  const [reviewType, setReviewType] = useState<'landlord' | 'tenant'>('landlord');
  const [ratings, setRatings] = useState({
    overall: 0,
    communication: 0,
    cleanliness: 0,
    maintenance: 0,
    payment: 0,
    respect: 0
  });
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleRatingChange = (category: string, rating: number) => {
    setRatings(prev => ({ ...prev, [category]: rating }));
  };

  const ratingCategories = [
    { key: 'communication', label: 'Communication', description: 'Response time and clarity' },
    { key: 'cleanliness', label: 'Cleanliness', description: 'Property maintenance and tidiness' },
    { key: 'maintenance', label: 'Maintenance', description: 'Repairs and upkeep' },
    { key: 'payment', label: 'Payment', description: 'Rent payment and financial matters' },
    { key: 'respect', label: 'Respect', description: 'Professional behavior and boundaries' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 safe-area-left safe-area-right">
      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Write a Review</h2>
          <p className="text-sm sm:text-base text-gray-600">Share your experience to help others make informed decisions</p>
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          {/* Review Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              I am reviewing my:
            </label>
            <div className="flex space-x-3 sm:space-x-4">
              <button
                onClick={() => setReviewType('landlord')}
                className={`flex-1 px-4 sm:px-6 py-3 rounded-lg border-2 transition-all touch-manipulation text-sm sm:text-base ${
                  reviewType === 'landlord'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:border-gray-400 active:bg-gray-50'
                }`}
              >
                Landlord
              </button>
              <button
                onClick={() => setReviewType('tenant')}
                className={`flex-1 px-4 sm:px-6 py-3 rounded-lg border-2 transition-all touch-manipulation text-sm sm:text-base ${
                  reviewType === 'tenant'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:border-gray-400 active:bg-gray-50'
                }`}
              >
                Tenant
              </button>
            </div>
          </div>

          {/* Overall Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Overall Rating
            </label>
            <div className="flex justify-center sm:justify-start">
              <StarRating
                rating={ratings.overall}
                readonly={false}
                size={28}
                onRatingChange={(rating) => handleRatingChange('overall', rating)}
              />
            </div>
          </div>

          {/* Category Ratings */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Rate Different Aspects
            </label>
            <div className="space-y-3 sm:space-y-4">
              {ratingCategories.map((category) => (
                <div key={category.key} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50 rounded-lg space-y-2 sm:space-y-0">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">{category.label}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{category.description}</p>
                  </div>
                  <div className="flex justify-center sm:justify-end">
                    <StarRating
                      rating={ratings[category.key as keyof typeof ratings]}
                      readonly={false}
                      size={18}
                      onRatingChange={(rating) => handleRatingChange(category.key, rating)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Review Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Summarize your experience..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
            />
          </div>

          {/* Review Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Review
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              placeholder="Share your detailed experience..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-base touch-manipulation"
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add Photos (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-gray-400 active:bg-gray-50 transition-colors touch-manipulation">
              <Camera size={36} className="mx-auto text-gray-400 mb-2" />
              <p className="text-sm sm:text-base text-gray-600">Tap to upload photos</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">PNG, JPG up to 10MB each</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors flex items-center justify-center space-x-2 touch-manipulation text-base">
              <Send size={18} />
              <span>Submit Review</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};