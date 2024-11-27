import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-blue-500 text-xl font-bold">
          <Link to="#">TravelBuddy</Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-blue-500 text-2xl lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Items */}
        <div
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "top-16 left-0" : "hidden lg:block"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 items-center lg:items-center text-gray-600">
            <li className="my-2 lg:my-0">
              <Link
                to="#"
                className="hover:text-blue-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="my-2 lg:my-0">
              <Link
                to="/createList"
                className="hover:text-blue-500 transition-colors"
              >
                Create Post
              </Link>
            </li>
            <li className="my-2 lg:my-0">
              <Link
                to="#"
                className="hover:text-blue-500 transition-colors"
              >
                Packages
              </Link>
            </li>
            <li className="my-2 lg:my-0">
              <Link
                to="#"
                className="hover:text-blue-500 transition-colors"
              >
                Services
              </Link>
            </li>
            <li className="my-2 lg:my-0">
              <Link
                to="#"
                className="hover:text-blue-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;