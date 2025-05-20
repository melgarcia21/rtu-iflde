import { useRouter } from 'next/router';
import { newsPosts, NewsPost } from '../../data/news/newsPost';
import { useState } from 'react';

const NewsArticle = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  
  const article: NewsPost | undefined = newsPosts.find(post => post.id === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Article not found</h2>
          <p className="mt-2 text-gray-600">The article you&apos;re looking for doesn&apos;t exist.</p>
          <button 
            onClick={() => router.push('/news')}
            className="mt-4 px-4 py-2 bg-[#400040] text-white rounded-md hover:bg-[#500050] transition-colors"
          >
            Back to News
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{article.title}</h1>
      <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        {isLoading && (
          <div className="flex items-center justify-center min-h-[400px] bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#400040]"></div>
          </div>
        )}
        <iframe
          src={article.embedUrl}
          className="w-full min-h-[800px] md:min-h-[1000px] border-0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          style={{ WebkitOverflowScrolling: 'touch' }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="mt-8 prose max-w-none">
        <p className="text-lg text-gray-700">{article.fullContent}</p>
      </div>
    </section>
  );
};

export default NewsArticle;