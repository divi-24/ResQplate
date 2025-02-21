import React from 'react';

export function Reports() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Reports & Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Donation Trends</h2>
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
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Volunteer Activity</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            Chart coming soon
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            Chart coming soon
          </div>
        </div>
      </div>
    </div>
  );
}