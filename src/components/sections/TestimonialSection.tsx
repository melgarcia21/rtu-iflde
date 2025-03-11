const testimonials = [
  {
    text: "FlexiLearnPro has transformed my career. The flexible learning path was perfect for my schedule!",
    author: "John Doe, Graduate"
  },
  {
    text: "The courses are well-structured and the instructors are very knowledgeable.",
    author: "Jane Smith, Student"
  },
  {
    text: "I love the community and the support I get from other learners.",
    author: "Emily Johnson, Learner"
  },
  {
    text: "The platform is user-friendly and the content is top-notch.",
    author: "Michael Brown, Professional"
  },
  {
    text: "I think for me, the best part is Brian as CEO MVP",
    author: "Brian Banaynal"
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-title">What Our Students Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
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