import { Meta, StoryObj } from '@storybook/react'

import { MoviePlayer } from './MoviePlayer'

import '../../styles/index.scss'

const meta: Meta<typeof MoviePlayer> = {
  title: 'MoviePlayer',
  tags: ['autodocs'],
  component: MoviePlayer,
  argTypes: {
    posterSrc: {
      type: 'string',
      description: 'Ссылка на постер',
    },
    videoSrc: {
      type: 'string',
      description: 'Ссылка на видео',
    },
  },
}

export default meta

type Story = StoryObj<typeof MoviePlayer>

export const Default: Story = {
  args: {
    videoSrc:
      'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
    posterSrc:
      'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
  },
}
