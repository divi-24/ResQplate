import React from 'react';

export function Volunteers() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Management</h1>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between mb-6">
          <input
            type="text"
            placeholder="Search volunteers..."
            className="px-4 py-2 border rounded-lg w-64"
          />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Add Volunteer
          </button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Area</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tasks</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">Mike Johnson</td>
              <td className="px-6 py-4">mike@example.com</td>
              <td className="px-6 py-4">Downtown</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Active
                </span>
              </td>
              <td className="px-6 py-4">5 completed</td>
              <td className="px-6 py-4">
                <button className="text-indigo-600 hover:text-indigo-900">Assign Task</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}