import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ListingCard from './ListingCard';


const Listings = () => {
    const loadListings = useLoaderData();

    return (
        <div className="min-h-screen  my-8 font_body">
            <div className="w-full  mx-auto px-4">
                <h1 className="text-4xl text-center font-bold text-pink-500 my-8">Available Listings</h1>
                <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {loadListings.map((listing) => (
                        <ListingCard key={listing._id} listing={listing} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Listings;
