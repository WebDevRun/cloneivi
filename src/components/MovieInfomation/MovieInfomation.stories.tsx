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

type Story = StoryObj<typeof MovieInfomation>

export const Default: Story = {
  args: {
    title: `${movies[0].name_ru} (Фильм ${movies[0].year})`,
    productionYear: movies[0].year,
    duration: movies[0].duration,
    ageRating: `${movies[0].age_limit}+`,
    countries: [movies[0].country],
    genres: movies[0].genres,
    quality: movies[0].qualities[0],
  },
}
