/* src\pages\about\sections\Partners.tsx */

import Image from 'next/image';

export default function Partners() {
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

  return (
    <div className="py-4 mb-36 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-purple-900 mb-4">
          Our Partners
        </h2>
        <h3 className="text-center text-lg font-medium text-purple-900 mb-8">
          RTU-IFLDE collaborates with leading institutions and organizations to deliver high-quality <br /> 
          flexible learning programs and ensure continuous improvement of our educational offerings.
        </h3>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {partners.map((partner, index) => (
            <Image
              key={partner.name}
              alt={partner.description}
              src={partner.logo}
              width={100}
              height={100}
              className={`col-span-2 h-32 w-32 object-contain ${
                index === 3 ? 'sm:col-start-2' : ''
              } lg:col-span-1`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}