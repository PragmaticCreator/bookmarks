import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

const Dropdown = ({ title, description, className }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${className}`}>
      {/* Title */}
      <div
        className='flex justify-between items-center mb-2 cursor-pointer'
        onClick={() => setIsActive(!isActive)}
      >
        <h4 className='text-base lg:text-lg text-blue-dark hover:text-red-soft'>
          {title}
        </h4>
        {!isActive ? (
          <RiArrowDownSLine fontSize={32} className='text-blue-soft' />
        ) : (
          <RiArrowUpSLine fontSize={32} className='text-red-soft' />
        )}
      </div>

      {/* Description */}
      {isActive && (
        <p className='text-blue-grayish text-base mb-5'>{description}</p>
      )}

      {/* Divider */}
      <div className='w-full h-[2px] bg-gray-300' />
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Dropdown;
