import { Meta, StoryObj } from '@storybook/react'

import movies from '@public/movies/movies.json'
import '@styles/index.scss'

import { WatchAllDevices } from './WatchAllDevices'

const meta: Meta<typeof WatchAllDevices> = {
  title: 'WatchAllDevices',
  tags: ['autodocs'],
  component: WatchAllDevices,
  argTypes: {
    name: {
      description: 'Наименование фильма',
    },
    poster: {
      description: 'Постер фильма',
    },
  },
}

export default meta

type Story = StoryObj<typeof WatchAllDevices>

export const Default: Story = {
  args: {
    name: movies[0].name_ru,
    poster: movies[0].img,
  },
}
