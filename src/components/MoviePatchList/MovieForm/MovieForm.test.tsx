import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProviders } from '@testConfig/storeWrapper'

import { MovieForm } from './MovieForm'

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }
  },
}))

let mockValue: string

function mockSetValue(str: string) {
  mockValue = str
}

beforeEach(() => {
  renderWithProviders(<MovieForm setData={mockSetValue} />)
})

describe('MovieForm tests', () => {
  it('should find films', async () => {
    const input = screen.getByPlaceholderText(/find/i)
    const button = screen.getByText(/save/i)
    const user = userEvent.setup()

    await user.type(input, 'Watch Your Wife')
    await user.click(button)

    expect(mockValue).toEqual('Watch Your Wife')
  })
})
