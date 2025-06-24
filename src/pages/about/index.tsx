/* src\pages\about\index.tsx */

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import AboutInstitute from './sections/AboutInstitute';
import ETEEAPExplained from './sections/ETEEAPExplained';
import FlexiLearnPro from './sections/FlexiLearnPro';
import MicroCredentials from './sections/MicroCredentials';
import QualityAssurance from './sections/QualityAssurance';
import Partners from './sections/Partners';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const About = () => {
  // State to control button visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Effect to handle scroll event and button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      // Check initial position
      const shouldBeVisible = window.scrollY > 300;
      setIsVisible(shouldBeVisible);
    };

    // Call once to check initial position
    toggleVisibility();
    
    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {/* Head section for meta data */}
      <Head>
        <title>About RTU-IFLDE</title>
        <meta 
          name="Institute of Flexible Learning and Digital Education" 
          content="Learn about RTU's Institute of Flexible Learning and Digital Education, our mission, programs, and partnerships." 
        />
      </Head>

      {/* Main content container */}
      <div className="relative">
        {/* Page sections */}
        <AboutInstitute />
        <FlexiLearnPro />
        <ETEEAPExplained />
        <MicroCredentials />
        <QualityAssurance />
        <Partners />

        {/* Back to top button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-purple-950/80 hover:bg-purple-600 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 z-50"
            aria-label="Back to top"
          >
            <ArrowUpIcon className="h-6 w-6" />
          </button>
        )}
      </div>
    </>
  );
};

export default About;