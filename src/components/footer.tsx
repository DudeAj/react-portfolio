import React from 'react'

const footer = () => {
  return (
    <div className='container mx-auto py-24'>
      <div className='flex justify-between'>
        <p>© {new Date().getFullYear()} DudeAj. Code by Sajon.</p>
        <p>Made with &#10084; by Ajay Gangwar</p>
      </div>
    </div>
  )
}

export default footer