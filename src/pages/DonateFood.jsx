import React, { useState, useEffect } from 'react';
import { 
  Utensils, 
  ClipboardList, 
  Clock, 
  LineChart,
  ChevronDown,
  MapPin,
  Heart,
  Users,
  Truck,
  CheckCircle2
} from 'lucide-react';
import Navbar from '../components/Homepage/Navbar';
import Footer from '../components/Homepage/Footer';


export default function DonateFood() {
  const [formData, setFormData] = useState({
    foodType: '',
    category: '',
    quantity: '',
    address: '',
    timeSlot: '',
    instructions: ''
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [stats] = useState({
    donations: '50,000+',
    peopleHelped: '200,000+',
    volunteers: '5,000+',
    cities: '50+'
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white">
        <Navbar />

      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Make a Difference,
            <span className="block text-green-400">One Meal at a Time</span>
          </h1>
          <p className="text-2xl mb-12 text-gray-200">Join thousands of donors in our mission to reduce food waste and feed those in need.</p>
          <a 
            href="#donate-form"
            className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
          >
            <Heart className="w-5 h-5" />
            <span>Start Donating</span>
          </a>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-4">
            {[
              { icon: <Heart className="w-6 h-6" />, label: 'Donations Made', value: stats.donations },
              { icon: <Users className="w-6 h-6" />, label: 'People Helped', value: stats.peopleHelped },
              { icon: <Truck className="w-6 h-6" />, label: 'Active Volunteers', value: stats.volunteers },
              { icon: <MapPin className="w-6 h-6" />, label: 'Cities Covered', value: stats.cities }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {stat.icon}
                  <span className="text-3xl font-bold">{stat.value}</span>
                </div>
                <p className="text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20 text-gray-800">
            How It <span className="text-green-600">Works</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { icon: <Utensils className="w-12 h-12" />, title: "Register", desc: "Quick sign up process for donors" },
              { icon: <ClipboardList className="w-12 h-12" />, title: "List Food", desc: "Share details about your donation" },
              { icon: <Clock className="w-12 h-12" />, title: "Schedule", desc: "Choose your convenient time" },
              { icon: <LineChart className="w-12 h-12" />, title: "Track Impact", desc: "See your contribution's reach" }
            ].map((step, index) => (
              <div 
                key={index} 
                className={`text-center transform transition-all duration-500 ${
                  activeStep === index ? 'scale-110' : 'scale-100 opacity-70'
                }`}
              >
                <div className={`bg-green-100 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 transform transition-all duration-300 ${
                  activeStep === index ? 'bg-green-600 text-white scale-110' : ''
                }`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 left-0 w-full" style={{ transform: 'translateY(-50%)' }}>
                    <div className="border-t-2 border-green-200 w-full" style={{ margin: '0 15%' }}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Donation Form */}
      <div id="donate-form" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Make Your Donation</h2>
              <p className="text-gray-600">Fill out the form below to start your food donation journey</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Food Type</label>
                    <div className="relative group">
                      <select 
                        className="w-full p-4 border-2 border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-green-500 transition-all duration-300 bg-gray-50 group-hover:border-green-300"
                        value={formData.foodType}
                        onChange={(e) => setFormData({...formData, foodType: e.target.value})}
                      >
                        <option value="">Select Type</option>
                        <option value="veg">Vegetarian</option>
                        <option value="non-veg">Non-Vegetarian</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Category</label>
                    <div className="relative group">
                      <select 
                        className="w-full p-4 border-2 border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-green-500 transition-all duration-300 bg-gray-50 group-hover:border-green-300"
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                      >
                        <option value="">Select Category</option>
                        <option value="perishable">Perishable</option>
                        <option value="non-perishable">Non-Perishable</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Quantity (in kg)</label>
                    <input 
                      type="number"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-all duration-300 bg-gray-50 hover:border-green-300"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      placeholder="Enter quantity"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Pickup Address</label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
                      <input 
                        type="text"
                        className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-all duration-300 bg-gray-50 group-hover:border-green-300"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        placeholder="Enter your address"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Preferred Pickup Time</label>
                    <div className="relative group">
                      <select 
                        className="w-full p-4 border-2 border-gray-200 rounded-xl appearance-none focus:outline-none focus:border-green-500 transition-all duration-300 bg-gray-50 group-hover:border-green-300"
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                      >
                        <option value="">Select Time Slot</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                        <option value="evening">Evening (3 PM - 6 PM)</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Special Instructions</label>
                    <textarea 
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-all duration-300 bg-gray-50 hover:border-green-300 h-[104px] resize-none"
                      value={formData.instructions}
                      onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                      placeholder="Any special instructions for pickup?"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2 text-lg"
                >
                  <CheckCircle2 className="w-6 h-6" />
                  <span>Submit Donation</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

