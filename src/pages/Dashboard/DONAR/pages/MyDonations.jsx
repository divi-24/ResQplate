import React from 'react';
import DonationHistory from '../components/DonationHistory';
import Navigation from '../components/Navigation';

function MyDonations() {
  return (
    <>
      <Navigation />
      <div className="max-w-7xl mx-auto pt-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-green-800">My Donations</h1>
        <p className="text-gray-600 mt-2">Track and manage all your donations.</p>
      </header>
      <DonationHistory />
    </div>
    </>
  );
}

export default MyDonations;