import React from 'react';
import { Heart, Leaf, Users, TrendingUp, ArrowRight, Truck, Building2, HandHeart } from 'lucide-react';
import Navbar from '../components/Homepage/Navbar';
import Footer from '../components/Homepage/Footer';

const ImpactMetric = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <Icon className="w-8 h-8 text-green-600 mb-2" />
    <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const ProcessStep = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <Icon className="w-6 h-6 text-green-600" />
    </div>
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
     <Navbar />
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Reducing Food Waste, Feeding Lives</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We bridge the gap between surplus food and those in need by connecting donors, NGOs, and volunteers.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold flex items-center mx-auto">
            Join Us <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Mission & Vision</h2>
            <div className="grid gap-12">
              <div>
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Mission</h3>
                <p className="text-gray-600">
                  Our mission is to eliminate food waste by efficiently redistributing surplus food to communities in need, ensuring no one goes hungry.
                </p>
              </div>
              <div>
                <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Vision</h3>
                <p className="text-gray-600">
                  A world where surplus food is efficiently utilized to nourish those in need, creating a sustainable and hunger-free future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImpactMetric icon={Leaf} value="50,000+" label="KG of Food Saved" />
            <ImpactMetric icon={Users} value="100,000+" label="Meals Provided" />
            <ImpactMetric icon={HandHeart} value="500+" label="Active Volunteers" />
            <ImpactMetric icon={Building2} value="50+" label="NGO Partners" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
          <div className="grid gap-8 max-w-3xl mx-auto">
            <ProcessStep 
              icon={Building2}
              title="Donors List Surplus Food"
              description="Restaurants, grocery stores, and individuals can easily list their surplus food through our platform."
            />
            <ProcessStep 
              icon={Users}
              title="NGOs Request Food"
              description="Organizations can browse and request available food based on their needs."
            />
            <ProcessStep 
              icon={Truck}
              title="Volunteers Transport"
              description="Our dedicated volunteers ensure timely pickup and delivery of food to those who need it."
            />
            <ProcessStep 
              icon={TrendingUp}
              title="Track Impact"
              description="Monitor the impact of your contributions in real-time through our dashboard."
            />
          </div>
        </div>
      </section>
     
      <Footer />
    </div>
  );
}

