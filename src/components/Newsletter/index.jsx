import { Button } from 'components';
import React, { useState } from 'react';
import {} from 'react-icons/ri';
import { Error } from 'data/images';
import validator from 'validator';

const Newsletter = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [email, setEmail] = useState('');

  /**
   * @description Validates email address
   */
  const validateEmail = (email) => setIsEmailValid(validator.isEmail(email));

  return (
    <div className='bg-blue-soft py-16'>
      <div className='container flex flex-col  text-white'>
        {/* Content */}
        <div className='text-center'>
          <h4 className='uppercase tracking-[0.3rem] font-medium text-sm mb-5'>
            35,000+ already joined
          </h4>
          <h2 className='text-2xl lg:text-3xl font-medium'>
            Stay up to date with what we're doing
          </h2>
        </div>
        {/* Input */}
        <div className='flex flex-col lg:flex-row justify-center items-center mt-10'>
          <div className='relative'>
            <input
              required
              type='email'
              placeholder='Enter your email address'
              onChange={(e) => setEmail(e.target.value)}
              className={`text-blue-dark bg-gray-100 py-3 pl-5 pr-10 rounded-md lg:mr-4 text-base min-w-[300px] ${
                isEmailValid
                  ? ''
                  : 'border-red-soft border-2 rounded-bl-none rounded-br-none'
              }`}
            />
            {/* Error icon */}
            {!isEmailValid && (
              <Error className='absolute right-3 lg:right-7 bottom-4' />
            )}
            {/* Error Message */}
            {!isEmailValid && (
              <span className='absolute left-0 -bottom-5 min-w-[300px] border-red-soft bg-red-soft rounded-bl-md rounded-br-md  border-2 px-1'>
                <h5 className='text-xs'>Whoops, make sure it's an email</h5>
              </span>
            )}
          </div>
          <Button
            title='Contact Us'
            className={`${
              isEmailValid ? 'mt-4' : 'mt-10'
            } w-[300px] lg:w-fit lg:m-0 text-base`}
            onClick={() => validateEmail(email)}
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
