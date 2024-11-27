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
    <footer className="bg-white py-12 border-t border-blue-100">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="flex flex-wrap justify-between">
          {/* About Us */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h5 className="text-xl font-bold text-blue-500 mb-4">About Us</h5>
            <p className="text-gray-600 leading-relaxed">
              We are dedicated to providing the best solutions for your needs. Your satisfaction is our priority.
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
              Learn More
            </button>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h5 className="text-xl font-bold text-blue-500 mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
  <h5 className="text-xl font-bold text-blue-500 mb-4">Services</h5>
  <ul className="space-y-2">
    <li>
      <a
        href="#"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        Guided Tours
      </a>
    </li>
    <li>
      <a
        href="#"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        Hotel Booking
      </a>
    </li>
    <li>
      <a
        href="#"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        Travel Packages
      </a>
    </li>
    <li>
      <a
        href="#"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        Transportation Services
      </a>
    </li>
    <li>
      <a
        href="#"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        Custom Itineraries
      </a>
    </li>
  </ul>
</div>


          {/* Contact Us */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h5 className="text-xl font-bold text-blue-500 mb-4">Contact Us</h5>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-blue-500" />
                <span className="text-gray-600">
                  123 Business St, New York, NY
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-blue-500" />
                <span className="text-gray-600">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-500" />
                <span className="text-gray-600">info@yourcompany.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 border-t border-blue-100 pt-6">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h5 className="text-xl font-bold text-blue-500 mb-2">
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
                className="flex-1 px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-blue-100 pt-6">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-gray-500">© 2023 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
