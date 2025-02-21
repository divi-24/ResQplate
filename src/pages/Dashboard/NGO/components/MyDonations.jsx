import React from 'react';
import { Truck, CheckCircle2, MapPin } from 'lucide-react';

function MyDonations() {
  const donations = [
    {
      id: 1,
      name: 'Fresh Produce Bundle',
      donor: 'Local Grocery Market',
      quantity: '50 lbs',
      status: 'Pending Pickup',
      volunteer: 'John Smith',
      pickupTime: '2:30 PM Today',
      location: '123 Market St, New York',
    },
    {
      id: 2,
      name: 'Bread and Pastries',
      donor: 'Downtown Bakery',
      quantity: '30 items',
      status: 'In Transit',
      volunteer: 'Sarah Johnson',
      pickupTime: '3:45 PM Today',
      location: '456 Main St, Brooklyn',
    },
    {
      id: 3,
      name: 'Canned Goods',
      donor: 'Community Store',
      quantity: '100 units',
      status: 'Delivered',
      volunteer: 'Mike Brown',
      pickupTime: 'Completed',
      location: '789 Broadway, Queens',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending Pickup':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">My Donations</h1>
        <div className="flex gap-4">
          <select className="rounded-lg border-gray-300 text-sm">
            <option>All Status</option>
            <option>Pending Pickup</option>
            <option>In Transit</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Donation Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Volunteer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pickup Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {donation.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {donation.donor} · {donation.quantity}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {donation.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(donation.status)}`}>
                      {donation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {donation.volunteer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {donation.pickupTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      {donation.status === 'Pending Pickup' && (
                        <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                          <Truck className="w-4 h-4 mr-1" />
                          Mark Picked Up
                        </button>
                      )}
                      {donation.status === 'In Transit' && (
                        <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                          <CheckCircle2 className="w-4 h-4 mr-1" />
                          Confirm Delivery
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyDonations;