import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import person from '../data_mock.json'

import { PersonFilmography } from './PersonFilmography'

const meta: Meta<typeof PersonFilmography> = {
  title: 'Person/PersonFilmography',
  tags: ['autodocs'],
  component: PersonFilmography,
  argTypes: {
    films: {
      description:
        'Массив с ИД фильмов',
    },
    pathDataSrc: {
      description:
        'Путь к источнику данных, например: http://localhost:4000/films/',
    },
  },
}

export default meta

type Story = StoryObj<typeof PersonFilmography>

export const Default: Story = {
  args: {
    films: person.films
  },
}
