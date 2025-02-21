import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, UserCircleIcon, BellIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const auth = useAuth();
  const user = auth[0]?.user;
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const notificationsRef = useRef(null);
  const profileRef = useRef(null);

  const notifications = [
    { id: 1, text: "New food donation available in your area" },
    { id: 2, text: "Your recent donation was claimed" },
    { id: 3, text: "5 new volunteers joined your area" }
  ];

  const navLinks = [
    { name: 'Home', href: '/', current: false },
    { name: 'Donate Food', href: '/donate-food', current: false },
    { name: 'Find Food', href: '/find-food', current: false },
    { name: 'Volunteer', href: '/volunteer', current: false },
    { name: 'About Us', href: '/about-us', current: false },
  ];

  const useClickOutside = (ref, callback) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [ref, callback]);
  };

  useClickOutside(notificationsRef, () => setIsNotificationsOpen(false));
  useClickOutside(profileRef, () => setIsProfileOpen(false));

  const handleLogout = () => {
    auth[1]?.logout();
    setIsProfileOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Fork-Plate--Streamline-Sharp" height={24} width={24} ><desc>{"Fork Plate Streamline Icon: https://streamlinehq.com"}</desc><g id="fork-plate--fork-plate-food-dine-cook-utensils-eat-restaurant-dining-kitchenware"><path id="Union" fill="#22c55e" fillRule="evenodd" d="M11 12c0 6.075 4.925 11 11 11v-4.25a6.75 6.75 0 0 1 0 -13.5V1c-6.075 0 -11 4.925 -11 11Zm5.75 0c0 -2.9 2.35 -5.25 5.25 -5.25v10.5A5.25 5.25 0 0 1 16.75 12ZM1 2v5.5a4.502 4.502 0 0 0 3.25 4.324L4.25 22h2.5l0 -10.176A4.502 4.502 0 0 0 10 7.5V2H8v4.5H6.5l0 -4.5h-2l0 4.5H3V2H1Z" clipRule="evenodd" strokeWidth={1} /></g></svg>
              <h1 className="text-2xl font-bold text-primary">ResQplate</h1>
            </Link>
          </div>

          {/* Right side - Navigation and User Controls */}
          <div className="hidden md:flex items-center gap-8">
            {/* Navigation Links */}
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="group relative inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-200" />

            {/* User Controls */}
            <div className="flex items-center gap-6">
              <div className="relative" ref={notificationsRef}>
                <button
                  onClick={() => {
                    setIsNotificationsOpen(!isNotificationsOpen);
                    setIsProfileOpen(false);
                  }}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <BellIcon className="h-6 w-6 text-gray-500 transform transition-transform hover:scale-110" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
                    {notifications.length}
                  </span>
                </button>

                <AnimatePresence>
                  {isNotificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                    >
                      <div className="px-4 py-2 text-sm font-medium text-gray-700 border-b">Notifications</div>
                      {notifications.map(notification => (
                        <div
                          key={notification.id}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <p className="text-sm text-gray-600">{notification.text}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => {
                    setIsProfileOpen(!isProfileOpen);
                    setIsNotificationsOpen(false);
                  }}
                  className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <UserCircleIcon className="h-8 w-8 text-gray-500 transform transition-transform hover:scale-110" />
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    >
                      {user ? (
                        <>
                          <Link
                            to="/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            Profile
                          </Link>
                          <Link
                            to={`/${user.role.toLowerCase()}/dashboard`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            Dashboard
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            Logout
                          </button>
                        </>
                      ) : (
                        <Link
                          to="/signin"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Sign In
                        </Link>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <UserCircleIcon className="h-8 w-8 text-gray-500" />
                </div>
                {user ? (
                  <Link
                    to={`/${user.role.toLowerCase()}/dashboard`}
                    className="ml-auto bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/signin"
                    className="ml-auto bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;