import React from 'react';
import { StatsCard } from './StatsCard';
import { TaskCard } from './TaskCard';
import {
  Clock,
  Truck,
  UserCheck,
  Activity,
  Search,
  Bell,
} from 'lucide-react';
import { useAuth } from '../../../../context/AuthContext';
import Swal from 'sweetalert2';

const mockTasks = [
  {
    id: '1',
    type: 'pickup',
    status: 'pending',
    priority: 'urgent',
    donor: {
      name: 'Fresh Foods Market',
      location: '123 Market St, Downtown',
      contact: '+1234567890',
    },
    foodDetails: {
      type: 'Fresh Produce',
      quantity: '50 lbs',
      specialInstructions: 'Handle with care, includes fragile items',
    },
    scheduledTime: new Date().toISOString(),
    assignedAt: new Date().toISOString(),
  },
  {
    id: '2',
    type: 'delivery',
    status: 'in_progress',
    priority: 'regular',
    donor: {
      name: 'City Bakery',
      location: '456 Baker Ave',
      contact: '+1234567891',
    },
    recipient: {
      name: 'Hope Community Center',
      location: '789 Hope St',
      contact: '+1234567892',
    },
    foodDetails: {
      type: 'Baked Goods',
      quantity: '30 lbs',
    },
    scheduledTime: new Date().toISOString(),
    assignedAt: new Date().toISOString(),
  },
];



export const Dashboard = () => {
  const auth = useAuth();
  const user = auth[0]?.user;

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out and redirected to the login page',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log me out',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('auth');
        Swal.fire('Logged Out!', 'You have been successfully logged out', 'success');
        window.location.href = '/signin';
      }
    });
  };


  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, {user?.name}</h1>
          <p className="text-gray-600">Here's what's happening today</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg border border-gray-300 px-4" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Active Hours"
          value="24.5"
          icon={Clock}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Deliveries"
          value="156"
          icon={Truck}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="People Helped"
          value="1,204"
          icon={UserCheck}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Success Rate"
          value="98%"
          icon={Activity}
          trend={{ value: 2, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Active Tasks</h2>
          <div className="space-y-4">
            {mockTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Schedule</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-500 text-center">No upcoming tasks scheduled</p>
          </div>
        </div>
      </div>
    </div>
  );
};