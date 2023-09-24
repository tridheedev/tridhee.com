import { faArrowRight, faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ServicesVertical from '../ServicesCard/ServicesVertical';

type Props = {};

const OurServiceVertical = (props: Props) => {
  return (
    <div className='flex flex-col gap-y-8 max-w-5xl items-center w-full mx-auto py-20'>
      <ServicesVertical
        title='Software Development '
        desc='Our software development expertise goes beyond the web. We create powerful, custom software solutions tailored to your business needs.'
        link='social-media-Ad'
      />
      <ServicesVertical
        title='App Development'
        desc='In the mobile-first era, we craft exceptional apps that captivate audiences on iOS and Android platforms.'
        link='social-media-Ad'
      />
      <ServicesVertical
        title='Performance Marketing'
        desc='Drive real results with our performance marketing strategies. We leverage data-driven insights, PPC advertising, SEO optimization, and conversion rate optimization to boost your online presence.'
        link='social-media-Ad'
      />
      <ServicesVertical
        title='Social Media Management'
        desc='Engage, inspire, and build your brand on social media. Our social media management services create compelling content, manage your online reputation.'
        link='social-media-Ad'
      />
      <ServicesVertical
        title='Ad campaign on social Media'
        desc="Take your brand's visibility to the next level with targeted ad campaigns on social media. We design and execute data-driven advertising strategies to reach your desired audience."
        link='social-media-Ad'
      />
    </div>
  );
};

export default OurServiceVertical;
