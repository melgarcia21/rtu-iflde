import Card from '../components/ui/Card';
import programs from '../data/programs.json';

type Program = {
  title: string;
  content: string;
  link: string;
};

const Programs = () => {
  return (
    <section className="programs-section">
      <h1 className="programs-title">Our Programs</h1>
      <div className="programs-grid">
        {programs.map((program: Program, index: number) => (
          <Card key={index} title={program.title} content={program.content} link={`/programs/${program.link.split('/').pop()}`} />
        ))}
      </div>
    </section>
  );
};

export default Programs;