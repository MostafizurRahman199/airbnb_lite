import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
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
import Swal from "sweetalert2";

const UpdateList = () => {
  const listItem = useLoaderData();
  const {
    _id,
    title,
    description,
    price,
    location,
    country,
    isAvailable,
    image,
  } = listItem;

  console.log(listItem);

  const navigate = useNavigate();

  // Local state to manage form values
  const [formData, setFormData] = useState({
    title,
    description,
    price,
    location,
    country,
    isAvailable,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const updatedFormData = {
    ...formData,
    image: {
      filename: "default", // You can dynamically set the filename here if needed
      url: formData.image, // The URL from form data
    },
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {


      if (result.isConfirmed) {


        fetch(`http://localhost:8080/listings/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Saved!", "", "success");
            navigate(`/listing/${_id}`).catch((err) =>
              console.error("Error updating listing:", err)
            );
          });



      } else if (result.isDenied) {


        Swal.fire("Changes are not saved", "", "info");


      }
    });
  };



  return (
    <div className="min-h-screen bg-gray-100 py-8 w-full font-poppins ">
      <div className="">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">
          Update This List 
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-2xl shadow-lg space-y-6 w- md:w-8/12 mx-auto"
        >
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-gray-800 font-semibold mb-2 flex items-center"
            >
              <FaRegFileAlt className="mr-2 text-blue-500" /> Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description Input */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-800 font-semibold mb-2 flex items-center"
            >
              <FaRegClipboard className="mr-2 text-blue-500" /> Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={description}
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <FaDollarSign className="mr-2 text-blue-500" /> Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                defaultValue={price}
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Location Input */}
            <div>
              <label
                htmlFor="location"
                className="block text-gray-800 font-semibold mb-2 flex items-center"
              >
                <FaMapMarkerAlt className="mr-2 text-blue-500" /> Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                defaultValue={location}
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Country Input */}
            <div>
              <label
                htmlFor="country"
                className="block text-gray-800 font-semibold mb-2 flex items-center"
              >
                <FaGlobe className="mr-2 text-blue-500" /> Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                defaultValue={country}
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Image Input */}
            <div>
              <label
                htmlFor="image"
                className="block text-gray-800 font-semibold mb-2 flex items-center"
              >
                <FaImage className="mr-2 text-blue-500" /> Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                defaultValue={image.url}
                value={formData.image}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Availability Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isAvailable"
              name="isAvailable"
              defaultValue={isAvailable}
              checked={formData.isAvailable}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="isAvailable"
              className="ml-2 text-gray-800 font-semibold flex items-center"
            >
              <FaCheckCircle className="mr-2 text-blue-500" /> Available for
              Rent
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition duration-300"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateList;
