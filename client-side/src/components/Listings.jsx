import React, { useEffect } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import ListingCard from './ListingCard';

const Listings = () => {
    const loadListings = useLoaderData();

    
  
    const recentListings = loadListings.slice(-8);
    console.log(recentListings);

    return (
        <div className="min-h-screen w-10/12 mx-auto my-8 font_body">
            <div className="w-full mx-auto px-4">
                <h1 className="text-4xl text-center font-bold text-pink-500 my-8">Recent Added Listings</h1>
                <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recentListings.map((listing) => (
                        <ListingCard key={listing._id} listing={listing} />
                    ))}
                </div>

                {/* Button to See All Listings using Link */}
                <div className="flex justify-center mt-8">
                    <Link
                        to="/allListings"
                        className="btn font-semibold rounded-2xl bg-pink-500 hover:bg-pink-600 text-white transition-all hover:scale-105 duration-300"
                    >
                        See All Listings
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Listings;
