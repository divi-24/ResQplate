import React, { useState } from 'react';
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Bell,
  Lock,
  Shield,
  Save
} from 'lucide-react';

export default function Settings() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234-567-8900',
    address: '123 Main St, City',
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    twoFactor: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setProfile(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNotificationChange = (type) => {
    setProfile(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Settings updated:', profile);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label" htmlFor="name">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="input pl-10"
                />
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="label" htmlFor="email">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="input pl-10"
                />
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="label" htmlFor="phone">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="input pl-10"
                />
                <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="label" htmlFor="address">Default Address</label>
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  className="input pl-10"
                />
                <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            {[
              { type: 'email', icon: Mail, label: 'Email Notifications' },
              { type: 'push', icon: Bell, label: 'Push Notifications' },
              { type: 'sms', icon: Phone, label: 'SMS Notifications' }
            ].map(({ type, icon: Icon, label }) => (
              <label key={type} className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={profile.notifications[type]}
                    onChange={() => handleNotificationChange(type)}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors duration-200 ${
                    profile.notifications[type] ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}>
                    <div className={`w-4 h-4 rounded-full bg-white shadow transform transition-transform duration-200 ${
                      profile.notifications[type] ? 'translate-x-6' : 'translate-x-1'
                    } mt-1`} />
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Security</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Lock className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Change Password</p>
                  <p className="text-sm text-gray-500">Update your password regularly</p>
                </div>
              </div>
              <button type="button" className="btn btn-secondary">Change</button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Shield className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500">Add an extra layer of security</p>
                </div>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  name="twoFactor"
                  checked={profile.twoFactor}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full transition-colors duration-200 ${
                  profile.twoFactor ? 'bg-indigo-600' : 'bg-gray-200'
                }`}>
                  <div className={`w-4 h-4 rounded-full bg-white shadow transform transition-transform duration-200 ${
                    profile.twoFactor ? 'translate-x-6' : 'translate-x-1'
                  } mt-1`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary flex items-center">
            <Save className="w-5 h-5 mr-2" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}