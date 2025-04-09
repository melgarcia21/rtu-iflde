import Button from '../../components/ui/custom/Button_';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">Welcome to FlexiLearnPro</h1>
        <p className="hero-subtitle">
          Empowering flexible learning for professionals and students.
        </p>
        <Link href="/programs">
          <Button label="Explore Programs" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;