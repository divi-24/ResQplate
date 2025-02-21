import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Eye, EyeOff, AlertCircle } from 'lucide-react';
import Navbar from "../../components/Homepage/Navbar";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [loading, setLoading] = useState(false);

  const checkPasswordStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (pass.match(/[A-Z]/)) strength++;
    if (pass.match(/[0-9]/)) strength++;
    if (pass.match(/[^A-Za-z0-9]/)) strength++;
    setPasswordStrength(strength);
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 0: return 'bg-red-500';
      case 1: return 'bg-orange-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-blue-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-200';
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordStrength(e.target.value);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.5 } }
  };

  const resetPasswordHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.put(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/reset-password/${token}`, {
        password
      });
      if (response.data.success) {
        setLoading(false);
        Swal.fire({
          title: 'Password Reset Successful',
          text: 'Please login with your new password.',
          icon: 'success',
          confirmButtonText: 'Close',
        });
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }else{
        setLoading(false);
        Swal.fire({
          title: 'Password Reset Failed',
          text: response.data.message,
          icon: 'error',
          confirmButtonText: 'Close',
        });
      }
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <>

      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-md w-full mt-16 space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-purple-100"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-6">
              <Lock className="h-8 w-8 text-green-600" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-extrabold text-gray-900 mb-2"
            >
              Reset Password
            </motion.h2>
            <p className="text-gray-600 text-sm">
              Please enter your new password below
            </p>
          </div>

          <motion.form 
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 space-y-6"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 pr-10 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent sm:text-sm"
                    placeholder="Enter new password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                
                <div className="mt-2 space-y-2">
                  <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full ${i < passwordStrength ? getStrengthColor() : 'bg-gray-200'}`}
                      />
                    ))}
                  </div>
                 {password && password.length < 8 && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                    <AlertCircle size={12} />
                    <span>Password must be at least 8 characters long</span>
                  </div>
                 )}
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 pr-10 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent sm:text-sm"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {password && confirmPassword && password !== confirmPassword && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} />
                    Passwords do not match
                  </p>
                )}
              </div>
            </div>

            <motion.button
            onClick={resetPasswordHandler}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={!password || !confirmPassword || password !== confirmPassword}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white 
                ${password && confirmPassword && password === confirmPassword 
                  ? 'bg-green-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500' 
                  : 'bg-green-400 cursor-not-allowed'}`}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-green-300 group-hover:text-green-200" aria-hidden="true" />
              </span>
              {loading ? 'Resetting Password...' : 'Reset Password'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>

            <div className="text-center mt-4">
              <Link 
                to="/signin"
                className="text-sm text-purple-600 hover:text-purple-500 font-medium"
              >
                Back to Login
              </Link>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </>
  );
};

export default ResetPassword;