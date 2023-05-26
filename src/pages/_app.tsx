import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ReactElement, ReactNode } from 'react'

import '../styles/index.scss'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return <>{getLayout(<Component {...pageProps} />)}</>
}

export default appWithTranslation(App)
