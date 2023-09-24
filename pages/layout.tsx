import { useState } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Head>
        <title>Software Product Agency </title>
        <meta name='description' content='Software development agency' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Header />
      </div>
      <div>{children}</div>
      <footer className='app-bg-main'>
        <Footer />
      </footer>
    </>
  );
}
