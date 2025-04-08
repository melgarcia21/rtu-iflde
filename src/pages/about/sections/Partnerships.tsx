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
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
      
      <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16">
        RTU-IFLDE collaborates with leading institutions and organizations to deliver high-quality flexible learning programs and ensure continuous improvement of our educational offerings.
      </p>

      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-center mb-12">Featured Partners</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center max-w-6xl mx-auto">
          {partners.map((partner) => (
            <div key={partner.name} className="text-center">
              <div className="relative w-64 h-64">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="mt-4 text-xl font-semibold">{partner.name}</p>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-12">Partnership Benefits</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="benefit-card">
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h4 className="font-semibold mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partnerships;