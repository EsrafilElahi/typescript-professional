import { ArticleJsonLd, NextSeo } from 'next-seo';

/**
 * Inspired by:
 * https://github.com/leerob/leerob.io/blob/master/components/BlogSeo.js
 */

type Props = {
  title: string;
  excerpt?: string;
  date: string;
  url: string;
};

const BlogSeo = ({ title, excerpt, date, url }: Props): JSX.Element => {
  const publishedAt = new Date(date).toISOString();
  // const featuredImage = {
  //   url: `https://www.ansonlichtfuss.com/assets/${image}`,
  //   alt: title
  // };

  return (
    <>
      <NextSeo
        title={`${title} – Anson Lichtfuss`}
        description={excerpt}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedAt,
          },
          url,
          title,
          description: excerpt,
          images: [],
        }}
      />
      <ArticleJsonLd
        authorName="Anson Lichtfuss"
        dateModified={publishedAt}
        datePublished={publishedAt}
        description={excerpt}
        images={[]}
        publisherLogo="/favicons/android-chrome-192x192.png"
        publisherName="Anson Lichtfuss"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
