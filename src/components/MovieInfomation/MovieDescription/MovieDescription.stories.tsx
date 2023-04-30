import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { MovieDescription } from './MovieDescription'

const meta: Meta<typeof MovieDescription> = {
  title: 'Movie/MovieDescription',
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

const movie = {
  description:
    'Американское семейство отправляется из Чикаго в Европу, но в спешке сборов бестолковые родители забывают дома... одного из своих детей. Юное создание, однако, не теряется и демонстрирует чудеса изобретательности. И когда в дом залезают грабители, им приходится не раз пожалеть о встрече с милым крошкой.',
  languagesAudio: ['русский', 'английский'],
  qualities: ['4K', 'FullHD', 'HD', '1080', '720', '5.1'],
}

export const Default: Story = {
  args: {
    description: movie.description,
    languagesAudio: movie.languagesAudio,
    qualities: movie.qualities,
  },
}

export const Close: Story = {
  args: {
    isClose: true,
    description: movie.description,
    languagesAudio: movie.languagesAudio,
    qualities: movie.qualities,
  },
}
