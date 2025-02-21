import React, {useState} from 'react'
import Navbar from '../../components/Homepage/Navbar'
import Footer from '../../components/Homepage/Footer'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
        phoneNumber: '',
        organizationName: '',
        address: '',
        profilePicture: null
    });

    const [errors, setErrors] = useState({});
    // enum : ['DONAR', 'NGO', 'HELP_SEEKER', 'VOLUNTEER', 'ADMIN'],
    const roles = ['DONAR', 'NGO', 'HELP_SEEKER', 'VOLUNTEER'];
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.role || !formData.phoneNumber || !formData.address){
            setErrors({
                ...errors,
                name: !formData.name ? 'Name is required' : '',
                email: !formData.email ? 'Email is required' : '',
                password: !formData.password ? 'Password is required' : '',
                confirmPassword: !formData.confirmPassword ? 'Confirm password is required' : '',
                role: !formData.role ? 'Role is required' : '',
                phoneNumber: !formData.phoneNumber ? 'Phone number is required' : '',
                address: !formData.address ? 'Address is required' : ''
            });
            return;
        }




        try {
            setLoading(true);
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/register`, {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
                role: formData.role,
                phoneNumber: formData.phoneNumber,
                organizationName: formData.organizationName,
                address: formData.address,
                profilePicture: formData.profilePicture
            });

            if(response.data.success){
                setLoading(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: response.data.message,
                })
               }else{
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.data.message,
                })

            }
            
        } catch (error) {
            setLoading(false);
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong',
            })
        }
    }
  return (
    <>
        <Navbar />  

        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Create an Account</h2>
          <p className="mt-2 text-sm text-gray-600">Join our food management platform</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password*
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password*
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role*
              </label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              >
                <option value="">Select a role</option>
                {roles.map(role => (
                  <option key={role} value={role}>
                    {role.replace('_', ' ')}
                  </option>
                ))}
              </select>
              {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role}</p>}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number*
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
            </div>


            {formData.role === 'NGO' && (
              <div>
                <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="organizationName"
                  id="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address*
            </label>
            <textarea
              name="address"
              id="address"
              rows={3}
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
            />
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
          </div>

          <div>
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
              Profile Picture
            </label>
            <input
              type="file"
              name="profilePicture"
              id="profilePicture"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
            />
          </div>

          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
              {loading ? 'Loading...' : 'Register'}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="font-medium text-green-600 hover:text-green-500">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>


        <Footer />
    </>
  )
}

export default Register