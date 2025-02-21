import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Package,
  ChevronRight,
  MapPin,
  Calendar
} from 'lucide-react';

// Mock data
const mockStats = {
  totalRequests: 156,
  pendingRequests: 23,
  deliveredRequests: 133,
  lastDonation: {
    donorName: "Fresh Foods Co.",
    quantity: 50,
    foodType: "Vegetarian",
    date: new Date()
  },
  totalMealsReceived: 2450,
  recentRequests: [
    {
      id: 1,
      status: 'Pending',
      foodType: 'Vegetarian',
      quantity: 25,
      date: new Date(),
      location: '123 Main St, City'
    },
    {
      id: 2,
      status: 'In Progress',
      foodType: 'Non-Vegetarian',
      quantity: 30,
      date: new Date(),
      location: '456 Oak Ave, City'
    }
  ]
};

const StatCard = ({ title, value, icon: Icon, trend, color = 'indigo' }) => (
  <div className="stats-card group">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-semibold mt-2">{value}</p>
        {trend && (
          <p className="text-sm text-green-600 mt-2 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            {trend}
          </p>
        )}
      </div>
      <div className={`icon-container bg-${color}-50 group-hover:bg-${color}-100/80`}>
        <Icon className={`w-6 h-6 text-${color}-600`} />
      </div>
    </div>
  </div>
);

const LastDonationCard = ({ donation }) => (
  <div className="card p-6 col-span-2">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">Last Donation Received</h3>
      <button className="btn btn-secondary text-sm">View All</button>
    </div>
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-green-50 rounded-xl">
        <Package className="w-6 h-6 text-green-600" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="font-medium text-gray-900">{donation.donorName}</p>
          <span className="text-sm text-gray-500">
            {donation.date.toLocaleDateString()}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {donation.quantity} meals - {donation.foodType}
        </p>
      </div>
    </div>
  </div>
);

const RecentRequestsCard = ({ requests }) => (
  <div className="card p-6 col-span-2">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">Recent Requests</h3>
      <button className="btn btn-secondary text-sm">View All</button>
    </div>
    <div className="space-y-4">
      {requests.map(request => (
        <div key={request.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
          <div className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${
              request.status === 'Pending' ? 'bg-yellow-50' : 'bg-blue-50'
            }`}>
              <Package className={`w-5 h-5 ${
                request.status === 'Pending' ? 'text-yellow-600' : 'text-blue-600'
              }`} />
            </div>
            <div>
              <p className="font-medium">{request.foodType}</p>
              <div className="flex items-center mt-1 space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {request.date.toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {request.location}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              request.status === 'Pending' 
                ? 'bg-yellow-50 text-yellow-700'
                : 'bg-blue-50 text-blue-700'
            }`}>
              {request.status}
            </span>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function DashboardOverview() {
  const [stats, setStats] = useState(mockStats);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalRequests: prev.totalRequests + Math.floor(Math.random() * 2),
        pendingRequests: prev.pendingRequests + Math.floor(Math.random() * 2) - 1,
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Requests"
          value={stats.totalRequests}
          icon={Package}
          trend="+12.5% from last month"
          color="indigo"
        />
        <StatCard
          title="Pending Requests"
          value={stats.pendingRequests}
          icon={Clock}
          color="yellow"
        />
        <StatCard
          title="Delivered Requests"
          value={stats.deliveredRequests}
          icon={CheckCircle}
          color="green"
        />
        <StatCard
          title="Total Meals Received"
          value={stats.totalMealsReceived}
          icon={AlertCircle}
          trend="+8.2% from last month"
          color="blue"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <LastDonationCard donation={stats.lastDonation} />
        <RecentRequestsCard requests={stats.recentRequests} />
      </div>
    </div>
  );
}