import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import React from 'react'

import { IGenre } from '@/types/movie'
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

const mockData = [
  {
    genre_id: '03f28683-ab00-42cf-a63a-f0baa5b9c064',
    genre_ru: 'мюзикл',
    genre_en: 'musical',
    slug: 'musical',
  },
]

export const handlers = [
  rest.patch(`/genres/${mockData[0].genre_id}`, async (req, res, ctx) => {
    const data = await req.json<IGenre>()
    mockData[0].genre_ru = data.genre_ru

    return res(ctx.status(200), ctx.json(mockData))
  }),
]

export const server = setupServer(...handlers)

beforeAll(() => server.listen())
beforeEach(() => {
  renderWithProviders(
    <GenreForm
      id={mockData[0].genre_id}
      initialEnText={mockData[0].genre_en}
      initialRuText={mockData[0].genre_ru}
    />,
  )
})
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('GenreForm tests', () => {
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

  it('should update input value', async () => {
    const input = await screen.findByDisplayValue(/мюзикл/i)
    const button = await screen.findByText(/save/i)
    const user = userEvent.setup()

    expect(input).toBeInTheDocument()

    await user.type(input, '1')
    await user.click(button)

    expect(mockData[0].genre_ru).toBe('мюзикл1')
    expect(input).toHaveValue('мюзикл1')
  })
})
