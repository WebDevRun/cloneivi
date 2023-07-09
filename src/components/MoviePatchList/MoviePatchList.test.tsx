import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { renderWithProviders } from '@testConfig/storeWrapper'

import { MoviePatchList } from './MoviePatchList'

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

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => {
    return {
      locale: 'ru',
    }
  }),
}))

const mockFilms = [
  {
    film_id: 'f48b41e0-2ad0-4de9-9e66-03d69a22c2a1',
    name_ru: 'Watch Your Wife',
    name_en: 'Watch Your Wife',
    description: '',
    year: 1926,
    rating: 0,
    assessments: 18,
    reviews: 0,
    age_limit: 16,
    duration: 72,
    img: 'https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg',
    trailers: [
      {
        trailer_id: 'ff4b7102-1b4b-4ed6-8f23-2de590509491',
        trailer: '',
        img: '',
        date: '',
      },
    ],
    genres: [
      {
        genre_id: '5bc56c3e-d36f-49c0-ac7f-f0d22ee385e7',
        genre_ru: 'комедия',
        genre_en: 'comedy',
        slug: 'comedy',
      },
      {
        genre_id: '37b2031c-69ef-4f96-80f9-f7db63f0ad4b',
        genre_ru: 'драма',
        genre_en: 'drama',
        slug: 'drama',
      },
    ],
    qualities: [
      {
        quality_id: '43e2b496-c937-44a4-a5cf-2722734e9109',
        quality: '1080',
      },
      {
        quality_id: '03adac5b-b62e-4a0e-b85f-776c139ebff1',
        quality: 'HD',
      },
      {
        quality_id: '617c614c-91c7-4ffe-b598-ee69859595aa',
        quality: 'FullHD',
      },
      {
        quality_id: '29510c13-16f9-4cc8-b061-dd205ef1552c',
        quality: '5.1',
      },
      {
        quality_id: '4a156640-876b-4558-992e-846bb7666ddd',
        quality: '720',
      },
    ],
    languagesAudio: [
      {
        language_id: 'f88e360f-1b9b-4ca3-b9b0-855de4211cab',
        language: 'Русский (ДАБЛ)',
        slug: 'russianduble',
      },
    ],
    languagesSubtitle: [
      {
        language_id: 'f88e360f-1b9b-4ca3-b9b0-855de4211cab',
        language: 'Русский (ДАБЛ)',
        slug: 'russianduble',
      },
    ],
    countries: [
      {
        country_id: '274adf30-f80f-4843-b348-d5d13a7fa939',
        country: 'США',
        slug: 'usa',
      },
    ],
  },
  {
    film_id: '7fda525f-6906-4a53-b337-f4cb89d8df34',
    name_ru: 'Imaginary Friend',
    name_en: 'Imaginary Friend',
    description: '',
    year: 2015,
    rating: 0,
    assessments: 321,
    reviews: 0,
    age_limit: 16,
    duration: 8,
    img: '',
    trailers: [
      {
        trailer_id: '0089eaea-a1e1-4216-a24f-afa5b25f59b8',
        trailer: '',
        img: '',
        date: '',
      },
    ],
    genres: [
      {
        genre_id: '47b3d35c-dc1c-40d7-bc35-65d888d7f7bd',
        genre_ru: 'мелодрама',
        genre_en: 'melodrama',
        slug: 'melodrama',
      },
      {
        genre_id: '37b2031c-69ef-4f96-80f9-f7db63f0ad4b',
        genre_ru: 'драма',
        genre_en: 'drama',
        slug: 'drama',
      },
      {
        genre_id: 'eb59352e-e5ad-4b8c-a43f-262eab4661cc',
        genre_ru: 'короткометражка',
        genre_en: 'short film',
        slug: 'shortfilm',
      },
    ],
    qualities: [
      {
        quality_id: '617c614c-91c7-4ffe-b598-ee69859595aa',
        quality: 'FullHD',
      },
      {
        quality_id: '43e2b496-c937-44a4-a5cf-2722734e9109',
        quality: '1080',
      },
      {
        quality_id: '4a156640-876b-4558-992e-846bb7666ddd',
        quality: '720',
      },
      {
        quality_id: '03adac5b-b62e-4a0e-b85f-776c139ebff1',
        quality: 'HD',
      },
      {
        quality_id: '29510c13-16f9-4cc8-b061-dd205ef1552c',
        quality: '5.1',
      },
    ],
    languagesAudio: [
      {
        language_id: 'f88e360f-1b9b-4ca3-b9b0-855de4211cab',
        language: 'Русский (ДАБЛ)',
        slug: 'russianduble',
      },
    ],
    languagesSubtitle: [
      {
        language_id: 'f88e360f-1b9b-4ca3-b9b0-855de4211cab',
        language: 'Русский (ДАБЛ)',
        slug: 'russianduble',
      },
    ],
    countries: [
      {
        country_id: '274adf30-f80f-4843-b348-d5d13a7fa939',
        country: 'США',
        slug: 'usa',
      },
    ],
  },
]

let mockName: string | null

const handlers = [
  rest.get('/films', (req, res, ctx) => {
    return res(ctx.json(mockFilms))
  }),
  rest.get('/name/films', (req, res, ctx) => {
    mockName = req.url.searchParams.get('name')

    if (mockName === null) return res(ctx.json(mockFilms))

    const filteredMockFilms = mockFilms.filter((film) =>
      film.name_ru.includes(mockName as string),
    )

    return res(ctx.json(filteredMockFilms))
  }),
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())
beforeEach(() => {
  renderWithProviders(<MoviePatchList />)
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('MoviePatchList tests', () => {
  it('should render films', async () => {
    const films = await screen.findAllByText(mockFilms[0].name_ru)
    expect(films).toHaveLength(2)
  })

  it('should render films when search ones', async () => {
    const input = screen.getByPlaceholderText(/find/i)
    const button = screen.getByText(/save/i)
    const user = userEvent.setup()

    const notFindFilms = await screen.findAllByText(mockFilms[0].name_ru)

    await user.type(input, mockFilms[1].name_ru)
    await user.click(button)

    const findFilms = await screen.findAllByText(mockFilms[1].name_ru)

    expect(mockName).toBe(mockFilms[1].name_ru)
    expect(findFilms).toHaveLength(2)
    expect(notFindFilms[0]).not.toBeInTheDocument()
  })

  it('should render "notFound" when films not found', async () => {
    const input = screen.getByPlaceholderText(/find/i)
    const button = screen.getByText(/save/i)
    const user = userEvent.setup()

    const notFindFilms = await screen.findAllByText(mockFilms[0].name_ru)

    await user.type(input, 'asd')
    await user.click(button)

    const notFoundText = await screen.findByText(/notFound/i)

    expect(notFindFilms[0]).not.toBeInTheDocument()
    expect(notFoundText).toBeInTheDocument()
  })
})
