import React from 'react';
import { Package, Clock, Truck, Users } from 'lucide-react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function DashboardOverview() {
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
    






  const stats = [
    {
      label: 'Total Donations',
      value: '2,547',
      change: '+12.5%',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Pending Pickups',
      value: '24',
      change: '-3.4%',
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      label: 'Active Deliveries',
      value: '18',
      change: '+8.2%',
      icon: Truck,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Active Volunteers',
      value: '156',
      change: '+2.3%',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  const recentDonations = [
    {
      id: 1,
      name: 'Fresh Produce Bundle',
      donor: 'Local Grocery Market',
      quantity: '50 lbs',
      status: 'Pending Pickup',
      image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 2,
      name: 'Bread and Pastries',
      donor: 'Downtown Bakery',
      quantity: '30 items',
      status: 'In Transit',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 3,
      name: 'Canned Goods',
      donor: 'Community Store',
      quantity: '100 units',
      status: 'Delivered',
      image: 'https://images.unsplash.com/photo-1584263347416-85a696b4eda7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </p>
                    <span className={`ml-2 text-sm font-medium ${
                      stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Donations</h2>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {recentDonations.map((donation) => (
                <li key={donation.id} className="py-5">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-lg object-cover"
                        src={donation.image}
                        alt={donation.name}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {donation.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {donation.donor} · {donation.quantity}
                      </p>
                    </div>
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        donation.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : donation.status === 'In Transit'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {donation.status}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;