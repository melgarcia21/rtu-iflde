import React, { useEffect, useState } from 'react';
import aboutContent from '../data/about.json';

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
    </section>
  );
};

export default About;
