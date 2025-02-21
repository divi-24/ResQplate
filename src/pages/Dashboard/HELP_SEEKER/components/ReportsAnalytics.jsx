import React, { useState } from 'react';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Calendar,
  Download
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell
} from 'recharts';

// Mock data
const monthlyData = [
  { month: 'Jan', meals: 1200 },
  { month: 'Feb', meals: 1900 },
  { month: 'Mar', meals: 1500 },
  { month: 'Apr', meals: 2100 },
  { month: 'May', meals: 2400 },
  { month: 'Jun', meals: 1800 }
];

const foodTypeData = [
  { name: 'Vegetarian', value: 45 },
  { name: 'Non-Vegetarian', value: 35 },
  { name: 'Snacks', value: 20 }
];

const COLORS = ['#4F46E5', '#10B981', '#F59E0B'];

const StatCard = ({ title, value, trend, icon: Icon }) => (
  <div className="card p-6">
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
      <div className="p-3 bg-indigo-50 rounded-xl">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
    </div>
  </div>
);

export default function ReportsAnalytics() {
  const [dateRange, setDateRange] = useState('month');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Reports & Analytics</h1>
          <p className="text-gray-600">View detailed insights and statistics</p>
        </div>
        <button className="btn btn-secondary flex items-center">
          <Download className="w-5 h-5 mr-2" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Meals Received"
          value="12,450"
          trend="+12.5% from last month"
          icon={BarChart3}
        />
        <StatCard
          title="Average Daily Meals"
          value="415"
          trend="+8.2% from last month"
          icon={TrendingUp}
        />
        <StatCard
          title="On-Time Delivery Rate"
          value="95%"
          trend="+2.3% from last month"
          icon={Calendar}
        />
        <StatCard
          title="Active Volunteers"
          value="48"
          trend="+5 from last month"
          icon={BarChart3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Meals Distribution</h3>
            <div className="flex space-x-2">
              {['week', 'month', 'year'].map((range) => (
                <button
                  key={range}
                  onClick={() => setDateRange(range)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                    dateRange === range
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {range.charAt(0).toUpperCase() + range.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="meals" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-6">Food Type Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <Pie
                  data={foodTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {foodTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">New food request received</p>
                  <p className="text-sm text-gray-500">50 meals requested for delivery</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}