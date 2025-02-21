import React from 'react';
import { Calendar, Clock, MapPin, Package } from 'lucide-react';

const mockHistory = [
  {
    id: 1,
    date: '2024-03-10',
    tasks: [
      {
        id: 't1',
        type: 'Pickup',
        location: 'Fresh Foods Market',
        time: '10:30 AM',
        items: 'Fresh Produce (50 lbs)',
        status: 'completed',
      },
      {
        id: 't2',
        type: 'Delivery',
        location: 'Hope Community Center',
        time: '11:15 AM',
        items: 'Fresh Produce (50 lbs)',
        status: 'completed',
      },
    ],
  },
  {
    id: 2,
    date: '2024-03-09',
    tasks: [
      {
        id: 't3',
        type: 'Pickup',
        location: 'City Bakery',
        time: '2:00 PM',
        items: 'Baked Goods (30 lbs)',
        status: 'completed',
      },
    ],
  },
];

export const History = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Activity History</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {mockHistory.map((day) => (
            <div key={day.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={20} className="text-green-600" />
                <h2 className="text-lg font-semibold">
                  {new Date(day.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </h2>
              </div>

              <div className="space-y-4">
                {day.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-50"
                  >
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Package size={24} className="text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-800">
                          {task.type}: {task.location}
                        </h3>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                          {task.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{task.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{task.location}</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{task.items}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Monthly Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Deliveries</span>
                <span className="font-medium">45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Distance Covered</span>
                <span className="font-medium">238 miles</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Food Rescued</span>
                <span className="font-medium">1,250 lbs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Volunteer Hours</span>
                <span className="font-medium">62 hours</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Achievements</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <span className="text-yellow-600">🏆</span>
                </div>
                <div>
                  <p className="font-medium">Top Performer</p>
                  <p className="text-sm text-gray-600">March 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <span className="text-blue-600">⭐</span>
                </div>
                <div>
                  <p className="font-medium">50 Deliveries</p>
                  <p className="text-sm text-gray-600">Milestone Reached</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};