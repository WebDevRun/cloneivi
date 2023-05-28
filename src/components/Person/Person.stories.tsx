import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'
import person from './data_mock.json'
import { Person } from './Person'

const meta: Meta<typeof Person> = {
  title: 'Person',
  tags: ['autodocs'],
  component: Person,
  argTypes: {
    person: {
      description:
        'Данные о персоне в виде объекта',
    },
    maxShowFilms: {
      description:
        'Количество открытых элементов в секции Полная фильмография',
    },
  },
}

export default meta

type Story = StoryObj<typeof Person>

export const Default: Story = {
  args: {
    person: person,
    maxShowFilms: 2,
  },
}
