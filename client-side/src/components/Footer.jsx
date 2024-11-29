import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="space-y-4">
            <h5 className="text-xl font-semibold text-pink-600">About Us</h5>
            <p className="text-gray-600 leading-relaxed">
              We are dedicated to providing the best solutions for your needs. Your satisfaction is our priority.
            </p>
            <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="text-xl font-semibold text-pink-600">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h5 className="text-xl font-semibold text-pink-600">Services</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Guided Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Hotel Booking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Travel Packages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Transportation Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Custom Itineraries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h5 className="text-xl font-semibold text-pink-600">Contact Us</h5>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600">
                <FaMapMarkerAlt className="text-pink-500" />
                <span>123 Business St, New York, NY</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <FaPhone className="text-pink-500" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <FaEnvelope className="text-pink-500" />
                <span>info@yourcompany.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h5 className="text-xl font-semibold text-pink-600 mb-2">
                Subscribe to our Newsletter
              </h5>
              <p className="text-gray-600">
                Stay updated with the latest news and exclusive offers.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex flex-wrap gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-200 pt-8">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="#"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2023 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
