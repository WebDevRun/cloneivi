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
    productionYear: movies[0].year,
    duration: movies[0].duration,
    ageRating: `${movies[0].age_limit}+`,
    countries: [movies[0].country],
    genres: movies[0].genres,
    quality: movies[0].qualities[0],
  },
}
