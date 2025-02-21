import React, {useState, useEffect} from 'react';
import { MapPin, Phone, Mail, CheckCircle2, XCircle } from 'lucide-react';
import axios from 'axios';
// import {motions, AnimatePresence} from 'framer-motion';

function VolunteerManagement() {
  const [volunteersData, setVolunteersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const volunteers = [
    {
      id: 1,
      name: 'John Smith',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      status: 'Available',
      location: 'Brooklyn, NY',
      phone: '(555) 123-4567',
      email: 'john.smith@email.com',
      completedDeliveries: 45,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      status: 'On Delivery',
      location: 'Manhattan, NY',
      phone: '(555) 234-5678',
      email: 'sarah.j@email.com',
      completedDeliveries: 32,
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Mike Brown',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      status: 'Offline',
      location: 'Queens, NY',
      phone: '(555) 345-6789',
      email: 'mike.b@email.com',
      completedDeliveries: 28,
      rating: 4.7,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'On Delivery':
        return 'bg-blue-100 text-blue-800';
      case 'Offline':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Volunteer Management</h1>
        <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
          Add New Volunteer
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {volunteers.map((volunteer) => (
          <div
            key={volunteer.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src={volunteer.image}
                  alt={volunteer.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {volunteer.name}
                  </h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(volunteer.status)}`}>
                    {volunteer.status}
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {volunteer.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    {volunteer.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    {volunteer.email}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Completed Deliveries:</span>{' '}
                    {volunteer.completedDeliveries}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Rating:</span>{' '}
                    {volunteer.rating} / 5.0
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                {volunteer.status === 'Available' && (
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Assign Delivery
                  </button>
                )}
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VolunteerManagement;