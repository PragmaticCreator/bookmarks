import React from 'react';
import { faq as faqData } from 'data/home';
import { Button, Dropdown } from 'components';

const FAQ = () => {
  return (
    <div className='container flex flex-col lg:items-center'>
      {/* Content */}
      <div className='flex flex-col text-center lg:w-7/12 xl:w-6/12'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium mb-7'>
          {faqData.title}
        </h2>
        <p className='text-blue-grayish mb-16'> {faqData.description} </p>
      </div>

      {/* Dropdown */}
      {faqData.questions.map((question, index) => (
        <Dropdown
          key={index}
          className='mb-5 lg:w-6/12'
          title={question.question}
          description={question.answer}
        />
      ))}

      <Button
        title='More Info'
        className='mt-7 text-base w-fit mx-auto'
        variant='blue'
      />
    </div>
  );
};

export default FAQ;
