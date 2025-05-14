import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout : React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Banner />
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;