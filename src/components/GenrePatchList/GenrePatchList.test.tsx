import { screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { renderWithProviders } from '@testConfig/storeWrapper'

import { GenrePatchList } from './GenrePatchList'

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
]

export const server = setupServer(...handlers)

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
})
