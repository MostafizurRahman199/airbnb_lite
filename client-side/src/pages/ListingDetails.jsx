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
  // Handle delete action
  const handleDelete = () => {
 
  
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:8080/listings/${_id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if(data === "deleted"){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      navigate("/"); // Navigate to home or listings page
                  }
                })
                .catch((err) => console.error("Error deleting listing:", err));


      
        }
      });
};



  return (
    <div className="min-h-screen bg-gray-100 py-8 font_body">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="my-4 px-4 py-2 flex items-center gap-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300 w-fit"
        >
          <FaArrowLeft /> Back to Home
        </button>
        <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex md:items-start">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              className="w-full h-96 object-cover"
              src={image?.url || "https://via.placeholder.com/800x600"}
              alt={image?.filename || "Listing"}
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
              <p className="text-lg text-gray-700 mb-6">{description}</p>

              <div className="text-gray-800 mb-4 flex items-center gap-2">
                <MdLocationOn className="text-pink-500" />
                <p>
                  {location}, {country}
                </p>
              </div>

              <div className="flex items-center justify-start gap-2 mb-4">
                <p className="text-lg font-bold text-green-600">${price}</p>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    isAvailable
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {isAvailable ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-500 mt-4 flex items-center gap-2">
              <FaCalendar className="text-gray-500" />
              <p>{new Date(createdAt).toLocaleDateString()}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-6">
              <Link to={`/updateList/${_id}`}
              
                className="px-4 py-2 flex items-center gap-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                <FaEdit /> Edit
              </Link>
              <button
                onClick={handleDelete}
                className="px-4 py-2 flex items-center gap-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
              >
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
