import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='font_main bg-gray-100 w-full mx-auto '>
        <Navbar></Navbar>
      <div className='bg-gray-100 w-full md:w-10/12 mx-auto py-20'>
      <Outlet></Outlet>
      </div>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout