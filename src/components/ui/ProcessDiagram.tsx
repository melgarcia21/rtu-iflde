import React from 'react';

const ProcessDiagram = () => {
  const steps = [
    {
      title: 'Initial Assessment',
      description: 'Evaluation of professional experience and prior learning',
      icon: '📋'
    },
    {
      title: 'Gap Analysis',
      description: 'Identification of required additional coursework',
      icon: '🔍'
    },
    {
      title: 'Learning Activities',
      description: 'Completion of necessary courses and requirements',
      icon: '📚'
    },
    {
      title: 'Final Assessment',
      description: 'Comprehensive evaluation of competencies',
      icon: '🎯'
    }
  ];

  return (
    <div className="process-diagram">
      <div className="process-steps">
        {steps.map((step, index) => (
          <div key={index} className="process-step">
            <div className="process-icon">{step.icon}</div>
            <h4 className="process-step-title">{step.title}</h4>
            <p className="process-step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessDiagram;