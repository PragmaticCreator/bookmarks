import React from 'react';
import { features as featuresData } from 'data/home';
import { featuresTab1, featuresTab2, featuresTab3 } from 'data/images';
import { Button } from 'components';
import PropTypes from 'prop-types';

const Feature = ({ type }) => {
  return (
    <div className='relative'>
      <div className='container flex flex-col-reverse lg:flex-row-reverse lg:gap-28 items-center'>
        {/* Content */}
        <div className='flex flex-col text-center lg:items-start items-center lg:text-left flex-1'>
          <h1 className='mb-5 text-2xl sm:text-3xl lg:text-4xl font-medium'>
            {featuresData[type].title}
          </h1>
          <p className='text-blue-grayish'>{featuresData[type].description}</p>
          <Button
            title='More Info'
            variant='blue'
            className='w-fit mt-8 text-base hidden lg:block'
          />
        </div>

        {/* Banner */}
        <div className='flex flex-1 items-center justify-center mb-28 lg:mb-0'>
          <img
            src={
              type == 'simple bookmarking'
                ? featuresTab1
                : type == 'speedy searching'
                ? featuresTab2
                : featuresTab3
            }
            alt='banner'
            className=' sm:w-3/4 sm:h-3/4 md:w-full md:h-full w-5/6 h-5/6 z-10'
          />
        </div>
      </div>
      {/* Rounded rectangle */}
      <div className='absolute rounded-r-full lg:top-2/4 sm:top-1/4 top-16 left-0 lg:h-4/6 h-2/6 lg:w-5/12 w-8/12 bg-blue-soft' />
    </div>
  );
};

Feature.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Feature;
