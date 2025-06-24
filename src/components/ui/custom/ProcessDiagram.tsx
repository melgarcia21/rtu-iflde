/* src\components\ui\custom\ProcessDiagram.tsx */

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
    <div className="process-diagram relative py-12">
      {/* Connecting line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 hidden md:block transform -translate-y-1/2" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative group">
            {/* Step number badge */}
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold z-10">
              {index + 1}
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
              {/* Icon with gradient background */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-50 to-white flex items-center justify-center text-3xl shadow-inner">
                {step.icon}
              </div>
              
              <h4 className="text-xl font-semibold text-purple-800 mb-3 text-center">
                {step.title}
              </h4>
              
              <p className="text-gray-600 text-center text-sm">
                {step.description}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessDiagram;