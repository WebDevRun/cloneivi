import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { renderWithProviders } from '@testConfig/storeWrapper'

import { GenreForm } from './GenreForm'

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

beforeEach(() => {
  renderWithProviders(
    <GenreForm id='1' initialEnText='musical' initialRuText='мюзикл' />,
  )
})

describe('GenreForm tests', () => {
  it('should render input with ru text', () => {
    const input = screen.getByDisplayValue(/мюзикл/i)

    expect(input).toBeInTheDocument()
  })

  it('should render input with en text', () => {
    const input = screen.getByDisplayValue(/musical/i)

    expect(input).toBeInTheDocument()
  })

  it('should render save button', () => {
    const buttons = screen.getByText(/save/i)

    expect(buttons).toBeInTheDocument()
  })

  it('should render cancel button', () => {
    const buttons = screen.getByText(/cancel/i)

    expect(buttons).toBeInTheDocument()
  })

  it('sould reset ru input value after cancel button click', async () => {
    const user = userEvent.setup()
    const input = screen.getByDisplayValue(/мюзикл/i)
    const button = screen.getByText(/cancel/i)

    await user.type(input, 'asd')

    expect(input).toHaveValue('мюзиклasd')

    await user.click(button)

    expect(input).toHaveValue('мюзикл')
  })

  it('sould reset en input value after cancel button click', async () => {
    const user = userEvent.setup()
    const input = screen.getByDisplayValue(/musical/i)
    const button = screen.getByText(/cancel/i)

    await user.type(input, 'asd')

    expect(input).toHaveValue('musicalasd')

    await user.click(button)

    expect(input).toHaveValue('musical')
  })
})
