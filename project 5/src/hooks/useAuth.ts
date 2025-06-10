import { useState, useEffect } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    setTimeout(() => {
      setUser({
        id: '1',
        name: 'Sarah Johnson',
        email: 'sarah.johnson@email.com',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        role: 'tenant',
        verified: true,
        rating: 4.8,
        reviewCount: 12,
        joinedDate: '2023-01-15'
      });
      setLoading(false);
    }, 1000);
  }, []);

  const login = (email: string, password: string) => {
    // Simulate login
    return Promise.resolve();
  };

  const logout = () => {
    setUser(null);
  };

  return { user, loading, login, logout };
};