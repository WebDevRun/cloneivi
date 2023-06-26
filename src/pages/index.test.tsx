import { render, screen } from '@testing-library/react'

import Home from './index'

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise<void>(() => {}),
      },
    }
  },
}))

describe('Main page tests', () => {
  it('', () => {})
})
