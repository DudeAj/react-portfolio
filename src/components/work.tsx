import React from 'react';
import { dataType } from '../App';

interface IProps {
  data: dataType[]
}
const Work: React.FC<IProps> = ({ data }) => {


  return (
    <div id="work" className='bg-orange-100 py-16 sm:py-32'>
      <div className='container mx-auto'>
        <div className='w-full px-4 sm:px-8'>
          <p className='text-green-500 font-medium text-3xl'>Explore My Work</p>
          <p className='font-bold text-7xl pt-3'>Portfolio</p>
        </div>
        <div className='grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 mt-12 gap-4'>
          {data.map(item =>
          (<div className={`border rounded-3xl ${item.color} text-white pt-12 pl-12 mx-4 sm:mx-8 overflow-hidden`}>
            <p className='text-4xl font-semibold pb-4'>{item.text}</p>
            <p className='text-xl font-medium pb-8'>{item.desc}</p>
            <div className='pl-4'>
              <img className='transform duration-200 hover:scale-105' src={item.image} />
            </div>
          </div>)
          )}
        </div>
      </div>
    </div>
  )
}

export default Work;