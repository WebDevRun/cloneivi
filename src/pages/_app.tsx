import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
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

function App({
  Component,
  pageProps: { session, ...rest },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        {getLayout(<Component {...props.pageProps} />)}
      </SessionProvider>
    </Provider>
  )
}

export default appWithTranslation(App)
