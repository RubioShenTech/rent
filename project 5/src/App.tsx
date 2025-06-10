import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { BottomNav } from './components/Layout/BottomNav';
import { HomePage } from './components/Home/HomePage';
import { MapView } from './components/Map/MapView';
import { ReviewForm } from './components/Reviews/ReviewForm';
import { UserProfile } from './components/Profile/UserProfile';
import { useAuth } from './hooks/useAuth';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center safe-area-top safe-area-bottom safe-area-left safe-area-right">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'map':
        return <MapView />;
      case 'review':
        return <ReviewForm />;
      case 'reviews':
        return (
          <div className="max-w-4xl mx-auto p-4 sm:p-6 safe-area-left safe-area-right">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">All Reviews</h1>
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
              <p className="text-gray-600">Reviews listing would be implemented here</p>
            </div>
          </div>
        );
      case 'profile':
        return user ? <UserProfile user={user} /> : (
          <div className="max-w-4xl mx-auto p-4 sm:p-6 safe-area-left safe-area-right">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
              <p className="text-gray-600">Please log in to view your profile</p>
            </div>
          </div>
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      <main className="pb-16 md:pb-0">
        {renderContent()}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;