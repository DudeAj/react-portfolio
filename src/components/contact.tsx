import React from 'react';

const Contact = () => {
  return (
    
      <div id="contact" className='container mx-auto border-b py-16 sm:py-32'>
        <div className='block sm:flex'>
          <div className='px-4 sm:px-8 w-full sm:w-3/4'>
            <p className='text-4xl sm:text-6xl font-semibold'>Let's make something amazing together.</p>
            <p className='text-4xl sm:text-6xl font-semibold mt-8 sm:mt-16'>Say hi on Insta <a className='underline text-blue-600' href="https://instagram.com/ajaygangwar04">@ajaygangwar04</a></p>
          </div>

          <div className='w-full sm:w-1/4 px-4'>
            <p className='text-4xl font-medium mt-16 sm:mt-0 mb-4 sm:mb-8'>Contact</p>
            <p className='text-lg'>Ajay Gangwar, Quilla Chawni, Bareilly,<br /> Uttar Pradesh, India - 486886</p>
            <p className='text-lg mt-4'> +91 98765 43210</p>

            <nav className='w-full uppercase items-center mt-8'>
              <ul className='w-full text-slate-700'>
                <li className='font-semibold text-black mt-4'><a href="#home">[ Home ]</a></li>
                <li className='mt-3'><a href="#about">About Me</a></li>
                <li className='mt-3'><a href="#work">Work</a></li>
                <li className='mt-3'><a href="#contact">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    

  )
}

export default Contact;