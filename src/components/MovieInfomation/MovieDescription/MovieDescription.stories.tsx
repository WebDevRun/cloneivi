import { Meta, StoryObj } from '@storybook/react'

import movies from '@public/movies/movies.json'
import '@styles/index.scss'

import { MovieDescription } from './MovieDescription'

const meta: Meta<typeof MovieDescription> = {
  title: 'MovieDescription',
  tags: ['autodocs'],
  component: MovieDescription,
  argTypes: {
    isClose: {
      description: 'Изменение высоты контейнера',
    },
    description: {
      description: 'Описание',
    },
    languagesAudio: {
      description: 'Языки, на которые переведен фильм',
    },
    qualities: {
      description: 'Список возможных форматов видео',
    },
  },
}

export default meta

type Story = StoryObj<typeof MovieDescription>

export const Default: Story = {
  args: {
    description: movies[0].description,
    languagesAudio: movies[0].languagesAudio,
    qualities: movies[0].qualities,
  },
}

export const Close: Story = {
  args: {
    isClose: true,
    description: movies[0].description,
    languagesAudio: movies[0].languagesAudio,
    qualities: movies[0].qualities,
  },
}
