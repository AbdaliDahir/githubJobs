import { QueryCache, ReactQueryCacheProvider } from 'react-query'
const queryCache = new QueryCache()
import type { AppProps } from 'next/app'
import { Layout } from '@components/index'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReactQueryCacheProvider>
  )
}

export default MyApp
