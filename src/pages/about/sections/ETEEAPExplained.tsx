import React from 'react';
import Link from 'next/link';
import ProcessDiagram from '@/components/ui/ProcessDiagram';

const ETEEAPExplained = () => {
  return (
    <section className="about-section-container">
      <h2 className="about-section-title">Understanding ETEEAP</h2>
      
      <div className="about-highlight mb-8">
        <h3 className="about-section-subtitle">What is ETEEAP?</h3>
        <p className="about-section-text">
          The Expanded Tertiary Education Equivalency and Accreditation Program (ETEEAP) 
          is an educational assessment scheme that recognizes knowledge, skills, and prior 
          learning obtained by individuals from non-formal and informal educational experiences.
        </p>
      </div>

      <ProcessDiagram />

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="about-card">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Benefits</h4>
          <ul className="about-list">
            <li className="about-list-item">Recognition of work experience and prior learning</li>
            <li className="about-list-item">Flexible learning pathways</li>
            <li className="about-list-item">Accelerated degree completion</li>
            <li className="about-list-item">Career advancement opportunities</li>
          </ul>
        </div>

        <div className="about-card">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Who Can Apply?</h4>
          <ul className="about-list">
            <li className="about-list-item">Working professionals with relevant experience</li>
            <li className="about-list-item">Individuals with non-formal training</li>
            <li className="about-list-item">Technical-vocational graduates</li>
            <li className="about-list-item">Industry practitioners</li>
          </ul>
        </div>
      </div>

        <Link href="/contact" passHref legacyBehavior>
          <a className="button button-primary">Get Started with ETEEAP</a>
        </Link>
    </section>
  );
};

export default ETEEAPExplained;