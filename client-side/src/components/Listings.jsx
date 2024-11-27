import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ListingCard from './ListingCard';

const Listings = () => {
    const loadListings = useLoaderData();

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Available Listings</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {loadListings.map((listing) => (
                        <ListingCard key={listing._id} listing={listing} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Listings;
