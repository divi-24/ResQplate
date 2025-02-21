import React, { useState } from 'react';
import { Link, Links, useLocation } from 'react-router-dom';
import { 
  Home, 
  PlusCircle, 
  History, 
  Clock, 
  Settings, 
  BarChart2, 
  HelpCircle,
  Leaf,
  Menu,
  X
} from 'lucide-react';
import {useAuth} from "../../../../context/AuthContext"
import Swal from 'sweetalert2'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const auth = useAuth()
  const user = auth[0]?.user
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, text: 'Dashboard', path: '/donar/dashboard' },
    { icon: PlusCircle, text: 'Make a Donation', path: '/donar/dashboard/donate' },
    { icon: History, text: 'My Donations', path: '/donar/dashboard/my-donations' },
    { icon: Clock, text: 'Pending Donations', path: '/donar/dashboard/pending' },
    // { icon: BarChart2, text: 'Reports', path: '/donar/dashboard/reports' },
    { icon: Settings, text: 'Settings', path: '/donar/dashboard/settings' },
    { icon: HelpCircle, text: 'Help', path: '/donar/dashboard/help' }
  ];

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to log out',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('auth');
        Swal.fire('Logged out!', 'You have been successfully logged out', 'success')
        window.location.href = '/signin'
      }
    })
  }

  return (
    <div className="relative">
      <div className="bg-white border-b border-gray-200 fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-green-50 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h1 className="text-xl font-semibold text-gray-800">
                <Link to="/donar/dashboard" className="flex items-center gap-2">
                Sustainabite
                </Link>
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                      ${isActive 
                        ? 'bg-green-50 text-green-600' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    <item.icon className={`h-4 w-4 ${isActive ? 'text-green-600' : 'text-gray-500'}`} />
                    <span>{item.text}</span>
                  </Link>
                );
              })}
             
              <div className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 bg-red-100 hover:bg-red-200">
                <button onClick={handleLogout}  className="text-red-500 hover:text-red-700">Logout</button>
                </div>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-all duration-200
                      ${isActive 
                        ? 'bg-green-50 text-green-600' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    <item.icon className={`h-5 w-5 ${isActive ? 'text-green-600' : 'text-gray-500'}`} />
                    <span>{item.text}</span>
                  </Link>
                );
              })}
              
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                <button onClick={handleLogout} className="text-red-500 hover:text-red-700">Logout</button>
                </div>
          </div>
        )}
      </div>

      <div className="h-16" />
    </div>
  );
};

export default Navigation;