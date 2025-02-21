import React from 'react';
import { Package, Clock, CheckCircle, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const StatCard = ({ icon: Icon, title, value, bgColor }) => (
  <div className={`${bgColor} p-6 rounded-lg shadow-lg`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-green-100 mb-1">{title}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
      <Icon className="h-8 w-8 text-green-100" />
    </div>
  </div>
);

const DashboardStats = () => {

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


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        icon={Package}
        title="Total Donations"
        value={donations.length}
        bgColor="bg-green-600"
      />
      <StatCard
        icon={Clock}
        title="Pending Donations"
        value={donations.filter(donation => donation.donationStatus === 'AVAILABLE').length}
        bgColor="bg-green-700"
      />
      <StatCard
        icon={CheckCircle}
        title="Completed Donations"
        value={donations.filter(donation => donation.donationStatus === 'DELIVERED').length}
        bgColor="bg-green-600"
      />
      <StatCard
        icon={Calendar}
        title="This Month"
        value={donations.filter(donation => new Date(donation.createdAt).getMonth() === new Date().getMonth()).length}
        bgColor="bg-green-700"
      />
    </div>
  );
};

export default DashboardStats;