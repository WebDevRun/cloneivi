import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import React from 'react'

import { IGenre } from '@/types/movie'
import { renderWithProviders } from '@testConfig/storeWrapper'

import { GenrePatchList } from './GenrePatchList'

const mockData = [
  {
    genre_id: '03f28683-ab00-42cf-a63a-f0baa5b9c064',
    genre_ru: 'мюзикл',
    genre_en: 'musical',
    slug: 'musical',
  },
  {
    genre_id: '110cbda4-0ae6-476a-959e-f4b7e461891b',
    genre_ru: 'для взрослых',
    genre_en: 'for adults',
    slug: 'adults',
  },
]

export const handlers = [
  rest.get('/genres', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData), ctx.delay(150))
  }),
  rest.patch(`/genres/${mockData[0].genre_id}`, async (req, res, ctx) => {
    const data = await req.json<IGenre>()
    mockData[0].genre_ru = data.genre_ru

    return res(ctx.status(200), ctx.json(mockData))
  }),
]

export const server = setupServer(...handlers)

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

beforeAll(() => server.listen())
beforeEach(() => renderWithProviders(<GenrePatchList />))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('GenrePatchList tests', () => {
  it('should loading render', () => {
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('should genres render', async () => {
    const inputs = await screen.findAllByRole('textbox')

    expect(inputs).toHaveLength(4)
  })

  it('should update input value', async () => {
    const input = await screen.findByDisplayValue(/мюзикл/i)
    const buttons = await screen.findAllByText(/save/i)
    const user = userEvent.setup()

    expect(input).toBeInTheDocument()

    await user.type(input, '1')
    await user.click(buttons[0])

    expect(mockData[0].genre_ru).toBe('мюзикл1')
    expect(input).toHaveValue('мюзикл1')
  })
})
