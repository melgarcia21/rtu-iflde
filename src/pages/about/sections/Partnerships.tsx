import React from 'react';
import Image from 'next/image';

const Partnerships = () => {
  const partners = [
    {
      name: 'CHED',
      logo: '/images/partners/ched-logo.png',
      description: 'Commission on Higher Education'
    },
    {
      name: 'PSU',
      logo: '/images/partners/psu-logo.png',
      description: 'Pangasinan State University'
    },
    {
      name: 'DMMMSU',
      logo: '/images/partners/dmmmsu-logo.png',
      description: 'Don Mariano Marcos Memorial State University'
    },
    {
      name: 'CLSU',
      logo: '/images/partners/clsu-logo.png',
      description: 'Central Luzon State University'
    },
    {
      name: 'MMSU',
      logo: '/images/partners/mmsu-logo.png',
      description: 'Mariano Marcos State University'
    }
  ];

  return (
    <div className="about-section-container">
      <h2 className="about-section-title">Our Partners</h2>
      
      <p className="about-section-text">
        RTU-IFLDE collaborates with leading institutions and organizations to deliver high-quality flexible learning programs and ensure continuous improvement of our educational offerings.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3 className="about-section-subtitle">Academic Partners</h3>
          <ul className="about-list">
            <li className="about-list-item">State Universities and Colleges</li>
            <li className="about-list-item">Private Higher Education Institutions</li>
            <li className="about-list-item">International Academic Institutions</li>
          </ul>
        </div>

        <div className="about-card">
          <h3 className="about-section-subtitle">Industry Partners</h3>
          <ul className="about-list">
            <li className="about-list-item">Technology Companies</li>
            <li className="about-list-item">Professional Organizations</li>
            <li className="about-list-item">Industry Leaders</li>
          </ul>
        </div>

        <div className="about-card">
          <h3 className="about-section-subtitle">Government Partners</h3>
          <ul className="about-list">
            <li className="about-list-item">CHED</li>
            <li className="about-list-item">DepEd</li>
            <li className="about-list-item">TESDA</li>
          </ul>
        </div>
      </div>

      <div className="about-highlight">
        <h3 className="about-section-subtitle">Featured Partners</h3>
        <div className="partner-grid">
          {partners.map((partner) => (
            <div key={partner.name} className="text-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={128}
                height={128}
                className="partner-logo"
              />
              <p className="mt-2 font-semibold">{partner.name}</p>
              <p className="text-sm text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section-container">
        <h3 className="about-section-subtitle">Partnership Benefits</h3>
        <ul className="about-list">
          <li className="about-list-item">Knowledge and resource sharing</li>
          <li className="about-list-item">Joint program development</li>
          <li className="about-list-item">Research collaboration</li>
          <li className="about-list-item">Student and faculty exchange</li>
          <li className="about-list-item">Industry-aligned curriculum development</li>
        </ul>
      </div>
    </div>
  );
};

export default Partnerships;