import HeroSection from "./home/HeroSection";
import Introduction from "./home/Introduction";
import FeaturedProgram from "./home/FeaturedProgram";
import HowItWorks from "./home/HowItWorks";
import NewsSnippet from "./home/NewsSnippet";
import FAQ from "./home/FAQ";


const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />



      <Introduction />
      <HowItWorks />
      <FeaturedProgram />
      <NewsSnippet />
      <FAQ />
    </div>
  );
};

export default Home;