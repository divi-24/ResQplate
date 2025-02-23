import React, { useState } from 'react';
import { Search, MapPin, Clock, Filter, ChevronDown, Building2, Calendar, Star, Phone, Mail, Share2 } from 'lucide-react';
import Navbar from '../components/Homepage/Navbar';
import Footer from '../components/Homepage/Footer';

export default function FindFood() {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [distance, setDistance] = useState('10');

  const foodItems = [
      {
        "id": 4,
        "donor": "Amrit Organic Farms",
        "type": "Vegetables & Fruits",
        "quantity": "60 kg",
        "address": "12 MG Road, Delhi",
        "pickupTime": "7 AM - 3 PM",
        "category": "Vegetarian",
        "rating": 4.8,
        "phone": "+91 98765 43210",
        "email": "amritfarms@example.com",
        "image": "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&q=80&w=500",
        "tags": ["Organic", "Farm Fresh", "Seasonal"]
      },
      {
        "id": 5,
        "donor": "Mumbai Tiffin Center",
        "type": "Cooked Meals",
        "quantity": "100 lunch boxes",
        "address": "Goregaon, Mumbai",
        "pickupTime": "12 PM - 3 PM",
        "category": "Cooked Meals",
        "rating": 4.7,
        "phone": "+91 99876 54321",
        "email": "mumbaitiffin@example.com",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=500",
        "tags": ["Homemade", "Nutritious"]
      },
      {
        "id": 6,
        "donor": "Punjab Dairy Farm",
        "type": "Dairy Products",
        "quantity": "25 liters of milk",
        "address": "Sector 22, Chandigarh",
        "pickupTime": "6 AM - 10 AM",
        "category": "Perishable",
        "rating": 4.9,
        "phone": "+91 90909 80808",
        "email": "punjabdairy@example.com",
        "image": "",
        "tags": ["Fresh", "Organic", "Pure"]
      },
      {
        "id": 7,
        "donor": "Chennai Bakery House",
        "type": "Bread & Pastries",
        "quantity": "50 items",
        "address": "Anna Nagar, Chennai",
        "pickupTime": "4 PM - 7 PM",
        "category": "Non-Perishable",
        "rating": 4.6,
        "phone": "+91 88776 66554",
        "email": "chennaibakery@example.com",
        "image": "https://images.unsplash.com/photo-1608198093002-8b44d1a1914e?auto=format&fit=crop&q=80&w=500",
        "tags": ["Freshly Baked", "Handmade"]
      },
      {
        "id": 8,
        "donor": "Hyderabad Spices & Grains",
        "type": "Rice & Pulses",
        "quantity": "100 kg",
        "address": "Banjara Hills, Hyderabad",
        "pickupTime": "9 AM - 6 PM",
        "category": "Non-Perishable",
        "rating": 4.8,
        "phone": "+91 77665 44332",
        "email": "hyderabadspices@example.com",
        "image": "https://images.unsplash.com/photo-1556912173-3bb406ef7b34?auto=format&fit=crop&q=80&w=500",
        "tags": ["High Quality", "Long Shelf Life"]
      },
      {
        "id": 9,
        "donor": "Bengaluru Fresh Eggs",
        "type": "Eggs",
        "quantity": "150 dozen",
        "address": "Whitefield, Bengaluru",
        "pickupTime": "5 AM - 9 AM",
        "category": "Perishable",
        "rating": 4.7,
        "phone": "+91 66554 33221",
        "email": "bengalurueggs@example.com",
        "image": "https://images.unsplash.com/photo-1568641226375-2e6ab119e9bb?auto=format&fit=crop&q=80&w=500",
        "tags": ["Farm Fresh", "Organic"]
      },
      {
        "id": 10,
        "donor": "Kolkata Street Kitchen",
        "type": "Prepared Meals",
        "quantity": "80 food packets",
        "address": "New Market, Kolkata",
        "pickupTime": "6 PM - 9 PM",
        "category": "Cooked Meals",
        "rating": 4.9,
        "phone": "+91 55443 22110",
        "email": "kolkatastreetfood@example.com",
        "image": "https://images.unsplash.com/photo-1627308595049-61c5412f5115?auto=format&fit=crop&q=80&w=500",
        "tags": ["Traditional", "Authentic", "Spicy"]
      }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/premium-photo/design-aipowered-app-reduce-food-waste-households_1303487-795.jpg"
            alt="Food Distribution"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">Find Food Near You</h1>
            <p className="text-2xl mb-10 text-gray-200">We connect those in need with surplus food from donors. Join our mission to reduce food waste and help communities thrive.</p>
            <div className="flex gap-4">
              <a href='#listing'><button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Request Food
              </button></a>
              <a href='./donate-food#donate-form'><button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Become a Donor
              </button></a>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { icon: Search, title: "Search for Food", desc: "Enter your location and preferred food type" },
              { icon: MapPin, title: "Find Nearby Donations", desc: "Browse real-time available donations in your area" },
              { icon: Calendar, title: "Request & Schedule", desc: "Choose your convenient pickup time slot" },
              { icon: Clock, title: "Receive Confirmation", desc: "Get instant notification when food is ready" }
            ].map((step, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-2xl flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:bg-green-200">
                  <step.icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Panel */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative">
              <MapPin className="absolute left-4 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-3.5 text-gray-400" />
              <select
                className="w-full pl-12 pr-4 py-3 border-2 rounded-xl appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="non-vegetarian">Non-Vegetarian</option>
                <option value="perishable">Perishable</option>
                <option value="non-perishable">Non-Perishable</option>
              </select>
              <ChevronDown className="absolute right-4 top-3.5 text-gray-400" />
            </div>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-gray-400">≤</span>
              <select
                className="w-full pl-12 pr-4 py-3 border-2 rounded-xl appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              >
                <option value="5">5 miles</option>
                <option value="10">10 miles</option>
                <option value="20">20 miles</option>
                <option value="50">50 miles</option>
              </select>
              <ChevronDown className="absolute right-4 top-3.5 text-gray-400" />
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors text-lg">
              Search Food
            </button>
          </div>
        </div>

        {/* Food Listings */}
        <div id="listing" className="grid md:grid-cols-2 gap-8">
          {foodItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="flex">
                <div className="w-2/5">
                  <img src={item.image} alt={item.type} className="w-full h-full object-cover" />
                </div>
                <div className="w-3/5 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Building2 className="w-5 h-5 text-green-600 mr-2" />
                      <h3 className="font-semibold text-lg">{item.donor}</h3>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-800 font-medium mb-3">{item.type} - {item.quantity}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                    <p className="text-gray-600 text-sm">{item.address}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 text-gray-500 mr-2" />
                    <p className="text-gray-600 text-sm">{item.pickupTime}</p>
                  </div>
                  <div className="flex items-center mb-4">
                    <Phone className="w-4 h-4 text-gray-500 mr-2" />
                    <p className="text-gray-600 text-sm">{item.phone}</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      Request Food
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

