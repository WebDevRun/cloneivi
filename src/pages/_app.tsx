import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'

import '../styles/index.scss'

//import { wrapper } from '@/store/store'
import { useStore } from '@/store/store'


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps, ...rest }: AppPropsWithLayout) {
  const store = useStore(pageProps.initialReduxState)
  const getLayout = Component.getLayout ?? ((page) => page)
  //const { store, props } = wrapper.useWrappedStore(rest)
  //const { pageProps } = props

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  )
}

export default appWithTranslation(App)
