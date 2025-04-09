import CourseCard from '../../components/ui/custom/CourseCard';
import programs from '../../data/programs.json';

const Programs = () => {
  return (
    <section className="programs-list">
      <h1 className="programs-list-title">Micro credential courses</h1>
      <div className="programs-list-grid">
        {programs.map((program, index) => (
          <CourseCard key={index} program={program} />
        ))}
      </div>

    </section>
  );
};

export default Programs;