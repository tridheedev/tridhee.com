import React from 'react';
import ProductCard from '../Products/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleNodes,
  faDesktop,
  faPenFancy,
} from '@fortawesome/free-solid-svg-icons';

type Props = {};

const OurServices = (props: Props) => {
  return (
    <div className='py-10'>
      <div className='text-center py-10'>
        <h5 className='app-text-main font-bold text-xl'>Our Services</h5>
      </div>
      <div className='container mx-auto flex justify-center md:space-x-10 space-x-0  flex-col md:flex-row  items-center space-y-10 md:space-y-0 '>
        <ProductCard
          title='Development'
          icons={
            <FontAwesomeIcon icon={faDesktop} width='30px' height='30px' />
          }
          descriptions={{
            main: 'Responsive web development for all browsers & devices.',
            sec: 'Complex workflows, interactions, and visualizations.',
            tri: 'Web-based systems that scale.',
          }}
        />
        <ProductCard
          title='UI/UX Design'
          icons={
            <FontAwesomeIcon icon={faPenFancy} width='30px' height='30px' />
          }
          descriptions={{
            main: 'Unlock the Power of User-Centered Design.',
            sec: 'Enhance Brand Credibility.',
            tri: 'Ahead in a Competitive Landscape.',
          }}
        />
        <ProductCard
          title='Consulting'
          descriptions={{
            main: 'Catalyzing Success Through IT Expertise.',
            sec: 'Elevate Your Business with Expert IT Guidance.',
            tri: 'Smart Solutions, Strong Support.',
          }}
          icons={
            <FontAwesomeIcon icon={faCircleNodes} width='30px' height='30px' />
          }
        />
      </div>
    </div>
  );
};

export default OurServices;
