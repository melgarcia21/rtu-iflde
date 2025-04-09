import React from 'react';

const stats = [
  {
    value: "30%",
    label: "Maximum Credits",
    description: "Of total degree units can come from micro-credentials"
  },
  {
    value: "17-18",
    label: "Hours",
    description: "Per credit unit of instruction"
  },
  {
    value: "4",
    label: "PQF Levels",
    description: "Covered by our micro-credential programs"
  }
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="relative p-6 bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
        >
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
            <p className="text-gray-600">{stat.description}</p>
          </div>

          {/* Decorative circle */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500" />
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;