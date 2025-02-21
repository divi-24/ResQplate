import React from 'react';

export function Settings() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Platform Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border rounded-lg"
                  defaultValue="FoodShare Admin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-4 py-2 border rounded-lg"
                  defaultValue="admin@foodshare.com"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-indigo-600" defaultChecked />
                <label className="ml-2 text-sm text-gray-700">Email notifications for new donations</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-indigo-600" defaultChecked />
                <label className="ml-2 text-sm text-gray-700">Email notifications for new requests</label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Food Categories</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  className="px-4 py-2 border rounded-lg flex-1"
                  placeholder="Add new category"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Vegetables</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Fruits</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Non-perishable</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Dairy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}