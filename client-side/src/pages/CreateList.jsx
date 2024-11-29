import React, { useState } from "react";
import Swal from 'sweetalert2';
import {
  FaRegFileAlt,
  FaRegClipboard,
  FaDollarSign,
  FaMapMarkerAlt,
  FaGlobe,
  FaImage,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CreateList = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    country: "",
    image: "",
    isAvailable: true,
  });
  
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    country: "",
    image: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = "Title is required. ";
      isValid = false;
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
      isValid = false;
    }

    if (formData.description.trim().split(' ').length <= 10) {
      newErrors.description = "Description must be greater than 10 words.";
      isValid = false;
    }

    // Price validation
    if (!formData.price || formData.price <= 0) {
      newErrors.price = "Price must be a valid number greater than zero.";
      isValid = false;
    }

    // Location validation
    if (!formData.location.trim()) {
      newErrors.location = "Location is required.";
      isValid = false;
    }

    // Country validation
    if (!formData.country.trim()) {
      newErrors.country = "Country is required.";
      isValid = false;
    }

    // Image URL validation
    if (!formData.image.trim() || !/^https?:\/\/.+/.test(formData.image)) {
      newErrors.image = "Please enter a valid image URL.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return; // If validation fails, don't submit the form
    }

    // Wrap image URL in an object as per the schema definition
    const updatedFormData = {
      ...formData,
      image: {
        filename: "default", // You can dynamically set the filename here if needed
        url: formData.image,  // The URL from form data
      },
    };

    // Post the data to the backend
    fetch("http://localhost:8080/listings/createList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFormData),  // Send updatedFormData with the image as an object
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "success") {
          Swal.fire({
            title: 'Success',
            text: 'Your List added successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          e.target.reset();
          navigate("/");
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 w-full font-poppins">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-4xl font-bold text-center text-pink-500 mb-8">
          Create New Listing
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-r from-pink-100 to-pink-200 p-8 rounded-lg shadow-2xl space-y-6"
        >
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-gray-800 font-semibold mb-2 flex items-center"
            >
              <FaRegFileAlt className="mr-2 text-pink-500" /> Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>

          {/* Description Input */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-800 font-semibold mb-2 flex items-center"
            >
              <FaRegClipboard className="mr-2 text-pink-500" /> Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="4"
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Price Input */}
            <div>
              <label
                htmlFor="price"
                className="block text-gray-800 font-semibold mb-2 flex items-center"
              >
                <FaDollarSign className="mr-2 text-pink-500" /> Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
            </div>

            {/* Location Input */}
            <div>
              <label
                htmlFor="location"
                className="block text-gray-800 font-semibold mb-2 flex items-center"
              >
                <FaMapMarkerAlt className="mr-2 text-pink-500" /> Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Country Input */}
            <div>
              <label
                htmlFor="country"
                className="block text-gray-800 font-semibold mb-2 flex items-center"
              >
                <FaGlobe className="mr-2 text-pink-500" /> Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>

            {/* Image Input */}
            <div>
              <label
                htmlFor="image"
                className="block text-gray-800 font-semibold mb-2 flex items-center"
              >
                <FaImage className="mr-2 text-pink-500" /> Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
            </div>
          </div>

          {/* Availability Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isAvailable"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
              className="w-5 h-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <label
              htmlFor="isAvailable"
              className="ml-2 text-gray-800 font-semibold flex items-center"
            >
              <FaCheckCircle className="mr-2 text-pink-500" /> Available for Rent
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn font-semibold rounded-2xl bg-pink-500 hover:bg-pink-600 text-white transition-all hover:scale-105 duration-300"
            >
              Create Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateList;
