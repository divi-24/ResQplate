import React from 'react';

export function Users() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">User Management</h1>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between mb-6">
          <input
            type="text"
            placeholder="Search users..."
            className="px-4 py-2 border rounded-lg w-64"
          />
          <select className="px-4 py-2 border rounded-lg">
            <option value="">All Roles</option>
            <option value="admin">Admin</option>
            <option value="donor">Donor</option>
            <option value="volunteer">Volunteer</option>
            <option value="help_seeker">Help Seeker</option>
          </select>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">Sarah Wilson</td>
              <td className="px-6 py-4">sarah@example.com</td>
              <td className="px-6 py-4">Donor</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Active
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}