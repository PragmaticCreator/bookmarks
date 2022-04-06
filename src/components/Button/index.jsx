import React from 'react';
import Proptypes from 'prop-types';

const classes = {
  base: 'whitespace-nowrap md:px-7 px-3 py-2 rounded-md shadow-lg font-medium duration-[350ms] ease-in-out transition-all',
  variants: {
    red: 'bg-red-soft text-white hover:bg-gray-100 border-red-soft border-2 hover:text-red-soft',
    blue: 'bg-blue-soft text-white hover:bg-gray-100 border-blue-soft border-2 hover:text-blue-soft',
    black:
      'bg-transparent text-blue-dark hover:bg-transparent border-transparent border-2 hover:text-blue-dark hover:border-blue-dark',
    white: 'bg-transparent text-white border-white border-2',
  },
};

const Button = ({ title, className, variant = 'red', onClick }) => {
  return (
    <button
      className={`${className} ${classes.variants[variant]} ${classes.base}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: Proptypes.string.isRequired,
  className: Proptypes.string,
  variant: Proptypes.string,
  onClick: Proptypes.func,
};

export default Button;
