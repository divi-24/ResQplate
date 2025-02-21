import React, { useState } from 'react';
import { Heart, Calendar, Users, Bike, Car, Scaling as Walking, ChevronRight, MapPin, Clock } from 'lucide-react';
import Navbar from '../components/Homepage/Navbar';
import Footer from '../components/Homepage/Footer';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    availability: [],
    area: '',
    transport: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
            alt="Volunteer delivering food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Be a Food Hero</h1>
            <p className="text-xl mb-8">Help transport food from donors to those in need.</p>
            <a href="#volunteer-form" 
               className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 
                        text-white font-semibold rounded-lg transition-colors">
              Join as a Volunteer
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Why Volunteer Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Volunteer With Us?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Make an Impact</h3>
              <p className="text-gray-600">Every pickup helps fight hunger in your community.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexible Schedule</h3>
              <p className="text-gray-600">Choose your own hours and delivery times.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Join a Community</h3>
              <p className="text-gray-600">Connect with others making a difference.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Form */}
      <div id="volunteer-form" className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Join Our Volunteer Network</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Area</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your city/region"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transportation Mode</label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Car, label: 'Car' },
                  { icon: Bike, label: 'Bike' },
                  { icon: Walking, label: 'Walking' }
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setFormData({...formData, transport: label})}
                    className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-colors
                              ${formData.transport === label 
                                ? 'border-green-500 bg-green-50 text-green-700' 
                                : 'border-gray-300 hover:border-green-500'}`}
                  >
                    <Icon className="h-6 w-6" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Your Volunteer Dashboard</h2>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Upcoming Deliveries</h3>
            </div>
            <div className="divide-y">
              {[1, 2].map((_, i) => (
                <div key={i} className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Food Bank Delivery #{i + 1}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        2:00 PM
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Downtown Food Bank
                      </span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

