import React from 'react';
import { logoWhite } from 'data/images';
import { RiFacebookBoxFill, RiTwitterFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className='bg-blue-dark py-10 lg:py-5 text-gray-100'>
      <div className='container flex flex-col lg:flex-row justify-center items-center'>
        <img src={logoWhite} alt='logo' />
        <ul className='flex flex-col lg:flex-row items-center lg:justify-start lg:ml-6 justify-center tracking-widest w-full text-sm lg:text-xs'>
          {['Features', 'Pricing', 'Contact'].map((item) => (
            <li className='text-center mt-8 lg:mt-0 lg:ml-10 hover:text-red-soft transition-colors duration-300'>
              <a className='uppercase' href='#'>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex mt-10 lg:m-0'>
          <RiFacebookBoxFill
            fontSize={26}
            className='mr-7 hover:text-red-soft transition-colors duration-300 cursor-pointer'
          />
          <RiTwitterFill
            fontSize={26}
            className='hover:text-red-soft transition-colors duration-300 cursor-pointer'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
