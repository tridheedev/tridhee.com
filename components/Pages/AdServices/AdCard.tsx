import React, { useState } from 'react';

type Props = {
  title: string;
  desc: string;
};

const AdCard = (props: Props) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className=' border-[#0b3954] hover:border-[#fff] app-text-main  border-2 hover:app-bg-main  hover:text-white rounded-3xl px-5 cursor-pointer py-3 w-full'
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <h1 className='text-xl'>{props.title}</h1>
      <div className='text-sm'>{props.desc}</div>
    </div>
  );
};

export default AdCard;
