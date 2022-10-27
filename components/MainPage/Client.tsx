import Link from 'next/link';
import React from 'react';
import PowerKick from '../../icons/clients/PowerKick';
import TheFutureGrp from '../../icons/clients/TheFutureGrp';

type Props = {};

const Client = (props: Props) => {
  return (
    <div className='flex justify-center  py-2 bg-gray-100 h-64 mt-10'>
      <div className='text-center py-5'>
        <div className='app-text-main font-bold '>Our Clients</div>
        <div className='text-sm'>
          Trusted by ambitious SaaS founders & 100s of companies.
        </div>
        <div className='py-10 flex  justify-between items-center space-x-10'>
          <a
            href='https://www.thefuturegp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <div className='flex flex-col'>
              <TheFutureGrp />
              <div className='font-bold text-gray-700'>
                The <span className='text-amber-700'>Future </span>Group
              </div>
            </div>
          </a>

          <div className='flex flex-col'>
            <PowerKick />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
