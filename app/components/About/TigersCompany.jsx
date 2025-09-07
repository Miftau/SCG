import React from 'react';

const TigersCompany = () => {
  return (
    <div className='flex flex-col justify-center text-center md:py-20 sm:pt-44 pt-12'>
      <h2 className='font-semibold text-3xl sm:text-4xl sm:pb-14'>شركة نمور</h2>
      <div className="flex items-center justify-center w-full min-h-[400px] px-4 md:px-6 bg-white dark:bg-gray-900">
        <img
          src="/images/Group 19225-8YyptxQ_.svg"
          alt="Tigers Company"
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[850px] object-contain"
          />
        </div>
    </div>
  );
};

export default TigersCompany;
