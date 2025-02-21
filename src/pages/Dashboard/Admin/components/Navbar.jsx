import React from 'react';
import {
  LayoutDashboard,
  Gift,
  HandHeart,
  Users,
  UserCircle,
  BarChart3,
  Settings,
  HelpCircle,
} from 'lucide-react';
import Swal from 'sweetalert2';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, component: 'Dashboard' },
  { name: 'Donations', icon: Gift, component: 'Donations' },
  { name: 'Requests', icon: HandHeart, component: 'Requests' },
  { name: 'Volunteers', icon: Users, component: 'Volunteers' },
  { name: 'Users', icon: UserCircle, component: 'Users' },
  { name: 'Reports', icon: BarChart3, component: 'Reports' },
  { name: 'Settings', icon: Settings, component: 'Settings' },
  { name: 'Help', icon: HelpCircle, component: 'Help' }
];

const handleLogout = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You are about to logout from the admin panel',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Logout',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('auth');
      Swal.fire('Logged Out', 'You have been logged out', 'success');
      window.location.reload();
    }
  });
}

export function Navbar({ setActiveComponent }) {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold">SustainBite Admin</span>
          <nav className="flex space-x-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveComponent(item.component)}
                className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span className="ml-2">{item.name}</span>
              </button>
            ))}
            <button onClick={handleLogout}
             className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors bg-red-500">
              <UserCircle className="h-5 w-5" />
              <span className="ml-2">Logout</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}