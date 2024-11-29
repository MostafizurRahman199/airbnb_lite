import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendar, FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Swal from "sweetalert2";

const ListingDetails = () => {
  const listItem = useLoaderData();
  const {
    _id,
    title,
    description,
    price,
    location,
    image,
    country,
    isAvailable,
    createdAt,
  } = listItem;

  // Initialize useNavigate
  const navigate = useNavigate();

  // Function to handle delete action
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8080/listings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data === "deleted") {
              Swal.fire({
                title: "Deleted!",
                text: "Your listing has been deleted.",
                icon: "success",
              });
              navigate("/"); // Navigate to home or listings page
            }
          })
          .catch((err) => console.error("Error deleting listing:", err));
      }
    });
  };

  return (
   <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-100 py-8 font_body">
     <div className="min-h-screen w-10/12 mx-auto ">
      <div className="container mx-auto px-2">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="my-4 px-5 py-3 flex items-center gap-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl shadow-lg hover:scale-105 transition duration-300"
        >
          <FaArrowLeft className="text-lg" /> Back to Home
        </button>

        {/* Listing Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:flex md:items-center mx-auto my-6">
          {/* Image Section */}
          <div className="w-full h-full md:w-1/2 flex justify-center items-center p-2 ">
            <img
              className="w-full h-96 rounded-2xl object-cover transition-transform duration-500 transform "
              src={image?.url || "https://via.placeholder.com/800x600"}
              alt={image?.filename || "Listing"}
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h1>
              <p className="text-lg text-gray-700 mb-6">{description}</p>

              <div className="text-gray-800 mb-4 flex items-center gap-3">
                <MdLocationOn className="text-pink-500 text-xl" />
                <p className="text-lg">{location}, {country}</p>
              </div>

              <div className="flex items-center justify-start gap-4 mb-6">
                <p className="text-2xl font-bold text-green-600">${price}</p>
                <span
                  className={`px-4 py-1 text-sm font-medium rounded-full ${
                    isAvailable
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {isAvailable ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-500 flex items-center gap-2 mt-4">
              <FaCalendar className="text-gray-500" />
              <p>{new Date(createdAt).toLocaleDateString()}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-6 mt-8">
              <Link
                to={`/updateList/${_id}`}
                className="px-5 py-3 flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl shadow-lg hover:scale-105 transition duration-300"
              >
                <FaEdit className="text-lg" /> Edit
              </Link>
              <button
                onClick={handleDelete}
                className="px-5 py-3 flex items-center gap-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl shadow-lg hover:scale-105 transition duration-300"
              >
                <FaTrashAlt className="text-lg" /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ListingDetails;
