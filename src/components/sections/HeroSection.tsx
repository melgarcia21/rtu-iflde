import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">Welcome to FlexiLearnPro</h1>
        <p className="hero-subtitle">Empowering flexible learning for professionals and students.</p>
        <Button label="Explore Programs" onClick={() => window.location.href = '/programs'} />
      </div>
    </section>
  );
};

export default HeroSection;