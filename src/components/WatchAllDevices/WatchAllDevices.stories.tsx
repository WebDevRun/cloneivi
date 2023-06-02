import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { WatchAllDevices } from './WatchAllDevices'

const meta: Meta<typeof WatchAllDevices> = {
  title: 'Movie/WatchAllDevices',
  tags: ['autodocs'],
  component: WatchAllDevices,
  argTypes: {
    name: {
      description: 'Наименование фильма',
    },
    poster: {
      description: 'url постера к фильму',
    },
  },
}

export default meta

type Story = StoryObj<typeof WatchAllDevices>

export const Default: Story = {
  args: {
    name: 'Зеленая миля',
    poster:
      'https://thumbs.dfs.ivi.ru/storage29/contents/3/5/d921da2c85fcd55533dcac5a95e24c.jpg/400x226/',
  },
}
