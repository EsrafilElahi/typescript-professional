import { NextSeo } from 'next-seo';
import React from 'react';
import Layout from '../components/layout/layout';

const url = 'https://www.ansonlichtfuss.com/404';
const title = '404';

const NotFoundIndex = (): JSX.Element => (
  <Layout>
    <NextSeo
      title={title}
      canonical={url}
      openGraph={{
        url,
        title,
      }}
    />
    <h1>Not Found</h1>
    <p>
      Either this page doesn&#39;t exist... or we've just entered an alternate
      timeline. 🤔
    </p>
  </Layout>
);

export default NotFoundIndex;
