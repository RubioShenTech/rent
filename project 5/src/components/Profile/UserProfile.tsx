import React from 'react';
import { Calendar, MapPin, Star, MessageSquare, Award, Settings } from 'lucide-react';
import { User } from '../../types';
import { StarRating } from '../Common/StarRating';
import { Badge } from '../Common/Badge';

interface UserProfileProps {
  user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const recentReviews = [
    {
      id: '1',
      title: 'Great landlord experience',
      property: '123 Oak Street',
      rating: 5,
      date: '2024-01-15',
      type: 'received'
    },
    {
      id: '2',
      title: 'Excellent tenant',
      property: '456 Pine Avenue',
      rating: 4.8,
      date: '2024-01-10',
      type: 'given'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-32"></div>
        <div className="px-6 pb-6">
          <div className="flex items-end -mt-16 mb-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
            />
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge type={user.role} />
                    {user.verified && <Badge type="verified" />}
                  </div>
                </div>
                <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                  <Settings size={16} />
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Star className="mx-auto text-yellow-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900">{user.rating}</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <MessageSquare className="mx-auto text-blue-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900">{user.reviewCount}</div>
              <div className="text-sm text-gray-600">Reviews</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Calendar className="mx-auto text-green-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-600">Years Active</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Award className="mx-auto text-purple-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900">Top 5%</div>
              <div className="text-sm text-gray-600">Reviewer Rank</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Reviews</h2>
        <div className="space-y-4">
          {recentReviews.map((review) => (
            <div key={review.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{review.title}</h3>
                <div className="flex items-center space-x-2">
                  <StarRating rating={review.rating} size={14} />
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin size={14} />
                <span>{review.property}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  review.type === 'received' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {review.type === 'received' ? 'Received' : 'Given'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Calendar className="text-gray-400" size={20} />
            <span className="text-gray-600">
              Member since {new Date(user.joinedDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long' 
              })}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-gray-400" size={20} />
            <span className="text-gray-600">New York, NY</span>
          </div>
        </div>
      </div>
    </div>
  );
};