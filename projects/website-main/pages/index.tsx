import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import NextLink from 'next/link';
import Plus from '../components/assets/plus';
import Ticker from '../components/assets/ticker';
import Layout from '../components/layout/layout';
import PostPreview from '../components/post/post-preview';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';

const url = 'https://www.ansonlichtfuss.com';
const title = 'Home';
const description = `Frontend engineer building useful, beautiful interfaces in Colorado.`;

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props): JSX.Element => {
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
      <div className="relative mb-24 pb-6 z-0" style={{ minHeight: '65vh' }}>
        <div
          className="absolute opacity-50 h-full left-0 w-full text-left"
          style={{ zIndex: -1 }}
        >
          <div className="relative max-w-xl h-full mx-auto">
            <Image
              alt="Self portrait"
              layout="fill"
              className="object-cover lg:object-contain"
              src="/assets/homepageprofile.jpg"
            />
          </div>
        </div>
        <div
          className={`mx-auto max-w-5xl relative flex flex-col justify-center`}
          style={{ minHeight: '65vh' }}
        >
          <div className="relative pb-4">
            <div
              className="back-layer absolute top-0 w-full h-full"
              style={{ zIndex: -1 }}
            >
              <div
                className="opacity-75 mx-auto lg:ml-60 mt-12 lg:mt-0"
                style={{ width: '17rem' }}
              >
                <Plus />
              </div>
            </div>
            <div className="front-layer top-0 right-0 flex flex-col justify-center items-center w-full h-full">
              {/* Desktop horizontal view */}
              <div className="text-right hidden lg:flex w-full items-center justify-center">
                <div className="pr-3 border-r border-gray-200">
                  <div className="font-black font-display text-display-title uppercase leading-none">
                    Designer
                  </div>
                  <div className="font-black font-display text-display-title uppercase leading-none">
                    Developer
                  </div>
                </div>
                <div
                  className="font-semibold font-display text-lg uppercase leading-none text-center pl-2"
                  style={{ writingMode: 'vertical-lr' }}
                >
                  Frontend Engineer
                </div>
              </div>
              {/* Mobile vertical view */}
              <div className="lg:hidden flex flex-col items-center">
                <div
                  className="text-right"
                  style={{ writingMode: 'vertical-lr' }}
                >
                  <div className="font-black font-display text-display-title uppercase leading-none">
                    Designer
                  </div>
                  <div className="font-black font-display text-display-title uppercase leading-none">
                    Developer
                  </div>
                </div>
                <div className="font-semibold font-display text-lg uppercase leading-none text-center pt-6">
                  Frontend Engineer
                </div>
              </div>
              <Ticker
                textItems={[
                  'ReactJS',
                  'Design Systems',
                  'NextJS',
                  'Javascript',
                  'UX Engineering',
                  'ES6',
                  'Typescript',
                  'NodeJS',
                  'Functional Programming',
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-0 lg:grid gap-8 grid-cols-2">
        <div className="mb-12 md:mb-0">
          <div className="tracking-widest text-black font-display uppercase mb-3 opacity-75 text-center">
            Projects
          </div>

          <div className="mb-4 mx-auto relative max-w-2xl shadow-none hover:shadow-xl transition-shadow duration-200 bg-white rounded overflow-hidden border border-gray-200">
            <NextLink href={`/projects/simple-metrics`}>
              <a className="flex items-center justify-center flex-col md:flex-row p-3 md:pr-0 text-black no-underline">
                <div className="m-2 mr-4">
                  <Image
                    alt="Simple Metrics Thumbnail"
                    src="/assets/simple-metrics-thumbnail.jpg"
                    width={160}
                    height={160}
                  />
                </div>
                <div className="font-bold text-4xl leading-tight mb-0 mt-0 flex-grow">
                  Simple Metrics
                  <div className="font-light text-xl leading-none">
                    for Raspberry Pi
                  </div>
                </div>
              </a>
            </NextLink>
          </div>
        </div>
        <div>
          <div className="tracking-widest text-black font-display uppercase mb-3 opacity-75 text-center">
            Recent Posts
          </div>

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
      </div>
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])?.slice(0, 3);

  return {
    props: { allPosts },
  };
};
