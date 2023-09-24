import React from 'react';
import Logo from '../../icons/Logo';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='container mx-auto py-6 font-mont '>
      <div className='flex justify-between'>
        <div className='flex items-center mx-2'>
          <Logo />
          <h1 className='text-xl font-medium w-40  app-text-main'>
            Tridhee Labs
          </h1>
        </div>
        <div className='hidden space-x-4 text-sm font-bold text-gray-900 items-center md:flex '>
          <h4>Our Work</h4>
          <h4>Services</h4>
          <h4>Expertise</h4>
          <h4>Blogs</h4>
          <h4 className='bg-[#0B3954] text-white py-2 px-4 rounded-md shadow-lg cursor-pointer hover:bg-[#072B40] transition'>
            Contact Us
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
