import React from 'react';

interface Stat {
  value: string;
  label: string;
  description: string;
}

const StatsGrid = () => {
  const stats: Stat[] = [
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

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
          <p className="stat-description">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;