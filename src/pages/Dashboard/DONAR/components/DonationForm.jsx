import React, { useState } from 'react';
import { Camera, MapPin, Clock } from 'lucide-react';
import axios from "axios";
import Swal from "sweetalert2";
import {storage} from "../../../../Firebase/Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";


const DonationForm = () => {
  const [formData, setFormData] = useState({
    foodType: '',
    quantity: '',
    expirationDate: '',
    location: '',
    notes: '',
    image: null
  });
  const [loading, setLoading] = useState(false);

  const foodTypes = [
    'Fresh Produce',
    'Dairy Products',
    'Baked Goods',
    'Canned Foods',
    'Prepared Meals',
    'Beverages',
    'Other'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const response =await  axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/fooddonation/donate`, {
          foodType: formData.foodType,
          weight: formData.quantity,
          expiryDate: formData.expirationDate,
          pickupLocation: formData.location,
          foodImages: formData.image
          });
          if(response.data.success){
            setLoading(false);
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Donation submitted successfully',
            });
            setFormData({
              foodType: '',
              quantity: '',
              expirationDate: '',
              location: '',
              notes: '',
              image: null
            });
          }



    } catch (error) {
      setLoading(false);
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      
    }
    
  };

  const handleFileUpload = (e) =>{
    try { 
      
      const file = e.target.files[0];
      const storageRef = ref(storage, `sustainbite_food_images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');}, 
        (error) => {
          console.log(error);
        }, 
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setFormData({...formData, image: downloadURL});
          
  
        }
      );
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Make a Donation</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Food Type
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              value={formData.foodType}
              onChange={(e) => setFormData({...formData, foodType: e.target.value})}
            >
              <option value="">Select food type</option>
              {foodTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity (kg/items)
            </label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expiration Date
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                value={formData.expirationDate}
                onChange={(e) => setFormData({...formData, expirationDate: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Enter address"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Notes
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            rows={4}
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Food Image
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-green-300 border-dashed rounded-lg cursor-pointer bg-green-50 hover:bg-green-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Camera className="w-8 h-8 mb-2 text-green-600" />
                <p className="text-sm text-gray-500">Click to upload images</p>
              </div>
              <input type="file" className="hidden" accept="image/*" onChange={(e) => {handleFileUpload(e)}} />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          {loading ? 'Submitting...' : 'Submit Donation'}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;