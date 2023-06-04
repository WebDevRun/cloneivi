import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { wrapper } from '@/store/store'
import '../styles/index.scss'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, ...rest }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      {getLayout(<Component {...props.pageProps} />)}
    </Provider>
  )
}

export default appWithTranslation(App)
