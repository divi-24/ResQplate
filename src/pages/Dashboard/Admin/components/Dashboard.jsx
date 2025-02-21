import React from 'react';
import { MetricCard } from './MetricCard';

const metrics = [
  {
    label: 'Total Donations',
    value: 1234,
    change: 12.5,
    icon: 'Gift'
  },
  {
    label: 'Active Requests',
    value: 456,
    change: -2.3,
    icon: 'HandHeart'
  },
  {
    label: 'Help Seekers Served',
    value: 789,
    change: 8.1,
    icon: 'Users'
  },
  {
    label: 'Active Volunteers',
    value: 123,
    change: 4.6,
    icon: 'UserCheck'
  }
];

export function Dashboard() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's what's happening with your platform today.
          </p>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            Download Report
          </button>
          <button className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700">
            Add New Donation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Donations</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            Chart coming soon
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Request Distribution</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            Chart coming soon
          </div>
        </div>
      </div>
    </div>
  );
}