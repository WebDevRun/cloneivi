import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { PersonFilmographyItem } from './PersonFilmographyItem'

const meta: Meta<typeof PersonFilmographyItem> = {
  title: 'Person/PersonFilmographyItem',
  tags: ['autodocs'],
  component: PersonFilmographyItem,
  argTypes: {
    id: {
      description:
        'ИД фильма в источнике данных, например: 50568d8f-3bbd-481d-9668-2ebc1e5852c3',
    },
    pathDataSrc: {
      description:
        'Путь к источнику данных, например: http://localhost:4000/films/',
    },
  },
}

export default meta

type Story = StoryObj<typeof PersonFilmographyItem>

export const Default: Story = {
  args: {
    id: '984fdb2d-da0c-4e04-926a-f72f103c4ccb',
  },
}
