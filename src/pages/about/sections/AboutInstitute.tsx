import React from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import clsx from 'clsx';

const AboutInstitute = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useIntersectionObserver({
    threshold: 0.2
  });
  
  const { elementRef: gridRef, isVisible: gridVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  const { elementRef: ctaRef, isVisible: ctaVisible } = useIntersectionObserver({
    threshold: 0.5
  });

  return (
    <div 
      ref={sectionRef as React.RefObject<HTMLDivElement>} 
      className={clsx(
        'about-section-container fade-in-view',
        sectionVisible && 'is-visible'
      )}
    >
      <h2 className="about-section-title">About IFLDE</h2>
      
      <div 
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className={clsx(
          'about-grid fade-in-view',
          gridVisible && 'is-visible'
        )}
      >
        <div className="about-card">
          <h3 className="about-section-subtitle">Mission</h3>
          <p className="about-section-text">
            To provide accessible, flexible, and quality digital education through innovative learning solutions that empower lifelong learners.
          </p>
        </div>

        <div className="about-card">
          <h3 className="about-section-subtitle">Vision</h3>
          <p className="about-section-text">
            To be a leading institution in flexible learning and digital education, recognized for excellence in borderless and innovative education.
          </p>
        </div>

        <div className="about-card">
          <h3 className="about-section-subtitle">Mandate</h3>
          <p className="about-section-text">
            To develop and implement high-quality flexible learning programs aligned with national educational standards and industry needs.
          </p>
        </div>
      </div>

      <div className="about-highlight">
        <h3 className="about-section-subtitle">Our Role at RTU</h3>
        <p className="about-section-text">
          As RTU&apos;s dedicated institute for flexible learning, we spearhead the development and implementation of innovative digital education solutions. Our focus is on making quality education accessible to all through modern learning approaches and technologies.
        </p>
      </div>

      <div 
        ref={ctaRef as React.RefObject<HTMLDivElement>}
        className={clsx(
          'about-cta fade-in-view',
          ctaVisible && 'is-visible'
        )}
      >
        <Link href="/programs">
          <Button label="Explore Our Programs" />
        </Link>
      </div>
    </div>
  );
};

export default AboutInstitute;