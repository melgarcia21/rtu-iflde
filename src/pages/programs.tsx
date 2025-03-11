// src/pages/programs.tsx

import Card from '../components/ui/Card';

const Programs = () => {
  const programs = [
    { title: 'Professional Development', content: 'Courses for career growth.', link: '/programs/1' },
    { title: 'Remote Learning Certification', content: 'Courses for distance learners.', link: '/programs/2' },
    // More programs can be added here
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Our Programs</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <Card key={index} title={program.title} content={program.content} link={program.link} />
        ))}
      </div>
    </section>
  );
};

export default Programs;
