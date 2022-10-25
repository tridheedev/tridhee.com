import React from 'react';
import CallArrow from '../../icons/CallArrow';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className=' pt-32 text-gray-900   '>
      <div className='mx-2 md:mx-0 space-y-2'>
        <div className='md:text-5xl text-2xl text-center font-bold capitalize'>
          <div>Build your software products,</div>
          <div>faster. Better. Scalable.</div>
        </div>
        <div className='flex text-center max-w-prose  pt-2 mx-auto md:text-base'>
          {`We're a web and mobile apps product development agency with a proven
          background in SaaS.`}
        </div>
        <div className='py-1 pb-3 mx-auto  text-center'>
          {` Whether you're a startup, an agency or a big company, we've got you
          covered.`}
        </div>

        <div className='flex justify-center'>
          <div className='bg-[#0B3954] text-white py-2 px-4 rounded-md shadow-lg cursor-pointer hover:bg-[#072B40] transition'>
            <div className='flex mx-2 py-1.5 items-center'>
              <div>Schedule a free consultation call</div>
              <div className='pl-2'>
                <CallArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
