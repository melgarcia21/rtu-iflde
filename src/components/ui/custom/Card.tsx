import { useState, useEffect } from 'react';

interface CardProps {
  title: string;
  content: string;
  link: string;
  embedUrl?: string;
  fbCaption?: string;
}

const Card = ({ title, content, link, embedUrl, fbCaption = '' }: CardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getFacebookPostUrl = (embedUrl: string) => {
    try {
      const url = new URL(embedUrl);
      const params = new URLSearchParams(url.search);
      const postUrl = params.get('href');
      return decodeURIComponent(postUrl || '');
    } catch {
      return '#';
    }
  };

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="card bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      {embedUrl && isMounted && (
        <div className="card-embed w-full relative pt-[75%]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#400040]"></div>
            </div>
          )}
          <iframe
            src={`${embedUrl}&width=100%`}
            className="absolute top-0 left-0 w-full h-full border-0 overflow-y-auto"
            scrolling="yes"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            style={{ WebkitOverflowScrolling: 'touch' }}
            onLoad={() => setIsLoading(false)}
          />
          {fbCaption && (
            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-50/90 border-t border-gray-100">
              <p className="text-sm text-gray-600 line-clamp-1">
                {truncateText(fbCaption, 20)}
                <a 
                  href={getFacebookPostUrl(embedUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-[#400040] hover:underline inline-flex items-center"
                >
                  View full post →
                </a>
              </p>
            </div>
          )}
        </div>
      )}
      <div className="p-3 md:p-4 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-3 text-sm line-clamp-2">{content}</p>
        <a 
          href={embedUrl && isMounted ? getFacebookPostUrl(embedUrl) : link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 bg-[#400040] text-white text-sm rounded-md hover:bg-[#500050] transition-colors duration-200 group w-fit mt-auto"
        >
          Read more
          <svg 
            className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;