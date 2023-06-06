import { PreloadedState } from '@reduxjs/toolkit'
import { render, RenderOptions } from '@testing-library/react'
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { setupStore, AppStore, AppState } from '@/store/store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<AppState>
  store?: AppStore
}

function renderWithProviders(
  ui: React.ReactElement,
  { store = setupStore(), ...renderOptions }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export { renderWithProviders }
