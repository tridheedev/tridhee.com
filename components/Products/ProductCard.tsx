import React, { ReactElement } from 'react';
import ProductCardDesc from './ProductCadDesc';

interface Props {
  title: string;
  icons: ReactElement;
  descriptions: {
    main: string;
    sec: string;
    tri: string;
  };
}
const ProductCard = (props: Props) => {
  return (
    <div className='px-2 w-[370px] h-[500px] border shadow-md rounded-lg pt-12 pb-16 flex  flex-col justify-between'>
      <div className='flex justify-center '>
        <div className='flex flex-col items-center'>
          <div className='flex justify-center flex-col items-center '>
            <div className='app-text-main border-2 px-6 py-6 rounded-full shadow-sm'>
              {props.icons}
            </div>
            <div className='app-text-main font-bold py-5'>{props.title}</div>
          </div>
          <div className='text-sm'>
            <div className='flex  flex-col space-y-4 mx-10'>
              <ProductCardDesc text={props.descriptions.main} />
              <ProductCardDesc text={props.descriptions.sec} />
              <ProductCardDesc text={props.descriptions.tri} />
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
