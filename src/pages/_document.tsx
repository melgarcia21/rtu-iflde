// src/pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add your custom fonts, external links, and meta tags here */}
          <link rel="icon" href="/favicon.ico" />
          
          {/* Google Fonts */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
          
          {/* Meta Tags for SEO */}
          <meta name="description" content="FlexiLearnPro by RTU-IFLDE, offering flexible online learning for students and professionals." />
          <meta name="author" content="RTU-IFLDE" />
          <meta name="keywords" content="FlexiLearnPro, RTU, Open Learning, Distance Education, Learning Management System" />

          {/* Open Graph Meta Tags for better social media sharing */}
          <meta property="og:title" content="FlexiLearnPro" />
          <meta property="og:description" content="Flexible learning opportunities for students and professionals at RTU-IFLDE." />
          <meta property="og:image" content="/og-image.jpg" />
          <meta property="og:url" content="https://www.flexilearnpro.rtu.edu.ph" />

          {/* Add any additional external scripts if needed */}
          {/* <script src="https://example.com/some-script.js"></script> */}
        </Head>
        <body className="font-roboto bg-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
