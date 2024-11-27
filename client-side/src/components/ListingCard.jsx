import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ listing }) => {
    const {_id, title, description, price, location, image, country, isAvailable } = listing;
    // console.log(_id);

    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <img
                className="w-full h-48 object-cover"
                src={image?.url || "https://via.placeholder.com/300"}
                alt={image?.filename || "Listing"}
            />
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
                <p className="text-gray-600 text-sm truncate mb-4">{description}</p>
                <div className="flex justify-between items-center text-gray-800">
                    <span className="font-semibold">${price}</span>
                    <span className="text-gray-500 text-sm">{location}, {country}</span>
                </div>
            </div>
            <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
                <span
                    className={`px-3 py-1 text-sm rounded-full ${
                        isAvailable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                >
                    {isAvailable ? "Available" : "Unavailable"}
                </span>
                <Link to={`/listing/${_id}`} className="bg-blue-500 text-white text-sm px-2 sm:px-4 py-2 rounded-2xl hover:bg-blue-600 transition">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ListingCard;
