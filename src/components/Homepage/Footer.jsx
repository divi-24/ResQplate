import React, { useState } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Brand Identity */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">SustainBite            </h2>
            <p className="text-sm text-green-100">Reduce Waste, Feed Lives</p>
            <p className="text-sm mt-4">
              Our mission is to eliminate food waste by connecting donors with those in need
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Donate Food', 'Find Food', 'Volunteer'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-green-100 hover:text-primary-dark transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">&nbsp;</h3>
              <ul className="space-y-2">
                {['FAQs', 'Contact Us', 'Privacy Policy'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-green-100 hover:text-primary-dark transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-green-100" />
                <a href="mailto:info@foodsaver.com" className="hover:text-green-100 transition-colors duration-300">
                  info@foodsaver.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-green-100" />
                <a href="tel:+1234567890" className="hover:text-green-100 transition-colors duration-300">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-green-100" />
                <span>123 Food Street, City, State 12345</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Join our newsletter for updates on reducing food waste</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-white text-primary"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-light text-white rounded hover:bg-primary-dark transition-colors duration-300"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 py-4 border-t border-green-100/20">
          <div className="flex justify-center space-x-6">
            {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaPinterest].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="bg-white p-2 rounded-full text-primary hover:text-primary-dark transition-colors duration-300"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>


        <div className="mt-8 text-center text-sm">
          <div className="flex justify-center space-x-4">
            {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white hover:text-green-100 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="mt-4">© {new Date().getFullYear()} SustainBite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;