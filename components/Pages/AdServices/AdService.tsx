import Image from 'next/image';
import React from 'react';
import AdCard from './AdCard';
import AddServicesCards from './AddServicesCards';

type Props = {};

const AdService = (props: Props) => {
  return (
    <>
      <div className='flex max-w-7xl mx-auto md:h-screen items-center '>
        <div className='relative '>
          <div className='app-text-main leading-tight  mx-10 text-center '>
            <h1 className='text-4xl md:text-8xl font-medium '>
              The Loud voice of your brand.
            </h1>
            <p className='py-2 mt-4  '>
              Extract real business value from social media.
            </p>
            <p>
              Ensuring the best return on investment for your bespoke SEO
              campaign requirement.
            </p>
          </div>
          <div className='h-[200px] w-[200px] absolute  -top-60 left-80 hidden md:block'>
            <Image
              src={'/assets/agency_img1.png'}
              width={'100%'}
              height={'100%'}
              layout='fill'
              alt='image-1'
              className='relative'
            />
          </div>
          <div className='h-[200px] w-[200px] absolute -bottom-32 right-0 hidden md:block'>
            <Image
              src={'/assets/agency_img2.png'}
              alt='image-1'
              layout='fill'
              className='relative'
            />
          </div>
          <div className='h-[100px] w-[100px] absolute left-3 top-40 hidden md:block'>
            <Image
              src={'/assets/agency_img3.png'}
              width={'100%'}
              height={'100%'}
              alt='image-1'
              layout='fill'
            />
          </div>
        </div>
      </div>

      <AddServicesCards />
    </>
  );
};

export default AdService;
