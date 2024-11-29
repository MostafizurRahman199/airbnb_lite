import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ListingCard from '../components/ListingCard';

const AllListings = () => {
  const loadedListings = useLoaderData();
  
  // State for managing search, filter, and sort

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [sortByPrice, setSortByPrice] = useState(''); // 'asc', 'desc', ''
  const [filterAvailability, setFilterAvailability] = useState(false);
  const [sortByRecent, setSortByRecent] = useState(false);

  // Search and filter functionality
  const filteredListings = loadedListings
    .filter(listing => {

      const matchesSearch = 
        (listing.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        listing.location.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCountry = selectedCountry ? listing.country === selectedCountry : true;
      const matchesAvailability = filterAvailability ? listing.isAvailable === filterAvailability : true;
      return matchesSearch && matchesCountry && matchesAvailability;
    })
    .sort((a, b) => {
      if (sortByPrice === 'asc') {
        return a.price - b.price;
      } else if (sortByPrice === 'desc') {
        return b.price - a.price;
      }
      return 0;
    })
    .sort((a, b) => {
      if (sortByRecent) {
        const dateA = a.createdAt ? new Date(a.createdAt) : new Date();
        const dateB = b.createdAt ? new Date(b.createdAt) : new Date();
        return dateB - dateA;
      }
      return 0;
    });

  // Extract country options for the filter
  const countryOptions = [...new Set(loadedListings.map(listing => listing.country))];

  return (
    <div className="min-h-screen w-10/12 mx-auto my-8 font-body">
      <div className="w-full mx-auto px-4">
        <h1 className="text-4xl text-center font-bold text-pink-500 my-8">All Listings</h1>

        {/* Filters and Search Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          {/* Search */}
          <div className="flex flex-col sm:flex-row items-center space-x-4">
            <input 
              type="text" 
              placeholder="Search by title or location" 
              className="p-3 border border-gray-300 rounded-lg  md:w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex lg:flex-row gap-4">
            <select 
              value={selectedCountry} 
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="">Filter by Country</option>
              {countryOptions.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>

            <div>
              <select 
                value={sortByPrice} 
                onChange={(e) => setSortByPrice(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Sort by Price</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>

           
          </div>

          {/* Sort */}
          <div className="flex space-x-4 items-center">
           

            <div className="flex items-center space-x-2">
              <label className="text-gray-700">Available:</label>
              <input 
                type="checkbox" 
                checked={filterAvailability}
                onChange={() => setFilterAvailability(!filterAvailability)} 
                className="w-5 h-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
              />
            </div>

            <div className="flex items-center space-x-1">
              <label className="text-gray-700">Sort by Recent:</label>
              <input 
                type="checkbox" 
                checked={sortByRecent}
                onChange={() => setSortByRecent(!sortByRecent)} 
                className="w-5 h-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
              />
            </div>
          </div>
        </div>

        {/* Listing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredListings.length > 0 ? (
            filteredListings.map((listing) => (
              <ListingCard key={listing._id} listing={listing} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-4">No listings found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllListings;
