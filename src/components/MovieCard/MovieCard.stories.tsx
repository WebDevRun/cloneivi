import { Meta, StoryObj } from '@storybook/react'

import { MovieCard } from './MovieCard'
import '../../styles/index.scss'

const meta: Meta<typeof MovieCard> = {
  title: 'MovieCard',
  tags: ['autodocs'],
  component: MovieCard,
  argTypes: {
    ageLimit: {
      description: 'Возрастное ограничение',
    },
    genre: {
      description: 'Жанры фильма',
    },
    href: {
      description: 'URL ссылки',
    },
    imgSrc: {
      description: 'URL картинки',
    },
    imgAlt: {
      description: 'Альтернативный тект если не отображается картинка',
    },
    movieName: {
      description: 'Название фильма',
    },
    rating: {
      description: 'Рейтинг фильма',
    },
    year: {
      description: 'Год выпуска фильма',
    },
    mode: {
      description: 'Виды карточек',
    },
  },
}

export default meta

type Story = StoryObj<typeof MovieCard>

export const Default: Story = {
  args: {
    ageLimit: '18+',
    href: '#',
    imgSrc:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450',
    imgAlt: 'Movie Image',
    movieName: 'Ничто не случается',
    rating: 8.3,
    year: 2019,
    genre: ['Мелодрамы'],
    mode: 'small',
  },
}

export const BigMovieCard: Story = {
  args: {
    imgSrc:
      'https://thumbs.dfs.ivi.ru/storage6/contents/7/b/8771f2bdb2fcf548eec1b9d85d117e.jpg/1216x370/',
    imgAlt: 'img',
    mode: 'big',
    href: '#',
    ageLimit: '18+',
  },
}
