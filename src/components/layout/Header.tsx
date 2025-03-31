import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="header-section">

      {/* Content Wrapper */}
      <div className="header-content">

        {/* Top Left Section: Logo and University Name */}
        <div className="header-logo-section">
          <Image
            src="/images/header/rtu-logo.png"
            alt="RTU Logo"
            className="header-logo"
            width={50}
            height={50}
          />
          {/* Vertical Separator Line */}
          <div className="header-separator"></div>
          {/* University Text */}
          <div className="header-university-text">
            <p className="header-university-name">
              RIZAL TECHNOLOGICAL UNIVERSITY
            </p>
            <p className="header-university-location">
              CITIES OF MANDALUYONG AND PASIG
            </p>
          </div>
        </div>

        {/* Center Section: Icon, Title, Subtitle */}
        <div className="header-center-section">
          <Image
            src="/images/header/iflde-logo.png"
            alt="Flexible Learning Icon"
            className="header-icon"
            width={100}
            height={100}
          />
          <div className="flex flex-col">
            <h1 className="header-title">
              Institute of Flexible Learning
              <br />
              and Digital. Education
            </h1>
            {/* Horizontal Separator Line */}
            <div className="header-horizontal-line"></div>
            <p className="header-subtitle">
              Forging Excellence in Borderless and Innovative Education
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;