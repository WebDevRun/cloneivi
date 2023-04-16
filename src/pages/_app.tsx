import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '../index.scss'

import '../styles/index.scss'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(App)