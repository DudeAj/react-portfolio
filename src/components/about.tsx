import React, { useState } from 'react'
import { dataType } from '../App';


interface IProps {
  data: dataType[];
}

const About: React.FC<IProps> = ({ data }) => {

  return (
    <div id="about" className='bg-white container mx-auto my-100 py-16 sm:py-32'>
      <div className='block sm:flex w-full'>
        <div className='w-full grid-cols-1'>
          <div className='flex flex-col justify-between h-full'>
            {data.map(item =>
            (<div className='border rounded-2xl p-8 mx-4 my-4 sm:my-0 sm:mx-32 flex items-center'>
              <div className={`${item.color} h-16 w-16 rounded-full flex justify-center items-center`}>
                {item.icon}
              </div>
              <div className='flex justify-center'>
                <p className='text-3xl font-medium ml-16 block'>{item.text}</p>
              </div>
            </div>)
            )}
          </div>
        </div>
        <div className='w-full px-4 sm:px-12 pt-8 sm:pt-0'>
          <p className='text-red-500 font-medium text-3xl'>Who am I?</p>
          <p className='font-bold text-7xl pt-3'>About Me</p>
          <p className='mt-16 text-xl font-normal leading-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eligendi unde eum quam placeat. Sapiente vero sed, error asperiores, saepe excepturi accusamus distinctio vitae sunt fugit praesentium quod neque optio.</p>
          <p className='mt-8 text-xl font-normal leading-8'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eligendi unde eum quam placeat.
          </p>
          <button className='bg-emerald-700 mt-8 hover:bg-emerald-800 text-white font-semibold py-2 px-4 rounded flex items-center' onClick={() => alert("button Clicked")}>
            <span className='pr-2'>Contact</span>
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
          </button>
        </div>
      </div>
    </div>
  )
}
export default About;