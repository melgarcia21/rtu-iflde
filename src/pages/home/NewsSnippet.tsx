import React from 'react';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import Button from '@/components/ui/Button_';

const NewsSnippet = () => {
  const latestNews = [
    {
      title: "New Micro-Credential Programs",
      content: "Explore our latest industry-aligned micro-credential programs designed for working professionals.",
      link: "/news/micro-credentials-2025"
    },
    {
      title: "ETEEAP Success Stories",
      content: "Read about how our graduates transformed their careers through the ETEEAP program.",
      link: "/news/eteeap-success-stories"
    },
    {
      title: "Industry Partnerships",
      content: "Learn about our new partnerships with leading companies to enhance our program offerings.",
      link: "/news/industry-partnerships"
    }
  ];

  return (
    <section className="news-snippet-section">
      <div className="news-snippet-container">
        <div className="news-snippet-header">
          <h2 className="news-snippet-title">Latest Updates</h2>
          <Link href="/news">
            <Button label="View All News" />
          </Link>
        </div>
        <div className="news-grid">
          {latestNews.map((news, index) => (
            <Card
              key={index}
              title={news.title}
              content={news.content}
              link={news.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSnippet;