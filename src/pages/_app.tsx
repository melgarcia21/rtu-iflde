import { AppProps } from 'next/app';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}

export default App;
