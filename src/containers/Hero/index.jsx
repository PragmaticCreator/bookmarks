import React from 'react';
import { heroBg } from 'data/images';
import { hero as heroData } from 'data/home';
import Button from 'components/Button';

const Hero = () => {
  return (
    <div className='relative'>
      <div className='container flex lg:flex-row md:gap-12 lg:gap-28 items-center flex-col-reverse'>
        {/* Content */}
        <div className='text-center lg:text-left flex flex-col flex-1'>
          <h1 className='mb-8 text-3xl lg:text-4xl xl:text-5xl text-blue-dark font-medium'>
            {heroData.title}
          </h1>
          <p className='text-blue-grayish'>{heroData.description}</p>

          <div className='flex lg:justify-start items-center justify-center mt-8'>
            <Button title='Get it on Chrome' className='mr-5 text-base' variant='blue' />
            <Button title='Get it on Firefox' className='text-base' variant='black' />
          </div>
        </div>

        {/* Banner */}
        <div className='flex flex-1 items-center justify-center mb-28 lg:mb-0 z-10'>
          <img
            src={heroBg}
            alt='banner'
            className=' sm:w-3/4 sm:h-3/4 md:w-full md:h-full w-5/6 h-5/6'
          />
        </div>
      </div>

      {/* Rounded rectangle */}
      <div className='absolute rounded-l-full lg:top-2/4 sm:top-1/4 top-10 right-0 lg:h-4/6 h-2/6 lg:w-5/12 w-8/12 bg-blue-soft' />
    </div>
  );
};

export default Hero;
