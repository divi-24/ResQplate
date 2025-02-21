import React from 'react';
import { BarChart2, PieChart as PieIcon, MapPin, Users } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  AreaChart,
  Area
} from 'recharts';

function Analytics() {
  const stats = [
    {
      label: 'Total Food Rescued',
      value: '25,420 lbs',
      change: '+15.3%',
    },
    {
      label: 'Meals Provided',
      value: '21,180',
      change: '+12.7%',
    },
    {
      label: 'Active Donors',
      value: '142',
      change: '+8.4%',
    },
    {
      label: 'Communities Served',
      value: '28',
      change: '+5.2%',
    },
  ];

  const monthlyDonations = [
    { month: 'Jan', amount: 1840 },
    { month: 'Feb', amount: 2200 },
    { month: 'Mar', amount: 2500 },
    { month: 'Apr', amount: 2100 },
    { month: 'May', amount: 2800 },
    { month: 'Jun', amount: 3100 },
    { month: 'Jul', amount: 2900 },
    { month: 'Aug', amount: 3300 },
    { month: 'Sep', amount: 3500 },
    { month: 'Oct', amount: 3200 },
    { month: 'Nov', amount: 3400 },
    { month: 'Dec', amount: 3600 },
  ];

  const foodCategories = [
    { name: 'Produce', value: 35 },
    { name: 'Dairy', value: 25 },
    { name: 'Bakery', value: 20 },
    { name: 'Pantry', value: 15 },
    { name: 'Prepared', value: 5 },
  ];

  const volunteerActivity = [
    { date: 'Week 1', onsite: 45, delivery: 30 },
    { date: 'Week 2', onsite: 50, delivery: 35 },
    { date: 'Week 3', onsite: 40, delivery: 40 },
    { date: 'Week 4', onsite: 55, delivery: 45 },
  ];

  const donationTrends = [
    { date: 'Mon', donations: 50 },
    { date: 'Tue', donations: 80 },
    { date: 'Wed', donations: 120 },
    { date: 'Thu', donations: 90 },
    { date: 'Fri', donations: 150 },
    { date: 'Sat', donations: 180 },
    { date: 'Sun', donations: 140 },
  ];

  const COLORS = ['#4f46e5', '#60a5fa', '#34d399', '#fbbf24', '#f87171'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border">
          <p className="text-sm font-medium text-gray-900">{label}</p>
          <p className="text-sm text-gray-600">
            {payload[0].name}: {payload[0].value}
            {payload[0].name === 'amount' ? ' lbs' : '%'}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics & Reports</h1>
        <div className="flex gap-4">
          <select className="rounded-lg border border-gray-300 text-sm p-2">
            <option>Last 30 Days</option>
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
          <button className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <span className="ml-2 text-sm font-medium text-green-600">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Monthly Donations</h2>
            <BarChart2 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyDonations}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="amount" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Food Categories</h2>
            <PieIcon className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={foodCategories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {foodCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Weekly Trends</h2>
            <MapPin className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={donationTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="donations" 
                  stroke="#4f46e5"
                  fill="#4f46e5"
                  fillOpacity={0.1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Volunteer Activity</h2>
            <Users className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={volunteerActivity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="onsite" 
                  stroke="#4f46e5" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="delivery" 
                  stroke="#60a5fa" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;