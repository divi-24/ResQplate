import React, { useState } from 'react';
import { 
  User,
  Phone,
  MessageSquare,
  MapPin,
  Star,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

// Mock data
const mockVolunteers = [
  {
    id: 1,
    name: 'Sarah Wilson',
    status: 'Available',
    rating: 4.8,
    phone: '+1 234-567-8900',
    location: '123 Main St, City',
    completedDeliveries: 156,
    onTimeRate: '98%'
  },
  {
    id: 2,
    name: 'Mike Johnson',
    status: 'En Route',
    rating: 4.9,
    phone: '+1 234-567-8901',
    location: '456 Oak Ave, City',
    completedDeliveries: 243,
    onTimeRate: '95%'
  },
  {
    id: 3,
    name: 'Emily Brown',
    status: 'On Time',
    rating: 4.7,
    phone: '+1 234-567-8902',
    location: '789 Pine Rd, City',
    completedDeliveries: 89,
    onTimeRate: '92%'
  }
];

const VolunteerCard = ({ volunteer }) => {
  const [showDetails, setShowDetails] = useState(false);

  const statusColors = {
    Available: 'green',
    'En Route': 'blue',
    'On Time': 'indigo',
    Delayed: 'yellow'
  };

  const color = statusColors[volunteer.status];

  return (
    <div className="card">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <span className={`absolute -bottom-1 -right-1 w-4 h-4 border-2 border-white rounded-full bg-${color}-500`}></span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{volunteer.name}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${color}-50 text-${color}-700`}>
                  {volunteer.status}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1">{volunteer.rating}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <Phone className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <MessageSquare className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <button
          className="mt-4 w-full text-left"
          onClick={() => setShowDetails(!showDetails)}
        >
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            {volunteer.location}
          </div>
        </button>

        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Completed</p>
                  <p className="font-semibold">{volunteer.completedDeliveries}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">On Time Rate</p>
                  <p className="font-semibold">{volunteer.onTimeRate}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Response Time</p>
                  <p className="font-semibold">~15 mins</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function AssignedVolunteers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredVolunteers = mockVolunteers
    .filter(volunteer => 
      volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      volunteer.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(volunteer => 
      statusFilter === 'all' ? true : volunteer.status.toLowerCase() === statusFilter.toLowerCase()
    );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Assigned Volunteers</h1>
        <p className="text-gray-600">View and manage your assigned delivery volunteers</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search volunteers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10 w-full md:w-64"
          />
          <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>

        <div className="flex space-x-2 overflow-x-auto">
          {['all', 'available', 'en route', 'on time', 'delayed'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                statusFilter === status
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredVolunteers.map(volunteer => (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} />
        ))}
      </div>
    </div>
  );
}