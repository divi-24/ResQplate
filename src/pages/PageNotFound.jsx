import React from 'react'
import Navbar from '../components/Homepage/Navbar'

const PageNotFound = () => {
  return (
    <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
            <span className='text-4xl text-gray-500'>
            404 Page Not Found 
            </span>
           
        </div>
    </>
  )
}

export default PageNotFound