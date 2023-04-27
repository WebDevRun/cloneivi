import { Meta, StoryObj } from '@storybook/react'

import movies from '@public/movies/movies.json'
import '@styles/index.scss'

import { MovieInfomation } from './MovieInfomation'

const meta: Meta<typeof MovieInfomation> = {
  title: 'Movie/MovieInfomation',
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
    qualities: {
      description: 'Качество видео',
    },
    description: {
      description: 'Описание',
    },
    languagesAudio: {
      description: 'Языки, на которые переведен фильм',
    },
    rating: {
      description: 'Рейтинг фильма',
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
    qualities: movies[0].qualities,
    description: movies[0].description,
    languagesAudio: movies[0].languagesAudio,
    rating: movies[0].rating,
  },
}
