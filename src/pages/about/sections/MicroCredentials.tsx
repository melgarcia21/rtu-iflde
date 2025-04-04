import React from 'react';
import PQFTable from '@/components/ui/PQFTable';
import Link from 'next/link';

const MicroCredentials = () => {
  return (
    <section className="about-section-container">
      <h2 className="about-section-title">Micro-Credentials</h2>

      <div className="about-highlight">
        <h3 className="about-section-subtitle">What are Micro-Credentials?</h3>
        <p className="about-section-text">
          Micro-credentials are mini-qualifications that demonstrate skills, knowledge, and experience 
          in a specific field or capability. They offer a more flexible, targeted approach to education 
          and professional development.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="about-card transform hover:scale-105">
          <h4 className="text-xl font-semibold text-blue-600 mb-4">Flexible Learning</h4>
          <p className="text-gray-600 mb-4">Study at your own pace and choose credentials that match your career goals.</p>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="about-card transform hover:scale-105">
          <h4 className="text-xl font-semibold text-blue-600 mb-4">Industry Recognition</h4>
          <p className="text-gray-600 mb-4">Earn credentials that are valued and recognized by employers.</p>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="about-card transform hover:scale-105">
          <h4 className="text-xl font-semibold text-blue-600 mb-4">Stackable Credits</h4>
          <p className="text-gray-600 mb-4">Build towards a full qualification by combining multiple micro-credentials.</p>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>
      </div>

      <div className="my-16">
        <h3 className="about-section-subtitle text-center mb-8">Philippine Qualifications Framework Levels</h3>
        <PQFTable />
      </div>

      <div className="about-highlight mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Getting Started</h3>
        <p className="text-gray-600 mb-6">
          Ready to begin your micro-credentials journey? Browse our available programs and choose 
          the credentials that align with your professional goals. Each credential is designed to 
          provide specific, measurable skills that employers value.
        </p>
          <Link href="/programs" passHref legacyBehavior>
            <a className="button button-primary">Explore Programs</a>
          </Link>
        </div>
    </section>
  );
};

export default MicroCredentials;