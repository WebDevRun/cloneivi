import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { MovieInfomation } from './MovieInfomation'

const meta: Meta<typeof MovieInfomation> = {
  title: 'Movie/MovieInfomation',
  tags: ['autodocs'],
  component: MovieInfomation,
  argTypes: {
    title: {
      description: 'Заголовок',
    },
    productionYear: {
      description: 'Год производства',
    },
    duration: {
      description: 'Продолжительность',
    },
    ageRating: {
      description: 'Возростной рейтинг',
    },
    countries: {
      description: 'Страны',
    },
    genres: {
      description: 'Жанры',
    },
    qualities: {
      description: 'Качество видео',
    },
    description: {
      description: 'Описание',
    },
    languagesAudio: {
      description: 'Языки, на которые переведен фильм',
    },
    rating: {
      description: 'Рейтинг фильма',
    },
  },
}

export default meta

type Story = StoryObj<typeof MovieInfomation>

export const Default: Story = {
  args: {
    title: 'Один дома (Фильм 1990)',
    productionYear: 1990,
    duration: 103,
    ageRating: '0+',
    countries: ['США'],
    genres: ['комедия', 'семейный'],
    qualities: ['4K', 'FullHD', 'HD', '1080', '720', '5.1'],
    description:
      'Американское семейство отправляется из Чикаго в Европу, но в спешке сборов бестолковые родители забывают дома... одного из своих детей. Юное создание, однако, не теряется и демонстрирует чудеса изобретательности. И когда в дом залезают грабители, им приходится не раз пожалеть о встрече с милым крошкой.',
    languagesAudio: ['русский', 'английский'],
    rating: 7.4,
  },
}
