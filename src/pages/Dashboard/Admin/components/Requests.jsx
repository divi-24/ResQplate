import React from 'react';

export function Requests() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Requests</h1>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between mb-6">
          <input
            type="text"
            placeholder="Search requests..."
            className="px-4 py-2 border rounded-lg w-64"
          />
          <div className="flex space-x-4">
            <select className="px-4 py-2 border rounded-lg">
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="delivered">Delivered</option>
            </select>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              New Request
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Requester</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Food Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">REQ001</td>
              <td className="px-6 py-4">Jane Smith</td>
              <td className="px-6 py-4">Vegetables</td>
              <td className="px-6 py-4">10 kg</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Confirmed
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-indigo-600 hover:text-indigo-900">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}