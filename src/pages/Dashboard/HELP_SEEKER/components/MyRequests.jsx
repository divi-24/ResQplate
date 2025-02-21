import React, { useState } from 'react';
import { 
  Package, 
  Calendar, 
  MapPin, 
  User, 
  Phone,
  MessageSquare,
  Star,
  ChevronRight,
  X
} from 'lucide-react';

// Mock data
const mockRequests = [
  {
    id: 1,
    status: 'Pending',
    foodType: 'Vegetarian',
    quantity: 25,
    dateNeeded: new Date(),
    location: '123 Main St, City',
    volunteer: null
  },
  {
    id: 2,
    status: 'In Progress',
    foodType: 'Non-Vegetarian',
    quantity: 30,
    dateNeeded: new Date(),
    location: '456 Oak Ave, City',
    volunteer: {
      name: 'Sarah Wilson',
      phone: '+1 234-567-8900',
      rating: 4.8
    }
  },
  {
    id: 3,
    status: 'Delivered',
    foodType: 'Snacks',
    quantity: 50,
    dateNeeded: new Date(Date.now() - 86400000), // Yesterday
    location: '789 Pine Rd, City',
    volunteer: {
      name: 'Mike Johnson',
      phone: '+1 234-567-8901',
      rating: 4.9
    }
  }
];

const RequestCard = ({ request }) => {
  const [showDetails, setShowDetails] = useState(false);

  const statusColors = {
    Pending: 'yellow',
    'In Progress': 'blue',
    Delivered: 'green'
  };

  const color = statusColors[request.status];

  return (
    <div className="card overflow-hidden">
      <div 
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-3 bg-${color}-50 rounded-xl`}>
              <Package className={`w-6 h-6 text-${color}-600`} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{request.foodType}</h3>
              <p className="text-sm text-gray-500">{request.quantity} meals</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${color}-50 text-${color}-700`}>
              {request.status}
            </span>
            <ChevronRight className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
              showDetails ? 'rotate-90' : ''
            }`} />
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="border-t border-gray-100 p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>{request.dateNeeded.toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>{request.location}</span>
            </div>
          </div>

          {request.volunteer && (
            <div className="border-t border-gray-100 pt-4">
              <h4 className="font-medium text-gray-900 mb-3">Assigned Volunteer</h4>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-lg">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">{request.volunteer.name}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{request.volunteer.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <Phone className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <MessageSquare className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {request.status === 'Pending' && (
            <div className="flex justify-end">
              <button className="btn btn-secondary flex items-center text-red-600 hover:bg-red-50">
                <X className="w-5 h-5 mr-2" />
                Cancel Request
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function MyRequests() {
  const [filter, setFilter] = useState('all');

  const filteredRequests = filter === 'all' 
    ? mockRequests 
    : mockRequests.filter(request => request.status.toLowerCase() === filter);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">My Requests</h1>
          <p className="text-gray-600">Track and manage your food requests</p>
        </div>
        <button className="btn btn-primary">
          New Request
        </button>
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-2">
        {['all', 'pending', 'in progress', 'delivered'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
              filter === status
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredRequests.map(request => (
          <RequestCard key={request.id} request={request} />
        ))}
      </div>
    </div>
  );
}