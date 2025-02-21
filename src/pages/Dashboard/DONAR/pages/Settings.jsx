import React, { useEffect, useState } from 'react';
import { Bell, Lock, User, CreditCard } from 'lucide-react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import { useAuth } from '../../../../context/AuthContext';
import Swal from 'sweetalert2';

function Settings() {
  const auth = useAuth();
  const user = auth[0]?.user;
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phoneNumber: user?.phoneNumber || '',
    address: user?.address || '',
    profilePicture: user?.profilePicture || ''
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData({
      name: user?.name || '',
      phoneNumber: user?.phoneNumber || '',
      address: user?.address || '',
      profilePicture: user?.profilePicture || ''
    });
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    try {
      await axios.put(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/update-profile`, {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        profilePicture: formData.profilePicture
      });
      localStorage.setItem('auth', JSON.stringify({ ...auth[0], user: { ...user, ...formData } }));
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: 'Your profile has been updated successfully!',
      });
      auth[1]({ ...auth[0], user: { ...user, ...formData } }); 
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: error.response?.data?.message || 'Something went wrong!',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="max-w-3xl mx-auto pt-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-green-800">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account preferences and notifications.</p>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <User className="h-5 w-5 text-green-600" />
            <h2 className="text-xl font-semibold text-green-800">Profile Information</h2>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" className="w-full p-2 border rounded-lg" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded-lg" value={user?.email} disabled />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" name="phoneNumber" className="w-full p-2 border rounded-lg" value={formData.phoneNumber} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" name="address" className="w-full p-2 border rounded-lg" value={formData.address} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
              <input type="file" className="w-full p-2 border rounded-lg" onChange={handleFileChange} />
            </div>
            {formData.profilePicture && (
              <img src={formData.profilePicture} alt="Profile" className="w-20 h-20 rounded-full" />
            )}
            <button
              type="button"
              onClick={handleUpdateProfile}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Settings;
