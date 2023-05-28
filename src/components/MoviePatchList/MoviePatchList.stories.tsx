import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { MoviePatchList } from './MoviePatchList'

const meta: Meta<typeof MoviePatchList> = {
  title: 'Admin/MoviePatchList',
  tags: ['autodocs'],
  component: MoviePatchList,
  argTypes: {
    initialMovies: {
      description: 'Список фильмов',
    },
  },
}

export default meta

type Story = StoryObj<typeof MoviePatchList>

export const Default: Story = {
  args: {
    initialMovies: [
      {
        film_id: '1ac5625b-d78c-4de2-9909-85c0fa002686',
        name_ru: 'Хардбол',
        name_en: '',
        description: '',
        year: 2001,
        rating: 7.1,
        assessments: 32308,
        reviews: 0,
        age_limit: 16,
        duration: 106,
        img: '',
        trailers: [
          {
            trailer_id: 'ae572313-41ad-4128-81db-e2b799789e1e',
            trailer: '',
            img: '',
            date: '',
          },
        ],
        genres: [],
        qualities: [
          {
            quality_id: '617c614c-91c7-4ffe-b598-ee69859595aa',
            quality: 'FullHD',
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
            quality_id: '43e2b496-c937-44a4-a5cf-2722734e9109',
            quality: '1080',
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
            country_id: 'a1941b14-e0cf-4a7b-b9bf-c50a9c7a7136',
            country: 'Германия',
            slug: 'germany',
          },
        ],
      },
      {
        film_id: 'a0a612e4-549d-4b89-b8d4-f5fe97f0cdb4',
        name_ru: 'Завороженный Аризоной',
        name_en: 'Arizona Bound',
        description: '',
        year: 1927,
        rating: 0,
        assessments: 36,
        reviews: 0,
        age_limit: 16,
        duration: 53,
        img: 'https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg',
        trailers: [
          {
            trailer_id: '0083e71c-aa5f-42fc-b6f7-c286e5c243b6',
            trailer: '',
            img: '',
            date: '',
          },
        ],
        genres: [
          {
            genre_id: 'aaddaf21-5455-4cf2-b595-e10a283b6dc0',
            genre_ru: 'вестерн',
            genre_en: 'western',
            slug: 'western',
          },
        ],
        qualities: [
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
          {
            quality_id: '03adac5b-b62e-4a0e-b85f-776c139ebff1',
            quality: 'HD',
          },
          {
            quality_id: '43e2b496-c937-44a4-a5cf-2722734e9109',
            quality: '1080',
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
    ],
  },
}
