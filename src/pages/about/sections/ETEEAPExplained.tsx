import React from 'react';

import ProcessDiagram from '@/components/ui/custom/ProcessDiagram';

const ETEEAPExplained = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
          Understanding ETEEAP
        </h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">What is ETEEAP?</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            The Expanded Tertiary Education Equivalency and Accreditation Program (ETEEAP) 
            is an educational assessment scheme that recognizes knowledge, skills, and prior 
            learning obtained by individuals from non-formal and informal educational experiences.
          </p>
        </div>

        <ProcessDiagram />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-semibold text-purple-800 mb-4">Benefits</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-900 rounded-full mr-2"></span>
                Recognition of work experience and prior learning
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-900 rounded-full mr-2"></span>
                Flexible learning pathways
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-900 rounded-full mr-2"></span>
                Accelerated degree completion
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-900 rounded-full mr-2"></span>
                Career advancement opportunities
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-semibold text-purple-800 mb-4">Who Can Apply?</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-900 rounded-full mr-2"></span>
                Working professionals with relevant experience
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-900 rounded-full mr-2"></span>
                Individuals with non-formal training
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-900 rounded-full mr-2"></span>
                Technical-vocational graduates
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-900 rounded-full mr-2"></span>
                Industry practitioners
              </li>
            </ul>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ETEEAPExplained;