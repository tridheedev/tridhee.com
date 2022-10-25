import React from 'react';
import ProductCardDesc from './ProductCadDesc';

interface Props {
  title: string;
}
const ProductCard = (props: Props) => {
  return (
    <div className='px-2 w-[370px] h-[500px] border shadow-lg rounded-lg pt-12 pb-16 flex  flex-col justify-between'>
      <div className='flex justify-center '>
        <div className='flex flex-col items-center'>
          <div className='h-16 w-16 bg-gray-600 rounded-lg text-white  shadow-lg'>
            icon
          </div>
          <div className='app-text-main font-bold py-5'>{props.title}</div>
          <div className='text-sm'>
            <div className='flex  flex-col space-y-4 mx-10'>
              <ProductCardDesc text='A week-long deep dive session into product road mapping and discovery.' />
              <ProductCardDesc text='Define a high-level system blueprint and designs.' />
              <ProductCardDesc text='Mapping problems into feature sets.' />
            </div>
          </div>
        </div>
      </div>
      <div className='border-2 px-10 py-2 text-sm font-semibold rounded-md shadow-sm   text-center mx-16 justify-end  hover:app-bg-p hover:text-white transition '>
        Get Started
      </div>
    </div>
  );
};

export default ProductCard;
