import React from 'react';
import Layout from './layout';
import AdService from '../components/Pages/AdServices/AdService';

type Props = {};

const SocialMediaAd = (props: Props) => {
  return (
    <div>
      <Layout>
        <div className='py-5'>
          <AdService />
        </div>
      </Layout>
    </div>
  );
};

export default SocialMediaAd;
