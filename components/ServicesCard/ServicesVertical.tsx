import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  desc: string;
  link: string;
};

const ServicesVertical = (props: Props) => {
  return (
    <div className='flex justify-start flex-col md:flex-row  mx-6'>
      <div className='  flex  items-center w-[250px]'>
        <p className='text-2xl font-medium app-text-main p-full hover:underline'>
          <Link href={props.link} className='underline'>
            {props.title}
          </Link>
        </p>
        <div className='px-2 pt-3 h-full'>
          <FontAwesomeIcon icon={faArrowRight} className='w-4 app-text-main' />
        </div>
      </div>

      <div className='md:pl-16 items-start w-full'>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ServicesVertical;
