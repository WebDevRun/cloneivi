import { Meta, StoryObj } from '@storybook/react'

import movies from '@public/movies/movies.json'
import '@styles/index.scss'

import { MovieQuality } from './MovieQuality'

const meta: Meta<typeof MovieQuality> = {
  title: 'Movie/MovieQuality',
  tags: ['autodocs'],
  component: MovieQuality,
  argTypes: {
    quality: {
      description: 'Качество видео',
    },
  },
}

export default meta

type Story = StoryObj<typeof MovieQuality>

export const Default: Story = {
  args: {
    quality: movies[0].qualities[0],
  },
}
