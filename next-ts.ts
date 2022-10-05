// _app.ts
import { NextPage, AppProps } from 'next';
import { ReactElement, ReactNode } from 'react';

type NextPageLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type NextPropsLayout = AppProps & {
  Component: NextPageLayout
}

export function MyApp({ Component, PageProps }: NextPropsLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component { ...pageProps } />, PageProps);
}

// [id] page

const ItemId = ({ data }) => {

  return (
    <div>
      <span>{ data.map } </span>
    </div>
  )
}

const ItemId.getLayout = (page: typeof ItemId) => <Layout> {page} </Layout>
