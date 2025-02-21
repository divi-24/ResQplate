import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const mockLocations = [
  {
    id: 1,
    name: 'Fresh Foods Market',
    type: 'Pickup',
    address: '123 Market St, Downtown',
    status: 'pending',
    time: '10:30 AM',
  },
  {
    id: 2,
    name: 'Hope Community Center',
    type: 'Delivery',
    address: '789 Hope St',
    status: 'in_progress',
    time: '11:15 AM',
  },
  {
    id: 3,
    name: 'City Bakery',
    type: 'Pickup',
    address: '456 Baker Ave',
    status: 'pending',
    time: '2:00 PM',
  },
];

export const MapView = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Route Map</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-4 h-[600px] flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Navigation size={48} className="mx-auto mb-4 text-green-600" />
              <p>Map integration will be implemented here</p>
              <p className="text-sm">Using Google Maps or similar service</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="font-semibold text-gray-800 mb-4">Today's Route</h2>
            <div className="space-y-4">
              {mockLocations.map((location) => (
                <div
                  key={location.id}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="mt-1">
                    <MapPin size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{location.name}</h3>
                    <p className="text-sm text-gray-600">{location.address}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                        {location.type}
                      </span>
                      <span className="text-xs text-gray-500">{location.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="font-semibold text-gray-800 mb-2">Route Statistics</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Distance</span>
                <span className="font-medium">12.5 miles</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Estimated Time</span>
                <span className="font-medium">45 minutes</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Stops</span>
                <span className="font-medium">3 locations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};