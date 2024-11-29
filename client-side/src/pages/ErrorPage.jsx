import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/page_not_found.png'

const ErrorPage = () => {
  return (
    <div className="min-h-screen  bg-white flex flex-col justify-center items-center text-center p-4">
      
       <div className='w-10/12 mx-auto flex flex-col justify-center items-center'>
       <img src={image} className='w-2/4 flex justify-center items-center' alt="" />
        <Link
          to="/"
          className="btn font-semibold rounded-2xl bg-pink-500 hover:bg-pink-600 text-white transition-all hover:scale-105 duration-300"
        >
          Go back to Home
        </Link>
       </div>
     
    </div>
  );
}

export default ErrorPage;
