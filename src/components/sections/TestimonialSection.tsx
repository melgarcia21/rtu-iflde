import React from 'react';
import testimonials from '../../data/testimonials.json';

type Testimonial = {
  text: string;
  author: string;
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-title">What Our Students Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">&quot;{testimonial.text}&quot;</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;