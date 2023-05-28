import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'
import '../styles/index.scss'
import { Provider } from 'react-redux'

import { wrapper } from '@/store'

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

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
