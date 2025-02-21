import React from 'react';
import DashboardStats from '../components/DashboardStats';
import DonationForm from '../components/DonationForm';
import DonationHistory from '../components/DonationHistory';

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-green-800 pt-8">Donor Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's your donation overview.</p>
      </header>

      <section className="mb-8">
        <DashboardStats />
      </section>

      <section className="mb-8">
        <DonationForm />
      </section>

      <section>
        <DonationHistory />
      </section>
    </div>
  );
}

export default Dashboard;