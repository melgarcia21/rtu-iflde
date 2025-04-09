// src/pages/news/index.tsx

import Card from '../../components/ui/custom/Card';

const News = () => {
  const news = [
    { title: 'FlexiLearnPro Launches New Course', content: 'Details about the new course...', link: '/news/1' },
    { title: 'New Collaboration with CLSU', content: 'Details about the collaboration...', link: '/news/2' },
    // More news can be added here
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center">News and Updates</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((newsItem, index) => (
          <Card key={index} title={newsItem.title} content={newsItem.content} link={newsItem.link} />
        ))}
      </div>
    </section>
  );
};

export default News;
