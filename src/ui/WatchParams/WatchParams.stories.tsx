import { Meta, StoryObj } from '@storybook/react'

import movies from '@public/movies/movies.json'
import '@styles/index.scss'

import { WatchParams } from './WatchParams'

const meta: Meta<typeof WatchParams> = {
  title: 'WatchParams',
  tags: ['autodocs'],
  component: WatchParams,
  argTypes: {
    productionYear: {
      description: 'Год производства',
    },
    season: {
      description: 'ИНформация о сезонах',
    },
    duration: {
      description: 'Продолжительность',
    },
    ageRating: {
      description: 'Возростной рейтинг',
    },
    countries: {
      description: 'Страны',
    },
    genres: {
      description: 'Жанры',
    },
    quality: {
      description: 'Качество видео',
    },
  },
}

export default meta

type Story = StoryObj<typeof WatchParams>

export const Default: Story = {
  args: {
    productionYear: movies[0].productionYear,
    duration: movies[0].time.minutes,
    ageRating: movies[0].ageRaiting,
    countries: movies[0].countries,
    genres: movies[0].genres.ru,
    quality: 'FullHD',
  },
}
