import { Meta, StoryObj } from '@storybook/react'

import '@/styles/index.scss'

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
    persons: {
      description: 'Список актеров',
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
    persons: [
      {
        person_id: 'f2ccd0f3-5722-4c57-9d81-b71d5a0f2b3b',
        first_name_ru: 'Николас',
        last_name_ru: 'Фут',
        first_name_en: 'Николас',
        last_name_en: 'Фут',
        img: 'https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg',
      },
      {
        person_id: '6e65e481-0080-4ade-866d-dd2f358aab61',
        first_name_ru: 'Деверт',
        last_name_ru: 'Хикмэн',
        first_name_en: 'Деверт',
        last_name_en: 'Хикмэн',
        img: 'https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg',
      },
      {
        person_id: 'a9063637-3cb6-4375-9295-d900b8384b12',
        first_name_ru: 'Алекс',
        last_name_ru: 'Шлегель',
        first_name_en: 'Алекс',
        last_name_en: 'Шлегель',
        img: 'https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg',
      },
      {
        person_id: 'a520c99d-d703-4716-a293-41a4f7bdecbc',
        first_name_ru: 'Люсия',
        last_name_ru: 'Струс',
        first_name_en: 'Люсия',
        last_name_en: 'Струс',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/9b65685d-90a6-4af9-ac15-7e9f4b2f0127/280x420',
      },
    ],
  },
}
