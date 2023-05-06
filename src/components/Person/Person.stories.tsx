import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Person } from './Person'

const meta: Meta<typeof Person> = {
  title: 'Person',
  tags: ['autodocs'],
  component: Person,
  argTypes: {
    person_id: {
      description:
        'ИД персоны в источнике данных, например: bb718ac3-fbab-4942-8cd4-1320f20ae263',
    },
    pathDataSrc: {
      description:
        'Путь к источнику данных, например: http://localhost:4000/persons/',
    },
  },
}

export default meta

type Story = StoryObj<typeof Person>

export const Default: Story = {
  args: {
    person_id: 'bb718ac3-fbab-4942-8cd4-1320f20ae263',
  },
}
