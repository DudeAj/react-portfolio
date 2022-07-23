import React from 'react'

const footer = () => {
  return (
    <div className='container mx-auto py-8 sm:py-16'>
      <div className='block sm:flex justify-center sm:justify-between'>
        <p className='text-center'>© {new Date().getFullYear()} <a className='text-blue-500 underline' href="https://github.com/DudeAj" >DudeAj</a> Code by Sajon.</p>
        <p className='text-center mt-4'>Made with &#10084; by Ajay Gangwar</p>
      </div>
    </div>
  )
}

export default footer