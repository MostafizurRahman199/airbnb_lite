import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { ComplexNavbar } from '../components/ComplexNavbar'

const MainLayout = () => {
  return (
    <div className='font_main bg-gray-100 w-full mx-auto '>
      
       <ComplexNavbar></ComplexNavbar>
     
      <div className='bg-gray-100 w-full md:w-10/12 mx-auto py-20'>
      <Outlet></Outlet>
      </div>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout