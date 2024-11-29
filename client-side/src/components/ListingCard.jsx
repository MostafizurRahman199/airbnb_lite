import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ listing }) => {
    const { _id, title, description, price, location, image, country, isAvailable } = listing;

    return (
        <div className="max-w-sm w-full rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-6">
            <img
                className="w-full h-56 object-cover rounded-t-2xl"
                src={image?.url || "https://via.placeholder.com/300"}
                alt={image?.filename || "Listing"}
            />
            <div className="px-6 py-4">
                <h2 className="font-semibold text-2xl mb-3 text-gray-800 hover:text-pink-600 transition-colors duration-300">{title}</h2>
                <p className="text-gray-600 text-sm truncate mb-4">{description}</p>
                <div className="flex justify-between items-center text-gray-800">
                    <span className="font-semibold text-lg text-pink-500">${price}</span>
                    <span className="text-gray-500 text-sm">{location}, {country}</span>
                </div>
            </div>
            <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
                <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                        isAvailable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                >
                    {isAvailable ? "Available" : "Unavailable"}
                </span>
                <Link
                    to={`/listing/${_id}`}
                    className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm px-4 py-2 rounded-full hover:from-pink-600 hover:to-red-600 transition duration-300 transform hover:scale-105"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ListingCard;
