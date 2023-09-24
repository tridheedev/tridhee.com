import React from 'react';
import AdCard from './AdCard';

type Props = {};

const AddServicesCards = (props: Props) => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-10'>
      <div className='md:w-1/2 hidden md:block'>
        <h1 className='md:text-5xl text-3xl font-medium app-text-main'>
          Our Services
        </h1>
        <p className='w-96 pt-6 app-text-main'>
          We focus on the data that is really important for making each of our
          decision, constantly testing, configuring and optimizing process.{' '}
        </p>
        <button className='app-bg-main px-5 py-2 mt-2 text-white rounded-3xl'>
          Contact Us{' '}
        </button>
      </div>
      <div className='flex  md:w-1/2 flex-col gap-3 pt-2 '>
        <div className='flex gap-4'>
          <AdCard
            title='Social Media'
            desc='we create authentic content that delver that true value to your auditions.'
          />
          <AdCard
            title='Sass marketing'
            desc='Experts work with business to find potential customers.'
          />
        </div>
        <div className='flex gap-4'>
          <AdCard
            title='Content Marketing'
            desc='Our Content expert will create a digital marketing strategy.'
          />
          <AdCard
            title='SEO'
            desc='Our SEO words- we know to drive qualified traffic.'
          />
        </div>
      </div>
    </div>
  );
};

export default AddServicesCards;
