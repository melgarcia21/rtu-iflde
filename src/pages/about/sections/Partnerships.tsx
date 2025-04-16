import React from 'react';
import Image from 'next/image';

const Partnerships = () => {
  const partners = [
    {
      name: 'CHED',
      logo: '/images/school-logo/ched-logo.png',
      description: 'Commission on Higher Education'
    },
    {
      name: 'PSU',
      logo: '/images/school-logo/psu-logo.png',
      description: 'Pangasinan State University'
    },
    {
      name: 'DMMMSU',
      logo: '/images/school-logo/dmmmsu-logo.png',
      description: 'Don Mariano Marcos Memorial State University'
    },
    {
      name: 'CLSU',
      logo: '/images/school-logo/clsu-logo.png',
      description: 'Central Luzon State University'
    },
    {
      name: 'MMSU',
      logo: '/images/school-logo/mmsu-logo.png',
      description: 'Mariano Marcos State University'
    }
  ];

  const benefits = [
    {
      title: 'Knowledge Sharing',
      image: '/images/placeholder.png',
      description: 'Knowledge and resource sharing between institutions'
    },
    {
      title: 'Joint Programs',
      image: '/images/placeholder.png',
      description: 'Development of joint academic programs'
    },
    {
      title: 'Research',
      image: '/images/placeholder.png',
      description: 'Collaborative research initiatives'
    },
    {
      title: 'Exchange Programs',
      image: '/images/placeholder.png',
      description: 'Student and faculty exchange opportunities'
    },
    {
      title: 'Curriculum',
      image: '/images/placeholder.png',
      description: 'Industry-aligned curriculum development'
    }
  ];

  return (
    <div className="partnerships-section">
      <h2 className="partnerships-title">Our Partners</h2>
      
      <p className="partnerships-description">
        RTU-IFLDE collaborates with leading institutions and organizations to deliver high-quality flexible learning programs and ensure continuous improvement of our educational offerings.
      </p>

      <div className="partners-section">
        <h3 className="partners-title">Featured Partners</h3>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-card">
              <div className="partner-logo">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="partner-logo-image"
                />
              </div>
              <p className="partner-name">{partner.name}</p>
              <p className="partner-description">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="benefits-section">
        <h3 className="benefits-title">Partnership Benefits</h3>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="benefit-card">
              <div className="benefit-image-container">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="benefit-image"
                />
              </div>
              <h4 className="benefit-title">{benefit.title}</h4>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>                                                                           
    </div>
  );
};

export default Partnerships;