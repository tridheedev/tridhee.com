import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Circle from '../components/Circle/Circle';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Client from '../components/MainPage/Client';
import Hero from '../components/MainPage/Hero';
import OurServices from '../components/MainPage/OurServices';
import OurServiceVertical from '../components/MainPage/OurServiceVertical';
import Layout from './layout';

const Home: NextPage = () => {
  return (
    <div className='font-mont'>
      <Layout>
        <main>
          <div>
            <Hero />
          </div>
          <div>
            <Client />
          </div>
          <div>
            <OurServices />
            <OurServiceVertical />
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
