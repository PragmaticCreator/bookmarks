import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';
import { BgDots } from 'data/images';

const Card = ({ title, Logo, version, btnTitle, className }) => {
  return (
    <div className={className}>
      <div className='relative px-6 w-72 pt-16 pb-5 rounded-2xl flex flex-col items-center shadow-2xl justify-between text-center'>
        <Logo className='bg-cover' />
        <div className='mt-5 mb-20'>
          <h2 className='text-xl font-medium'> {title} </h2>
          <p className='text-blue-grayish text-base mt-2'> {version} </p>
        </div>
        <BgDots className='absolute left-0 bottom-24' />
        <Button className='w-full text-sm' title={btnTitle} variant='blue' />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  Logo: PropTypes.func.isRequired,
  version: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Card;
