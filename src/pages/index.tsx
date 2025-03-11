// src/pages/index.tsx

import HeroSection from '../components/sections/HeroSection';
import TestimonialSection from '../components/sections/TestimonialSection';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Testimonial Section */}
      <TestimonialSection />
    </>
  );
};

export default Home;
