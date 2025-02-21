import React from 'react';
import DonationForm from '../components/DonationForm';
import Navigation from '../components/Navigation';

function MakeDonation() {
  return (
   <>
   <Navigation />
     <div className="max-w-3xl mx-auto pt-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-green-800">Make a Donation</h1>
        <p className="text-gray-600 mt-2">Fill out the form below to submit a new donation.</p>
      </header>
      <DonationForm />
    </div>
   </>
  );
}

export default MakeDonation;