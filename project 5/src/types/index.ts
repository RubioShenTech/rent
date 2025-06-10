export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'landlord' | 'tenant';
  verified: boolean;
  rating: number;
  reviewCount: number;
  joinedDate: string;
}

export interface Property {
  id: string;
  address: string;
  lat: number;
  lng: number;
  type: 'apartment' | 'house' | 'condo' | 'room';
  bedrooms: number;
  bathrooms: number;
  rent: number;
  photos: string[];
  landlordId: string;
  landlord: User;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface Review {
  id: string;
  propertyId: string;
  reviewerId: string;
  revieweeId: string;
  reviewerRole: 'landlord' | 'tenant';
  overallRating: number;
  ratings: {
    communication: number;
    cleanliness: number;
    maintenance: number;
    payment: number;
    respect: number;
  };
  title: string;
  content: string;
  photos: string[];
  createdAt: string;
  verified: boolean;
}

export interface MapPin {
  id: string;
  lat: number;
  lng: number;
  property: Property;
  rating: number;
}