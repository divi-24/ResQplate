import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  ClipboardList, 
  Users, 
  BarChart3, 
  Settings,
  HelpCircle,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const links = [
    { to: '/help_seeker/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/help_seeker/dashboard/request-food', icon: UtensilsCrossed, label: 'Request Food' },
    { to: '/help_seeker/dashboard/my-requests', icon: ClipboardList, label: 'My Requests' },
    { to: '/help_seeker/dashboard/volunteers', icon: Users, label: 'Assigned Volunteers' },
    { to: '/help_seeker/dashboard/reports', icon: BarChart3, label: 'Reports & Analytics' },
    { to: '/help_seeker/dashboard/settings', icon: Settings, label: 'Settings' },
    { to: '/help_seeker/dashboard/help', icon: HelpCircle, label: 'Help & Support' },
  ];

  const sidebarClasses = `w-72 bg-white/70 backdrop-blur-xl border-r border-gray-100 h-screen fixed left-0 top-0 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  } lg:translate-x-0 z-30`;

  return (
    <aside className={sidebarClasses}>
      <div className="p-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold gradient-text">SustainBites</h1>
          <p className="text-sm text-gray-500 mt-1">Help Seeker Portal</p>
        </div>
        <button 
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <nav className="mt-6 px-3">
        {links.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`sidebar-link mb-1 rounded-xl ${
              location.pathname === to ? 'active' : ''
            }`}
            onClick={() => window.innerWidth < 1024 && onClose()}
          >
            <Icon className="w-5 h-5 mr-3" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      
      <div className="p-6 mt-6">
        <div className="bg-indigo-50/50 rounded-2xl p-4">
          <h3 className="text-sm font-medium text-indigo-600 mb-2">Need Help?</h3>
          <p className="text-sm text-gray-600">Contact our support team 24/7 for assistance.</p>
          <button className="btn btn-primary w-full mt-3 text-sm">Contact Support</button>
        </div>
      </div>
    </aside>
  );
};

const Header = ({ onMenuClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="h-20 bg-white/70 backdrop-blur-xl border-b border-gray-100 fixed top-0 right-0 left-0 lg:left-72 z-20">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg mr-4"
            onClick={onMenuClick}
          >
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">Help Seeker Dashboard</h2>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="input py-2 pl-10 pr-4 w-48 lg:w-64"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>

          <div className="relative">
            <button 
              className="p-2 hover:bg-gray-100 rounded-full relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="notification-badge"></span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">

                  <div className="px-4 py-3 hover:bg-gray-50">
                    <p className="text-sm">New food donation available in your area</p>
                    <span className="text-xs text-gray-500">2 minutes ago</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              className="profile-container"
              onClick={() => setShowProfile(!showProfile)}
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">John Doe</span>
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Your Profile</a>
                <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</a>
                <div className="border-t border-gray-100 my-1"></div>
                <a href="#logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50">Sign out</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="lg:ml-72">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="pt-24 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}