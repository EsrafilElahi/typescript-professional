import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import Layout from '../../components/layout/layout';
import PostPreview from '../../components/post/post-preview';
import { getAllPosts } from '../../lib/api';
import Post from '../../types/post';

const url = 'https://www.ansonlichtfuss.com/blog';
const title = 'Blog';
const description = `Thoughts and writings about techniques I'm learning, to keep track and practice new concepts.`;

type Props = {
  allPosts: Post[];
};

const BlogIndex = ({ allPosts }: Props): JSX.Element => {
  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <div className="max-w-2xl my-0 mx-auto pt-12 px-5">
        {allPosts.map((node) => (
          <PostPreview
            key={node.slug}
            title={node.title || node.slug}
            date={node.date}
            excerpt={node.excerpt}
            slug={node.slug}
          />
        ))}
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
