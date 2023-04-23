import { Meta, StoryObj } from '@storybook/react'

import movies from '@public/movies/movies.json'
import '@styles/index.scss'

import { MovieInfomation } from './MovieInfomation'

const meta: Meta<typeof MovieInfomation> = {
  title: 'MovieInfomation',
  tags: ['autodocs'],
  component: MovieInfomation,
  argTypes: {
    title: {
      description: 'Заголовок',
    },
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
  },
}

export default meta

type Story = StoryObj<typeof MovieInfomation>

export const Default: Story = {
  args: {
    title: `${movies[0].title.ru} (Фильм ${movies[0].productionYear})`,
    productionYear: movies[0].productionYear,
    duration: movies[0].time.minutes,
    ageRating: movies[0].ageRaiting,
    countries: movies[0].countries,
    genres: movies[0].genres.ru,
  },
}
