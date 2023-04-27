import { Meta, StoryObj } from '@storybook/react'

import movies from '@public/movies/movies.json'
import '@styles/index.scss'

import { MovieRating } from './MovieRating'

const meta: Meta<typeof MovieRating> = {
  title: 'MovieRating',
  tags: ['autodocs'],
  component: MovieRating,
  argTypes: {
    rating: {
      description: 'Рейтинг фильма',
    },
  },
}

export default meta

type Story = StoryObj<typeof MovieRating>

export const Default: Story = {
  args: {
    rating: movies[0].rating,
  },
}
