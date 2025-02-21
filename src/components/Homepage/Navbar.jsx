import React from 'react'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon, UserCircleIcon, BellIcon } from '@heroicons/react/24/outline';
import {Link} from 'react-router-dom'
import {useAuth} from "../../context/AuthContext"



const Navbar = () => {
  const auth = useAuth()
  const user = auth[0]?.user;
  const [isOpen, setIsOpen] = useState(false);
    const [notifications] = useState([
      { id: 1, text: "New food donation available in your area" },
      { id: 2, text: "Your recent donation was claimed" },
      { id: 3, text: "5 new volunteers joined your area" }
    ]);
  
    const navLinks = [
      { name: 'Home', href: '/', current: true },
      { name: 'Donate Food', href: '/donate-food', current: false },
      { name: 'Find Food', href: '/find-food', current: false },
      { name: 'Volunteer', href: '/volunteer', current: false },
      { name: 'About Us', href: '/about-us', current: false },
    ];
  
  return (
    <>
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center gap-2">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.9A3.5 3.5 0 0018.5 14h-13A3.5 3.5 0 002 15.9V21h19v-5.1zM16 3.5A3.5 3.5 0 0112.5 0h-1A3.5 3.5 0 008 3.5V7h8V3.5z" />
                </svg>
                <Link to="/">
                <h1 className="text-2xl font-bold text-primary">SustainBite</h1>
                </Link>
              </div>
            </div>
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                    link.current
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <BellIcon className="h-6 w-6 text-gray-500 cursor-pointer hover:text-primary" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
                {notifications.length}
              </span>
            </div>
            <div className="flex items-center gap-6">
              <UserCircleIcon className="h-8 w-8 text-gray-500" />
              <Link to="/signin">
              {
                user ? (
                  <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
                  <Link to={`/${user.role.toLowerCase()}/dashboard`} >
                  Go to Dashboard
                  </Link>
                </button>
                ) : (
                  <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
                  Sign In
                </button>
                )
              }
              </Link>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  link.current
                    ? 'bg-green-50 border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <UserCircleIcon className="h-8 w-8 text-gray-500" />
              </div>
              <button className="ml-auto bg-primary text-white px-4 py-2 rounded-md text-sm font-medium">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  )
}

export default Navbar