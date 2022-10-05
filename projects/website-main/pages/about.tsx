import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/layout/layout';

const url = 'https://www.ansonlichtfuss.com/about';
const title = 'About';
const description = `I make beautiful, enjoyable online experiences. Previous back-end
  experience informs design and architectural decisions I make every day,
  helping drive reusable, fast user interfaces.`;

const AboutIndex = (): JSX.Element => (
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
    <div className="max-w-2xl my-0 mx-auto px-5">
      <div
        className="sm:float-right mb-5 px-8 mx-auto sm:ml-5 overflow-hidden relative"
        style={{
          maxWidth: '50%',
          width: '310px',
          boxShadow: '0 -1px 0 rgba(0,0,0,0.5) inset',
        }}
      >
        <Image
          className="relative"
          layout="responsive"
          width={512}
          height={488}
          src="/assets/about-profile-photo.jpg"
        />
      </div>
      <p className="text-3xl font-display tracking-tight mb-0">
        Hey there, I'm Anson.
      </p>
      <p className="mb-4">
        I make beautiful, enjoyable online experiences. Previous back-end
        experience informs design and architectural decisions I make every day,
        helping drive reusable, fast user interfaces. I currently specialize in
        frontend engineering, using technologies like React.js, Next.js, and
        Gatsby.js to build powerful applications used by thousands.
      </p>
      <p>
        Some of my greatest joy comes from building excellent UIs that deftly
        balance positive emotional experiences and stakeholder-optimized
        usability. A design might be pretty, but that point is moot if no one
        understands how to use it.
      </p>
      <p>
        Connect with me on:{' '}
        <a
          href="https://www.linkedin.com/in/anson-lichtfuss-3401b6128"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        ,{' '}
        <a
          href="https://twitter.com/ansonlichtfuss"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        , and{' '}
        <a
          href="https://www.instagram.com/ansonlichtfuss/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        .
      </p>
    </div>
  </Layout>
);

export default AboutIndex;
