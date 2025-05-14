import React from 'react';
import Head from 'next/head';
import AboutInstitute from './sections/AboutInstitute';
import ETEEAPExplained from './sections/ETEEAPExplained';
import FlexiLearnPro from './sections/FlexiLearnPro';
import MicroCredentials from './sections/MicroCredentials';
import QualityAssurance from './sections/QualityAssurance';
import Partners from './sections/Partners';

const About = () => {
  return (
    <>
      <Head>
        <title>About RTU-IFLDE</title>
        <meta 
          name="Institute of Flexible Learning and Digital Education" 
          content="Learn about RTU's Institute of Flexible Learning and Digital Education, our mission, programs, and partnerships." 
        />
      </Head>
      <div>
        <AboutInstitute />
        <FlexiLearnPro />
        <ETEEAPExplained />
        <MicroCredentials />
        <QualityAssurance />
        <Partners />
      </div>
    </>
  );
};

export default About;