/* src/components/layout/Header.tsx */

import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div
      id="header-section"
      className="relative overflow-hidden bg-cover bg-center text-white font-sans"
      style={{ backgroundImage: "url('/images/header/rtu-iflde-cover.png')" }}
    >
      {/* Content Wrapper */}
      <div id="header-content" className="relative z-10 h-full flex flex-col p-2 md:p-6">
        {/* Top Left Section: Logo and University Name */}
        <div id="header-logo-section" className="flex items-center mb-auto">
          <Image
            src="/images/header/rtu-logo.png"
            alt="RTU Logo"
            className="h-12 w-12 md:h-16 md:w-16 mr-3 md:mr-4 flex-shrink-0"
            width={100}
            height={100}
          />

          <div id="header-separator" className="h-10 w-px md:h-12 mr-3 md:mr-4 bg-white"></div>

          <div id="header-university-text" className="flex flex-col justify-center">
            <p id="header-university-name" className="text-sm md:text-base lg:text-lg font-bold leading-tight">
              RIZAL TECHNOLOGICAL UNIVERSITY
            </p>
            <p id="header-university-location" className="text-xs md:text-sm">
              CITIES OF MANDALUYONG AND PASIG
            </p>
          </div>
        </div>

        {/* Center Section: Icon, Title, Subtitle */}
        <div id="header-center-section" className="flex items-center my-2 md:my-4 lg:my-6 ml-0 md:ml-12 lg:ml-20">
          <Image
            src="/images/header/iflde-logo.png"
            alt="Flexible Learning Icon"
            className="h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 mr-4 md:mr-8 flex-shrink-0"
            width={100}
            height={100}
          />
          <div className="flex flex-col">
            <h1 id="header-title" className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Institute of Flexible Learning
              <br />
              and Digital Education
            </h1>

            <div id="header-horizontal-line" className="w-full md:w-3/4 h-px my-2 md:my-3 bg-white"></div>
            <p id="header-subtitle" className="text-sm md:text-base lg:text-lg">
              Forging Excellence in Borderless and Innovative Education
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;