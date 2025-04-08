import React from 'react';

const FlexiLearnPro = () => {
  return (
    <div className="about-section-container bg-gradient-to-br from-white via-purple-50 to-white">
      <h2 className="about-section-title">The FlexiLearnPro Initiative</h2>
      
      <p className="about-section-text">
        FlexiLearnPro: Navigating Digital Learning Institutions is our comprehensive project aimed at developing robust frameworks for flexible learning. Through extensive research and benchmarking, we ensure our programs meet the highest standards of quality and effectiveness.
      </p>

      <div className="timeline mt-12">
        <div className="timeline-item relative pl-8">
          <div className="timeline-dot-wrapper">
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-content">
            <h3 className="timeline-date">Phase 1: Initial Benchmarking</h3>
            <p className="text-gray-600">
              Conducted extensive research and visits to Pangasinan State University (PSU) and Don Mariano Marcos Memorial State University (DMMMSU), studying their successful implementation of flexible learning programs. 
            </p>
          </div>
        </div>

        <div className="timeline-item relative pl-8">
          <div className="timeline-dot-wrapper">
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-content">
            <h3 className="timeline-date">Phase 2: Extended Research</h3>
            <p className="text-gray-600">
              Expanded our study to include Central Luzon State University (CLSU) and Mariano Marcos State University (MMSU), gathering insights on program design and delivery methods.
            </p>
          </div>
        </div>

        <div className="timeline-item relative pl-8">
          <div className="timeline-dot-wrapper">
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-content">
            <h3 className="timeline-date">Phase 3: Framework Development</h3>
            <p className="text-gray-600">
              Synthesized findings to develop comprehensive frameworks for ETEEAP and future micro-credential offerings, ensuring alignment with CHED standards and industry needs.
            </p>
          </div>
        </div>
      </div>

      <div className="about-highlight mt-12">
        <h3 className="about-section-subtitle">Key Outcomes</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="about-card transform hover:scale-105 transition-transform">
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Research & Development</h4>
            <ul className="about-list">
              <li className="about-list-item">Development of research-based flexible learning frameworks</li>
              <li className="about-list-item">Adoption of best practices from leading institutions</li>
            </ul>
          </div>
          <div className="about-card transform hover:scale-105 transition-transform">
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Quality & Innovation</h4>
            <ul className="about-list">
              <li className="about-list-item">Enhanced program design methodologies</li>
              <li className="about-list-item">Strengthened quality assurance processes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexiLearnPro;