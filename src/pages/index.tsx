import Introduction from "./home/Introduction";
import HeroSection from "./home/HeroSection";

import Highlights from "./home/Highlights";
import NewsSnippet from "./home/NewsSnippet";
import FAQSection from "./home/FAQSection";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Introduction />
      <Highlights />
      <HeroSection />
      <NewsSnippet />
      <FAQSection />
    </div>
  );
};

export default Home;