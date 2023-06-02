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
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450',
  },
}
