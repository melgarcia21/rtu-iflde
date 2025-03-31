import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout : React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;