import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { NextApiRequest, NextApiResponse } from 'next';
import { AppProps } from 'next/app';


export const getStaticProps: GetStaticProps = async context => {
  // ...
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
}

export const getServerSideProps: GetServerSideProps = async context => {
  // ...
}

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App