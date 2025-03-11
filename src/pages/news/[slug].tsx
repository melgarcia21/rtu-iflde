// src/pages/news/[slug].tsx

import { useRouter } from 'next/router';

const NewsArticle = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold">News Article: {slug}</h1>
      <p className="mt-4 text-lg text-gray-700">
        {/* Fetch and display the full content of the article based on the slug */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
    </section>
  );
};

export default NewsArticle;
