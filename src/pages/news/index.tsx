
import Card from '../../components/ui/custom/Card';
import { newsPosts } from '../../data/news/newsPost';

const News = () => {
  return (
    <section className="py-6 md:py-12 px-4 md:px-6 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-purple-950 mb-6">News and Updates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {newsPosts.map((post) => (
          <Card 
            key={post.id}
            title={post.title}
            content={post.content}
            link={post.link}
            embedUrl={post.embedUrl}
            fbCaption={post.fbCaption}
          />
        ))}
      </div>
    </section>
  );
};

export default News;