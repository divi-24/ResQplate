import React, {useState, useEffect} from 'react';
import { MapPin, Clock, CheckCircle2, XCircle } from 'lucide-react';
import axios from 'axios';

function AvailableDonations() {
  const [donationsStats, setDonationsStats] = useState([]);

  useEffect(()=>{
    const fetchDonations = async () => {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/v1/fooddonation/all`); 
      if(response.data.success){
        setDonationsStats(response.data.donations);
      } 
    }
  
    fetchDonations();
  }, [])  

   console.log(donationsStats);
  
  const donations = [
    {
      id: 1,
      name: 'Fresh Vegetables Assortment',
      type: 'Produce',
      quantity: '75 lbs',
      expiryDate: '2024-03-20',
      location: '123 Market St, New York',
      distance: '2.5 miles',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      urgent: true,
    },
    {
      id: 2,
      name: 'Dairy Products Bundle',
      type: 'Dairy',
      quantity: '40 units',
      expiryDate: '2024-03-18',
      location: '456 Main St, Brooklyn',
      distance: '1.8 miles',
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      urgent: false,
    },
    {
      id: 3,
      name: 'Bread and Pastries',
      type: 'Bakery',
      quantity: '100 pieces',
      expiryDate: '2024-03-17',
      location: '789 Broadway, Queens',
      distance: '3.2 miles',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      urgent: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Available Donations</h1>
        <div className="flex gap-4">
          <select className="rounded-lg border-gray-300 text-sm">
            <option>All Types</option>
            <option>Produce</option>
            <option>Dairy</option>
            <option>Bakery</option>
          </select>
          <select className="rounded-lg border-gray-300 text-sm">
            <option>Distance</option>
            <option>Expiry Date</option>
            <option>Quantity</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {donations.map((donation) => (
          <div
            key={donation.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={donation.image}
                alt={donation.name}
                className="w-full h-full object-cover"
              />
              {donation.urgent && (
                <span className="absolute top-4 right-4 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
                  Urgent
                </span>
              )}
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {donation.name}
                </h3>
                <p className="text-sm text-gray-500">{donation.type}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  Expires: {donation.expiryDate}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {donation.location} ({donation.distance})
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button className="w-full px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Claim Donation
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <XCircle className="w-4 h-4 mr-2" />
                  Decline
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableDonations;