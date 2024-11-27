import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ListingDetails = () => {
    const listItem = useLoaderData();
    const { title, description, price, location, image, country, isAvailable, createdAt } = listItem;
    
    // Initialize useNavigate
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
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
                            <p className="text-gray-600 mb-4">{description}</p>

                            <div className="text-gray-800 mb-4">
                                <p className="font-semibold">Location:</p>
                                <p>{location}, {country}</p>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <p className="text-lg font-bold text-green-600">${price}</p>
                                <span
                                    className={`px-3 py-1 text-sm rounded-full ${
                                        isAvailable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                    }`}
                                >
                                    {isAvailable ? "Available" : "Unavailable"}
                                </span>
                            </div>
                        </div>

                        <div className="text-sm text-gray-500 mt-4">
                            <p>Created At: {new Date(createdAt).toLocaleDateString()}</p>
                        </div>

                        {/* Back Button */}
                        <button
                            onClick={() => navigate(-1)} // Navigate back to the previous page
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 w-fit"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingDetails;
