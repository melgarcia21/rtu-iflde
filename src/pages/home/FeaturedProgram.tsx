import React from 'react';
import Button from '@/components/ui/custom/Button_';
import Link from 'next/link';

const FeaturedProgram = () => {
  return (
    <section className="featured-program-section">
      <div className="featured-program-container">
        <div className="featured-program-content">
          <h2 className="featured-program-title">Advance Your Career with ETEEAP</h2>
          <p className="featured-program-description">
            The Expanded Tertiary Education Equivalency and Accreditation Program (ETEEAP) is your pathway to earning a degree by building on your professional experience. Our program recognizes your expertise and helps you achieve formal academic qualifications aligned with industry standards.
          </p>
          <Link href="/programs/eteeap">
            <Button label="Learn More about ETEEAP" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProgram;