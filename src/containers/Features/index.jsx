import React, { useState } from 'react';
import { features as featuresData } from 'data/home';
import { Feature } from 'components';

const Features = () => {
  const [featureType, setFeatureType] = useState('simple bookmarking');

  /**
   * @param index {number}
   * @description Changing state of feature type.
   */
  const setType = (index) => {
    setFeatureType(
      index == 0
        ? 'simple bookmarking'
        : index == 1
        ? 'speedy searching'
        : 'easy sharing'
    );
  };

  return (
    <div>
      <div className='container flex flex-col text-center items-center lg:mt-40'>
        {/* Content */}
        <div className='lg:w-7/12 xl:w-6/12 mb-7 lg:mb-16'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium text-blue-dark mb-7'>
            {featuresData.title}
          </h2>
          <p className='text-blue-grayish'> {featuresData.description} </p>
        </div>
        {/* Features */}
        <div className='relative flex flex-col w-full items-center'>
          <ul className='flex flex-col lg:flex-row w-full lg:w-10/12 justify-around lg:mr-16'>
            {featuresData.list.map((feature, index) => (
              <div key={index}>
                <div className='lg:hidden w-full border-[0.5px] opacity-50 border-blue-grayish mb-5' />
                <li
                  className={`mb-5 relative cursor-pointer duration-300 capitalize font-medium ${
                    featureType === feature
                      ? 'text-blue-dark before:content-[""] before:absolute before:-bottom-5 before:left-[33%] before:w-4/12 before:h-[4px] before:bg-red-soft before:z-20 lg:before:w-[140%] lg:before:left-[-20%]'
                      : 'text-blue-grayish hover:text-red-soft'
                  }`}
                  onClick={() => setType(index)}
                >
                  {feature}
                </li>
              </div>
            ))}
          </ul>
          <div className='relative w-full lg:w-10/12 lg:mr-16 border-[0.5px] opacity-50 border-blue-grayish mb-16' />
        </div>
      </div>

      {/* Feature */}
      <Feature type={featureType} />
    </div>
  );
};

export default Features;
