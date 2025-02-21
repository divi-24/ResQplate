import React, { useEffect, useState } from 'react';
import { CheckCircle, Clock, Truck, XCircle } from 'lucide-react';
import axios from 'axios';


const DonationHistory = () => {
  const [donations, setDonations] = useState([]);

useEffect(()=>{
  const fetchDonations = async () => {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/v1/fooddonation/all`); 
    if(response.data.success){
      setDonations(response.data.donations);
    } 
  }

  fetchDonations();
}, [])  

  // enum : ['AVAILABLE', 'CLAIMED', 'PICKED_UP', 'DELIVERED'],
  const getStatusIcon = (status) => {
    switch (status) {
      case 'AVAILABLE':
        return <Clock size={20} color="#f59e0b" />;
      case 'CLAIMED':
        return <CheckCircle size={20} color="#10b981" />;
      case 'PICKED_UP':
        return <XCircle size={20} color="#ef4444" />;
      case 'DELIVERED':
        return <Truck size={20} color="#2563eb" />;
      default:
        return null;
    }
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Donation History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-green-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                Serial No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                Food Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                Organization
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                Status
              </th>

            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {donations.map((donation, index) => (
              <tr key={index} className="hover:bg-green-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {index+1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatDate(donation.createdAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {donation.foodType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {donation.weight}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {donation.organization || 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(donation.donationStatus)}
                    <span className="ml-2 text-sm text-gray-900">{donation.status}</span>
                  </div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationHistory;