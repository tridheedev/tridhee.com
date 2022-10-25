import React from 'react';

type Props = {};

const Client = (props: Props) => {
  return (
    <div className='flex justify-center  py-2 bg-gray-100 h-52 mt-10'>
      <div className='text-center py-5'>
        <div className='app-text-main font-bold '>Our Clients</div>
        <div className='text-sm'>
          Trusted by ambitious SaaS founders & 100s of companies.
        </div>
      </div>
    </div>
  );
};

export default Client;
