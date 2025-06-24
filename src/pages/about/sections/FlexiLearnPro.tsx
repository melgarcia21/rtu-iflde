/* src\pages\about\sections\FlexiLearnPro.tsx */

import React from "react";

const timelineData = [
  {
    phase: "Phase 1: Initial Benchmarking",
    description:
      "Conducted extensive research and visits to Pangasinan State University (PSU) and Don Mariano Marcos Memorial State University (DMMMSU), studying their successful implementation of flexible learning programs.",
  },
  {
    phase: "Phase 2: Extended Research",
    description:
      "Expanded our study to include Central Luzon State University (CLSU) and Mariano Marcos State University (MMSU), gathering insights on program design and delivery methods.",
  },
  {
    phase: "Phase 3: Framework Development",
    description:
      "Synthesized findings to develop comprehensive frameworks for ETEEAP and future micro-credential offerings, ensuring alignment with CHED standards and industry needs.",
  },
];

const outcomesData = [
  {
    title: "Research & Development",
    items: [
      "Development of research-based flexible learning frameworks",
      "Adoption of best practices from leading institutions",
    ],
  },
  {
    title: "Quality & Innovation",
    items: [
      "Enhanced program design methodologies",
      "Strengthened quality assurance processes",
    ],
  },
];

const FlexiLearnPro = () => {
  return (
    <section className="flexilearnpro-section">
      <div className="flexilearnpro-container">
        <h2 className="about-section-title">The FlexiLearnPro Initiative</h2>

        <p className="about-section-text">
          FlexiLearnPro: Navigating Digital Learning Institutions is our
          comprehensive project aimed at developing robust frameworks for
          flexible learning. Through extensive research and benchmarking, we
          ensure our programs meet the highest standards of quality and
          effectiveness.
        </p>

        <div className="timeline mt-12">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item relative pl-8">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-date">{item.phase}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about-highlight mt-12">
          <h3 className="about-section-header">Key Outcomes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {outcomesData.map((outcome, index) => (
              <div
                key={index}
                className="about-card transform hover:scale-105 transition-transform"
              >
                <h4 className="text-lg font-semibold text-purple-800 mb-3">
                  {outcome.title}
                </h4>
                <ul className="about-list">
                  {outcome.items.map((item, idx) => (
                    <li key={idx} className="about-list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexiLearnPro;
