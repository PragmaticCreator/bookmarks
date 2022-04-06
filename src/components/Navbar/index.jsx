import React, { useState } from 'react';
import { logoWhite, Logo } from 'data/images';
import {
  RiMenuFill,
  RiCloseFill,
  RiFacebookBoxFill,
  RiTwitterFill,
} from 'react-icons/ri';
import Button from 'components/Button';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className='container py-5 flex justify-between items-center'>
      <Logo className='text-red-500' />

      {/* Desktop */}
      <div className='hidden md:flex text-sm items-center'>
        <ul className='flex tracking-wider'>
          {['Features', 'Pricing', 'Contact'].map((item, index) => (
            <li key={index}>
              <a
                className='mr-10 md:mr-12 uppercase cursor-pointer hover:text-red-soft duration-300'
                href='#'
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <Button className='tracking-wider' title={'LOGIN'} />
      </div>

      {/* Mobile */}
      <div className='relative md:hidden'>
        {!isActive ? (
          <RiMenuFill
            className='cursor-pointer'
            fontSize={22}
            onClick={() => setIsActive(true)}
          />
        ) : (
          <RiCloseFill
            className='cursor-pointer text-white relative z-50'
            fontSize={32}
            onClick={() => setIsActive(false)}
          />
        )}
        {isActive && (
          <div className='animate-slide-in fixed inset-0 bg-blue-dark opacity-95 z-40 p-6 text-white text-xl'>
            <img src={logoWhite} className='h-[32px] -mt-1' alt='logo' />
            <div className='flex flex-col justify-between h-full py-10'>
              <div>
                <ul className='flex flex-col items-center justify-center tracking-widest w-full'>
                  {['Features', 'Pricing', 'Contact'].map((item) => (
                    <li className='w-full text-center'>
                      <div className='h-[1px] w-full bg-blue-grayish my-10 rounded-md' />
                      <a className='uppercase' href='#'>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className='h-[1px] w-full bg-blue-grayish my-10 rounded-md' />
                <Button
                  variant='white'
                  className='tracking-widest w-full'
                  title={'LOGIN'}
                />
              </div>
              <div className='flex w-full items-center justify-center'>
                <RiFacebookBoxFill fontSize={38} className='mr-10' />
                <RiTwitterFill fontSize={38} className='' />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
