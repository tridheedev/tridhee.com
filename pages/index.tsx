import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Circle from '../components/Circle/Circle';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Client from '../components/MainPage/Client';
import Hero from '../components/MainPage/Hero';
import ProductCard from '../components/Products/ProductCard';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Software Product Agency </title>
        <meta name='description' content='Software development agency' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          <Header />
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <Client />
        </div>
        <div className='py-10'>
          <div className='text-center py-10'>
            <h5 className='app-text-main font-bold text-lg'>Our Services</h5>
          </div>
          <div className='container mx-auto flex justify-center space-x-10'>
            <ProductCard title='Development' />
            <ProductCard title='UI/UX Design' />
            <ProductCard title='Consulting' />
          </div>
        </div>
        {/* <div className='container mx-auto'>
          <Circle />
        </div> */}
      </main>

      <footer className='app-bg-main'>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
