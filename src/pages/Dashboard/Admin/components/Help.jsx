import React from 'react';

export function Help() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Help & Support</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">How do I approve a donation?</h3>
              <p className="mt-1 text-gray-600">Navigate to the Donations page, find the donation you want to approve, and click the "Approve" button in the Actions column.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">How do I assign volunteers?</h3>
              <p className="mt-1 text-gray-600">Go to the Volunteers page, select a volunteer, and click "Assign Task" to match them with an available delivery request.</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" className="mt-1 block w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea className="mt-1 block w-full px-4 py-2 border rounded-lg" rows={4}></textarea>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}