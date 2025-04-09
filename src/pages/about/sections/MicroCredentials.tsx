import React from 'react';
import PQFTable from '@/components/ui/custom/PQFTable';
import StatsGrid from '@/components/ui/custom/StatsGrid';

const MicroCredentials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Understanding Micro-credentials
        </h2>
        
        <div className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          <p>Micro-credentials are smaller units of learning that provide focused knowledge, 
             skills, and competencies in specific fields. They offer flexible pathways 
             to formal qualifications while maintaining high academic standards.</p>
        </div>

        <StatsGrid />

        <div className="bg-white rounded-2xl shadow-xl p-8 my-12">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">Philippine Qualifications Framework Levels</h3>
          <PQFTable />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">🎓</div>
            <h4 className="text-xl font-semibold text-blue-800 mb-3">Stackable Credits</h4>
            <p className="text-gray-600">Earn credits that can contribute towards formal degree programs, 
              providing flexible pathways to higher education.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">⚡</div>
            <h4 className="text-xl font-semibold text-blue-800 mb-3">Flexible Learning</h4>
            <p className="text-gray-600">Choose from various delivery modes including online, 
              blended, and face-to-face options to suit your schedule.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="text-xl font-semibold text-blue-800 mb-3">Industry-Aligned</h4>
            <p className="text-gray-600">Programs designed in collaboration with industry partners 
              to ensure relevant and practical skill development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroCredentials;