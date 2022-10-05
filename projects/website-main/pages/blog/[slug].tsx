import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import Head from 'next/head';
import { useRouter } from 'next/router';
import path from 'path';
import readingTime from 'reading-time';
import Bio from '../../components/bio';
import Layout from '../../components/layout/layout';
import PostBody from '../../components/post/post-body';
import PostHeader from '../../components/post/post-header';
import PostSeo from '../../components/post/post-seo';
import PostTitle from '../../components/post/post-title';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // a: CustomNextLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  // TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
};

type Props = {
  source: string;
  frontMatter: {
    title: string;
    slug: string;
    date: string;
    excerpt?: string;
    readingTime: {
      text: string;
    };
  };
};

const PostPage = ({ source, frontMatter }: Props): JSX.Element => {
  const content = hydrate(source, { components });
  const router = useRouter();
  return (
    <Layout>
      <PostSeo
        url={`https://www.ansonlichtfuss.com/blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <div className="max-w-3xl mx-auto">
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article className="px-5 sm:px-8 md:px-16 pb-8 md:pt-8 shadow-none md:shadow-lg">
            <PostHeader
              title={frontMatter.title}
              date={frontMatter.date}
              readingTime={frontMatter.readingTime.text}
            />
            <PostBody content={content} />
            <hr className="mt-8 mb-8 max-w-none" />
            <Bio />
          </article>
        )}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        slug: params.slug,
        readingTime: readingTime(content),
        ...data,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
