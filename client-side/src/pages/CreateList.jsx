import React, { useState } from "react";
import Swal from 'sweetalert2'
import {
  FaRegFileAlt,
  FaRegClipboard,
  FaDollarSign,
  FaMapMarkerAlt,
  FaGlobe,
  FaImage,
  FaCheckCircle,
  FaArrowLeft,
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







  // Handle form input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };







  const handleSubmit = (e) => {
    e.preventDefault();

    // Wrap image URL in an object as per the schema definition
    const updatedFormData = {
        ...formData,
        image: {
            filename: "default", // You can dynamically set the filename here if needed
            url: formData.image,  // The URL from form data
        },
    };



    // console.log("Form Data Submitted: ", updatedFormData);
    
    fetch("http://localhost:8080/listings/createList", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),  // Send updatedFormData with the image as an object
    }).then((res) => res.json()).then((data) => {
        if(data === "success"){
            Swal.fire({
                title: 'Success',
                text: 'Your List added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              e.target.reset();
              navigate("/");
        }
    });
};


  return (
    <div className="min-h-screen bg-gray-100 py-8 w-full font-poppins ">
      <div className="">
       
        <h1 className="text-3xl font-bold text-center text-pink-500 mb-8">
          Create New Listing
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-r from-pink-100 to-pink-200 p-8 rounded-2xl shadow-lg space-y-6 w- md:w-8/12 mx-auto"
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
              className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
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
              className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="4"
            ></textarea>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
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
                className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
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
                className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

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
                className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
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
                className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
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
              className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <label
              htmlFor="isAvailable"
              className="ml-2 text-gray-800 font-semibold flex items-center"
            >
              <FaCheckCircle className="mr-2 text-pink-500" /> Available for
              Rent
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-pink-500 text-white rounded-2xl hover:bg-pink-600 transition duration-300"
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
