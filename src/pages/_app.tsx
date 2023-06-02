import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '../styles/index.scss'
import { Provider } from 'react-redux'

import { wrapper } from '@/store/store'

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}

export default appWithTranslation(App)
