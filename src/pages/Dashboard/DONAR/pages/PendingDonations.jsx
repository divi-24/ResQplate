import React, { useState, useEffect } from 'react';
import { Clock, MapPin, XCircle, Search, Filter } from 'lucide-react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import {motion, AnimatePresence} from 'framer-motion';

function PendingDonations() {
  const [donations, setDonations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/v1/fooddonation/all`);
        if(response.data.success){
          setDonations(response.data.donations);
        }
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

    fetchDonations();
  }, []);


  const pendingDonations = donations.filter(donation => donation.donationStatus === 'AVAILABLE');



  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };


  const handleViewDetails = (id) => async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/v1/fooddonation/info/${id}`);
      if(response.data.success){
        setSelectedDonation(response.data.donation);
        setIsModelOpen(true);
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleTrackOrder = () => {
    var lat = Math.floor(Math.random() * 100) + 1;
    var lng = Math.floor(Math.random() * 100) + 1;
    var zoom = 13;
    var url = `https://www.google.com/maps/@${lat},${lng},${zoom}z`;
    window.open(url, '_blank');



  }


  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Pending Donations</h1>
            <p className="text-gray-600 mt-2">
              {pendingDonations.length} active donations awaiting pickup
            </p>
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search by food type or location..."
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
           
          </div>
        </div>

        <div className="grid gap-6">
          {pendingDonations.map(donation => (
            searchQuery.length > 0 && !donation.foodType.toLowerCase().includes(searchQuery.toLowerCase()) && !donation.pickupLocation.toLowerCase().includes(searchQuery.toLowerCase()) ? null :
            <div key={donation.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-48 sm:h-48">
                    <img 
                      src={donation.foodImages || "https://icon2.cleanpng.com/20180605/ijl/aa9zxzu28.webp" }
                      alt={donation.foodType} 
                      className="w-full h-48 sm:w-48 sm:h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{donation.foodType}</h3>
                        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
                          {donation.weight} kg available
                        </div>
                      </div>
                     
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-5 w-5" />
                        <span>Expires: {formatDate(donation.expiryDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-5 w-5" />
                        <span>{donation.pickupLocation}</span>
                      </div>
                    </div>

                    <div className="flex justify-end gap-4">
                      <button onClick={handleViewDetails(donation._id)}
                       className="px-4 py-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
                        View Details
                      </button>
                      <button onClick={handleTrackOrder}
                       className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                        Track on Map
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {pendingDonations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No pending donations found</p>
            </div>
          )}
        </div>
      </main>

      <AnimatePresence>
        {isModelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-green-800">Donation Details</h2>
                <button onClick={() => setIsModelOpen(false)}>
                  <XCircle className="h-6 w-6 text-gray-400" />
                </button>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-48 h-48">
                    <img 
                      src={selectedDonation.foodImages || "https://icon2.cleanpng.com/20180605/ijl/aa9zxzu28.webp" }
                      alt={selectedDonation.foodType} 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedDonation.foodType}</h3>
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
                      {selectedDonation.weight} kg available
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-5 w-5" />
                        <span>Expires: {formatDate(selectedDonation.expiryDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-5 w-5" />
                        <span>{selectedDonation.pickupLocation}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{selectedDonation.notes}</p>
                  </div>
                </div>
                <div className="flex justify-end gap-4">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                    Track on Map
                  </button>
                </div>
              </div>


                </motion.div>
                </motion.div>
                )}
                </AnimatePresence>
              




    </div>
  );
}

export default PendingDonations;