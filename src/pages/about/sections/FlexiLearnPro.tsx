import React from 'react';

const FlexiLearnPro = () => {
  return (
    <div className="about-section-container">
      <h2 className="about-section-title">The FlexiLearnPro Initiative</h2>
      
      <p className="about-section-text">
        FlexiLearnPro: Navigating Digital Learning Institutions is our comprehensive project aimed at developing robust frameworks for flexible learning. Through extensive research and benchmarking, we ensure our programs meet the highest standards of quality and effectiveness.
      </p>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-date">Phase 1: Initial Benchmarking</div>
          <div className="timeline-content">
            Conducted extensive research and visits to Pangasinan State University (PSU) and Don Mariano Marcos Memorial State University (DMMMSU), studying their successful implementation of flexible learning programs.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-date">Phase 2: Extended Research</div>
          <div className="timeline-content">
            Expanded our study to include Central Luzon State University (CLSU) and Mariano Marcos State University (MMSU), gathering insights on program design and delivery methods.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-date">Phase 3: Framework Development</div>
          <div className="timeline-content">
            Synthesized findings to develop comprehensive frameworks for ETEEAP and future micro-credential offerings, ensuring alignment with CHED standards and industry needs.
          </div>
        </div>
      </div>

      <div className="about-highlight">
        <h3 className="about-section-subtitle">Key Outcomes</h3>
        <ul className="about-list">
          <li className="about-list-item">
            Development of research-based flexible learning frameworks
          </li>
          <li className="about-list-item">
            Adoption of best practices from leading institutions
          </li>
          <li className="about-list-item">
            Enhanced program design methodologies
          </li>
          <li className="about-list-item">
            Strengthened quality assurance processes
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlexiLearnPro;