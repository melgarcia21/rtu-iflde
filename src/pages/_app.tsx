import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;