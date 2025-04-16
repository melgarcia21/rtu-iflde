import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Assess Needs",
      description: "We identify your educational requirements and career goals"
    },
    {
      number: 2,
      title: "Design Programs",
      description: "Programs are crafted using research-backed methods and benchmarking"
    },
    {
      number: 3,
      title: "Deliver Flexibly",
      description: "Learn through various modalities that fit your schedule"
    },
    {
      number: 4,
      title: "Ensure Quality",
      description: "Continuous monitoring and improvement of learning outcomes"
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <h2 className="how-it-works-title">How FlexiLearnPro Works</h2>
        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.number} className="step-item">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;