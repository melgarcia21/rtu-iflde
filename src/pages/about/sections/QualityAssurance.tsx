import React from 'react';

const QualityAssurance = () => {
  return (
    <div className="about-section-container">
      <h2 className="about-section-title">Our Commitment to Quality</h2>
      
      <p className="about-section-text">
        At RTU-IFLDE, we maintain rigorous quality assurance processes aligned with CHED standards to ensure excellence in all our educational offerings.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3 className="about-section-header">Internal QA Processes</h3>
          <ul className="about-list">
            <li className="about-list-item">Regular program review and assessment</li>
            <li className="about-list-item">Faculty development and training</li>
            <li className="about-list-item">Student feedback integration</li>
            <li className="about-list-item">Learning outcomes monitoring</li>
          </ul>
        </div>

        <div className="about-card">
          <h3 className="about-section-header">External QA Standards</h3>
          <ul className="about-list">
            <li className="about-list-item">CHED compliance and recognition</li>
            <li className="about-list-item">Industry partner validation</li>
            <li className="about-list-item">Accreditation requirements</li>
            <li className="about-list-item">External review processes</li>
          </ul>
        </div>

        <div className="about-card">
          <h3 className="about-section-header">Assessment Methods</h3>
          <ul className="about-list">
            <li className="about-list-item">Performance-based evaluation</li>
            <li className="about-list-item">Competency verification</li>
            <li className="about-list-item">Industry-standard assessment</li>
            <li className="about-list-item">Digital credential validation</li>
          </ul>
        </div>
      </div>

      <div className="about-highlight">
        <h3 className="about-section-header">Key Quality Measures</h3>
        <div className="about-grid">
          <div>
            <h4 className="about-section-header">Program Standards</h4>
            <p className="about-section-text">
              Alignment with Philippine Qualifications Framework (PQF) and CHED guidelines
            </p>
          </div>
          <div>
            <h4 className="about-section-header">Learning Support</h4>
            <p className="about-section-text">
              Comprehensive academic and technical support systems for all students
            </p>
          </div>
          <div>
            <h4 className="about-section-header">Continuous Improvement</h4>
            <p className="about-section-text">
              Regular program updates based on stakeholder feedback and industry needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;