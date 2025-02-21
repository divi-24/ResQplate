import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Box, 
  HandHeart, 
  Users, 
  BarChart2, 
  Settings,
  Menu,
  Bell,
  ChevronDown,
  Clock,
  MapPin,
  CheckCircle2,
  XCircle,
  Truck
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import DashboardOverview from './components/DashboardOverview';
import AvailableDonations from './components/AvailableDonations';
import MyDonations from './components/MyDonations';
import VolunteerManagement from './components/VolunteerManagement';
import Analytics from './components/Analytics';
import { useAuth } from '../../../context/AuthContext';
import Swal from 'sweetalert2';

export default function NGODashboard() {
    const auth = useAuth();
    const user = auth[0]?.user;
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'available', label: 'Available Donations', icon: Box },
    { id: 'mydonations', label: 'My Donations', icon: HandHeart },
    { id: 'volunteers', label: 'Volunteer Management', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'available':
        return <AvailableDonations />;
      case 'mydonations':
        return <MyDonations />;
      case 'volunteers':
        return <VolunteerManagement />;
      case 'analytics':
        return <Analytics />;
      default:
        return <DashboardOverview />;
    }
  };

  const handleLogout = () => {
    Swal.fire({
        title: 'Are you sure you want to logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('auth');
            Swal.fire('Logged Out!', '', 'success');
            window.location.href = '/signin';
        }
        });
    };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        items={navigationItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Menu size={24} />
                </button>
              </div>
              
              <div className="flex items-center gap-8">
                <button className="relative p-2 text-gray-600 hover:text-gray-900">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                </button>
                
                <div className="flex items-center gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt={user?.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="hidden sm:block text-sm font-medium text-gray-700">{user?.name}</span>
                  <div className="flex items-center gap-3 ml-4 px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 bg-red-100 hover:bg-red-200">
                <button onClick={handleLogout}  className="text-red-500 hover:text-red-700">Logout</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

