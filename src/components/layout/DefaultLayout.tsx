import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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