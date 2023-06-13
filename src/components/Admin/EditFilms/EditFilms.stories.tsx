import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'
import data from './data.json'
import { EditFilms } from './EditFilms'

const meta: Meta<typeof EditFilms> = {
  title: 'EditFilms',
  tags: ['autodocs'],
  component: EditFilms,
  argTypes: {
    film: { description: 'Данные в виде объекта' },
  },
}

export default meta

type Story = StoryObj<typeof EditFilms>

export const Default: Story = {
  args: {
    film: data,
  },
}
