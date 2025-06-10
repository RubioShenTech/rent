import React from 'react';
import { StarRating } from '../Common/StarRating';
import { Badge } from '../Common/Badge';
import { MapPin, Clock } from 'lucide-react';

export const FeaturedReviews: React.FC = () => {
  const reviews = [
    {
      id: '1',
      reviewer: {
        name: 'Mike Chen',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        role: 'tenant' as const
      },
      property: '123 Oak Street, Downtown',
      rating: 4.8,
      title: 'Excellent landlord and beautiful apartment',
      content: 'Sarah was incredibly responsive and professional. The apartment was exactly as described...',
      timeAgo: '2 days ago'
    },
    {
      id: '2',
      reviewer: {
        name: 'Jennifer Park',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        role: 'landlord' as const
      },
      property: '456 Pine Avenue, Midtown',
      rating: 4.9,
      title: 'Model tenant - highly recommended',
      content: 'Always paid rent on time, kept the property in excellent condition, and communicated well...',
      timeAgo: '1 week ago'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recent Reviews
          </h2>
          <p className="text-lg text-gray-600">
            See what our community is saying
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={review.reviewer.avatar}
                  alt={review.reviewer.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{review.reviewer.name}</h3>
                    <Badge type={review.reviewer.role} size="sm" />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={14} />
                    <span>{review.property}</span>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating rating={review.rating} size={16} />
                  <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                    <Clock size={12} />
                    <span>{review.timeAgo}</span>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
              <p className="text-gray-600 leading-relaxed">{review.content}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};