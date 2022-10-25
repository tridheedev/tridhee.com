import React from 'react';
import Link from 'next/link';
import Logo from '../../icons/Logo';
function Footer() {
  const links = {
    company: [
      { title: 'About Us', url: '/' },
      { title: 'Out Work', url: '/work' },
      { title: 'Services', url: '/services' },
    ],
    experties: [
      { title: 'Media & Communication', url: '/media-comm' },
      { title: 'Finance', url: '/finance' },
    ],
    learn: [
      { title: 'Blog', url: '/blog' },
      { title: 'Development Resources', url: '/resources' },
      { title: 'E-commerce Resources', url: '/e-commerce' },
      { title: 'Consulting Resource', url: '/consulting-resources' },
    ],
    tools: [
      { title: 'Tools', url: '/book' },
      { title: 'buttons.book', url: '/become-host' },
    ],
  };

  return (
    <div className='bg-secondary px-5  py-10 font-mont '>
      <div className=' max-w-7xl mx-auto '>
        <div className='flex flex-col lg:flex-row justify-between'>
          {/* khome away tag line */}
          <div className='max-w-sm  '>
            <h3 className='text-white font-bold text-base md:text-2xl flex items-center  space-x-4 '>
              <Logo />
              <Link href='/'>Tridhee Labs</Link>
            </h3>
            <p className='py-2 text-white korean-word'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam
              deserunt expedita nostrum mollitia laudantium maxime quisquam
              laborum temporibus est rerum harum minima voluptatem, consequuntur
              eos sint! Optio, mollitia beatae?
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-10 py-10 lg:py-0'>
            <div>
              {footerLinks({
                title: 'Company',
                links: links.company,
              })}
            </div>
            <div>
              {footerLinks({ title: 'Expertise', links: links.experties })}
            </div>
            <div>{footerLinks({ title: 'Learn', links: links.learn })}</div>
            <div>{footerLinks({ title: 'Tools', links: links.tools })}</div>
            {/* subscribe */}
          </div>
        </div>

        {/* second row*/}
        <div className='pt-10 text-white max-w-7xl mx-auto '>
          <div className=' grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 	 '>
            <div className='lg:justify-self-start'>
              {/* subscriptions  */}
              {/* <div>
                <div className='font-bold text-base md:text-lg py-2'>
                  {'footer.subscribe'}
                </div>
                <div className='korean-word'>{'footer.dailyUpdate'}</div>
              </div> */}
              {/* subscriptions ends */}
              {/* input
              <div className='flex space-x-2  sm:space-y-0 flex-row lg:justify-between sm:space-x-5  items-center py-5  '>
                <div className='w-full  '>
                  <input
                    type='text'
                    placeholder='Your Email'
                    className='py-2 red-2five bg-secondary border-2  pl-5  w-full text-sm md:text-base'
                  />
                </div>
                <button className='py-2.5  bg-white  md:px-6 text-primary font-bold red-2five  text-sm md:text-base  w-1/2   md:w-36 '>
                  {'footer.subscribe'}
                </button>
              </div> */}
            </div>
            <div className='lg:justify-self-center flex items-center'>
              {socialLinks('')}
            </div>
            <div className='lg:justify-self-end flex items-center'>
              {copyRight('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const copyRight = (t: any) => (
  <>
    <div className='w-full'>
      <div className=' font-bold text-base md:text-lg py-2'>
        &copy; 2022 Tridhee Labs
      </div>
    </div>
  </>
);

const socialLinks = (t: any) => (
  <div className='w-full'>
    <div className=' font-bold text-base md:text-lg md:py-2 '>{'Find Us'}</div>
    <div className='flex md:space-x-4 justify-between py-2  '>
      <div>
        <svg
          className='h-7 w-7'
          viewBox='0 0 20 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19.8132 2.4489C19.1056 2.76044 18.356 2.96608 17.5885 3.05921C18.3966 2.57352 19.0016 1.81185 19.2919 0.914851C18.5429 1.35191 17.7129 1.67006 16.8293 1.84725C16.2464 1.22389 15.474 0.810445 14.6319 0.671121C13.7899 0.531796 12.9255 0.674388 12.1728 1.07675C11.4201 1.47912 10.8214 2.11874 10.4695 2.8963C10.1177 3.67385 10.0324 4.54583 10.2269 5.37683C7.00607 5.22484 4.15296 3.6774 2.2417 1.3401C1.89425 1.93058 1.71302 2.60406 1.71722 3.28916C1.71722 4.63579 2.40235 5.8194 3.44027 6.51476C2.82512 6.49518 2.22356 6.32886 1.68572 6.02966V6.07691C1.68537 6.97182 1.99463 7.83929 2.56103 8.53215C3.12743 9.225 3.91609 9.70057 4.7932 9.87817C4.22486 10.0305 3.6296 10.0533 3.05125 9.94511C3.30019 10.7153 3.78335 11.3885 4.43332 11.8709C5.08328 12.3533 5.86762 12.6208 6.6769 12.636C5.30627 13.7117 3.6139 14.2955 1.87157 14.2937C1.56445 14.2937 1.25811 14.2756 0.950195 14.2409C2.72657 15.3783 4.79202 15.9821 6.90133 15.9805C14.0306 15.9805 17.9248 10.0774 17.9248 4.96733C17.9248 4.80195 17.9248 4.63658 17.9129 4.4712C18.6737 3.92378 19.3298 3.24413 19.8502 2.46465L19.8132 2.4489Z'
            fill='white'
          ></path>
        </svg>
      </div>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='mercado-match'
          width='24'
          height='24'
          focusable='false'
        >
          <path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z'></path>
        </svg>
      </div>
      <div>
        <svg
          className='h-6 w-6'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19.6998 10.3562C19.6998 5.13749 15.4686 0.90625 10.2498 0.90625C5.03104 0.90625 0.799805 5.13749 0.799805 10.3562C0.799805 15.0734 4.25535 18.9825 8.77324 19.6913V13.0881H6.37373V10.3555H8.77324V8.27489C8.77324 5.90687 10.1844 4.59805 12.343 4.59805C13.3762 4.59805 14.4582 4.78311 14.4582 4.78311V7.1086H13.2659C12.0918 7.1086 11.7256 7.83704 11.7256 8.58437V10.3562H14.3464L13.9274 13.0889H11.7256V19.6921C16.2443 18.9825 19.6998 15.0726 19.6998 10.3562Z'
            fill='white'
          ></path>
        </svg>{' '}
      </div>
      {/*       
      <div>
        <Icons icon='telegram' />
      </div>
      <div>
        <Icons icon='facebook' />
      </div> */}
    </div>
  </div>
);

// links
const footerLinks = ({ title, links }: any) => (
  <div className='space-y-3'>
    <h4 className='text-white font-bold text-base md:text-lg'>{title}</h4>
    <div className='space-y-3 text-white text-sm'>
      {links.map((link: any) => {
        return (
          <p key={link.title}>
            <div>
              <Link href={link.url} passHref>
                <a>{link.title}</a>
              </Link>
            </div>
          </p>
        );
      })}
    </div>
  </div>
);
export default Footer;
