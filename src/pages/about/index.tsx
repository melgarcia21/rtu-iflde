import React, { useEffect, useState } from 'react';

import AboutInstitute from './sections/AboutInstitute';
import FlexiLearnPro from './sections/FlexiLearnPro';
import ETEEAPExplained from './sections/ETEEAPExplained';
import MicroCredentials from './sections/MicroCredentials';
import QualityAssurance from './sections/QualityAssurance';
import Partnerships from './sections/Partnerships';

import aboutContent from '../../data/about.json';

const About = () => {
  const [content, setContent] = useState({
    title: '',
    description: '',
    details: ''
  });

  useEffect(() => {
    setContent(aboutContent);
  }, []);

  return (
    <section className="about-section">
      <h1 className="about-title">{content.title}</h1>
      <p className="about-description">{content.description}</p>
      <p className="about-details">{content.details}</p>

      <AboutInstitute />
      <FlexiLearnPro />
      <ETEEAPExplained />
      <MicroCredentials />
      <QualityAssurance />
      <Partnerships />

    </section>
    
  );
};

export default About;