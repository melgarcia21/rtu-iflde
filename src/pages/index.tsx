import HeroSection from "./home/HeroSection";
import Introduction from "./home/Introduction";
import FeaturedProgram from "./home/FeaturedProgram";
import HowItWorks from "./home/HowItWorks";
import NewsSnippet from "./home/NewsSnippet";
import FAQSection from "./home/FAQSection";

import HowItWorks_ from "./home/HowItWorks_";


const Home = () => {
  return (
    <div className="flex flex-col gap-10">


      <Introduction />
      <HowItWorks_ />

      <FeaturedProgram />
      <NewsSnippet />
      <FAQSection />
    </div>
  );
};

export default Home;