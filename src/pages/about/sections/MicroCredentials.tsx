/* src\pages\about\sections\MicroCredentials.tsx */

import React from 'react';
import PQFTable from '@/components/ui/custom/PQFTable';
import StatsGrid from '@/components/ui/custom/StatsGrid';

const MicroCredentials = () => {
  return (
    <section className="micro-credentials-section">
      <div className="micro-credentials-container">
        <h2 className="micro-credentials-title">
          Understanding Micro-credentials
        </h2>
        
        <div className="micro-credentials-description">
          <p>Micro-credentials are smaller units of learning that provide focused knowledge, 
             skills, and competencies in specific fields. They offer flexible pathways 
             to formal qualifications while maintaining high academic standards.</p>
        </div>

        <StatsGrid />

        <div className="pqf-section">
          <h3 className="pqf-title">Philippine Qualifications Framework Levels</h3>
          <PQFTable />
        </div>

        <div className="micro-credentials-grid">
          <div className="micro-credentials-card">
            <div className="micro-credentials-icon">🎓</div>
            <h4 className="micro-credentials-card-title">Stackable Credits</h4>
            <p className="micro-credentials-card-description">Earn credits that can contribute towards formal degree programs, 
              providing flexible pathways to higher education.</p>
          </div>

          <div className="micro-credentials-card">
            <div className="micro-credentials-icon">⚡</div>
            <h4 className="micro-credentials-card-title">Flexible Learning</h4>
            <p className="micro-credentials-card-description">Choose from various delivery modes including online, 
              blended, and face-to-face options to suit your schedule.</p>
          </div>

          <div className="micro-credentials-card">
            <div className="micro-credentials-icon">🎯</div>
            <h4 className="micro-credentials-card-title">Industry-Aligned</h4>
            <p className="micro-credentials-card-description">Programs designed in collaboration with industry partners 
              to ensure relevant and practical skill development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroCredentials;