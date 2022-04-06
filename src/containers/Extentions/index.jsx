import React from 'react';
import { extentions as extentionsData } from 'data/home';
import { Card } from 'components';
import { Chrome, Firefox, Opera } from 'data/images';

const Extentions = () => {
  return (
    <div className='lg:mt-40 flex flex-col items-center container'>
      {/* Content */}
      <div className='text-center lg:w-7/12 xl:w-6/12'>
        <h1 className='mb-7 text-2xl sm:text-3xl lg:text-4xl text-blue-dark font-medium'>
          {extentionsData.title}
        </h1>
        <p className='text-blue-grayish mb-12'>{extentionsData.description}</p>
      </div>
      {/* Cards */}
      <div className='flex flex-col lg:flex-row gap-16'>
        <Card
          title={extentionsData.chrome.title}
          Logo={Chrome}
          version={extentionsData.chrome.version}
          btnTitle={extentionsData.chrome.button}
        />
        <Card
          className='lg:mt-10'
          title={extentionsData.firefox.title}
          Logo={Firefox}
          version={extentionsData.firefox.version}
          btnTitle={extentionsData.firefox.button}
        />
        <Card
        className='lg:mt-20'
          title={extentionsData.opera.title}
          Logo={Opera}
          version={extentionsData.opera.version}
          btnTitle={extentionsData.opera.button}
        />
      </div>
    </div>
  );
};

export default Extentions;
