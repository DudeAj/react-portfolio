import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import axios from 'axios';

const Header = () => {
  const [open, setOpen] = useState(false);

  const share = () => {
    axios
      .get(
        `https://api.whatsapp.com/send?phone=&attachment=${encodeURIComponent(
          'C:UsersorangeDownloadsMental WellBeing_result_level_3.pdf'
        )}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <header className='w-full py-4 pt-6 px-2'>
      <div className='block sm:flex w-full align-middle tracking-widest'>
        <div className='flex items-center justify-between sm:block w-full my-2 sm:my-0'>
          <h1 className='text-4xl font-extrabold'>DudeAj</h1>
          <div className='block sm:hidden' onClick={() => setOpen(!open)}>
            <BiMenu size='2em' />
          </div>
        </div>
        <nav
          className={`${
            open ? 'block' : 'hidden'
          } sm:block transition ease-in-out delay-150 w-full uppercase flex items-center my-2 sm:my-0`}
        >
          <ul className='sm:flex w-full items-center justify-evenly text-slate-700'>
            <li className='font-semibold text-black'>
              <a href='#home'>[ Home ]</a>
            </li>
            <li>
              <a href='#about'>About Me</a>
            </li>
            <li>
              <a href='#work'>Work</a>
            </li>
            <li>
              <a href='#contact'>Contact Us</a>
            </li>
            <li>
              <a
                target='_blank'
                href={
                  'https://wa.me/send?attachment=C:/Users/orange/Downloads/1-snapchat.jpg'
                  // `https://api.whatsapp.com/send?phone=&attachment=${encodeURIComponent('C:Users\orange\Downloads\Mental WellBeing_result_level_3.pdf')}`
                }
              >
                share
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={`${
            open ? 'block' : 'hidden'
          } sm:block w-full flex justify-start sm:justify-end`}
        >
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center'
            onClick={() => alert('button Clicked')}
          >
            <span className='pr-2'>Resume</span>
            <svg
              className='fill-current w-4 h-4 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
