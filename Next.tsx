import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { AppProps } from "next/app";


export const getStaticProps: GetStaticProps = async (context) => {
  // ...
};

// =======================================================

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
};

// =======================================================

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
};

// =======================================================

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

// =======================================================

import type { GetStaticProps, NextPage } from "next";
import { Character, GetCharacterResults } from "../types";

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <h3>{character.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();

  return {
    props: {
      characters: results,
    },
  };
};

export default Home;

// =======================================================

import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (
    page: ReactElement /* this props is page that's why use ReactElement here */
  ) => ReactNode /* and this is gonna be children --> ReactNode */;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
export default MyApp;

// =======================================================
