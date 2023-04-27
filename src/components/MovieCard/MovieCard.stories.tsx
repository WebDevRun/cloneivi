import { Meta, StoryObj } from '@storybook/react'

import { MovieCard } from './MovieCard'
import '../../styles/index.scss'

const meta: Meta<typeof MovieCard> = {
  title: 'MovieCard',
  tags: ['autodocs'],
  component: MovieCard,
  argTypes: {
    ageLimit: {
      type: 'string',
      description: 'Возрастное ограничение',
    },
    genre: {
      type: 'string',
      description: 'Жанры фильма',
    },
    href: {
      type: 'string',
      description: 'URL ссылки',
    },
    imgSrc: {
      type: 'string',
      description: 'URL картинки',
    },
    imgAlt: {
      type: 'string',
      description: 'Альтернативный тект если не отображается картинка',
    },
    movieName: {
      type: 'string',
      description: 'Название фильма',
    },
    rating: {
      type: 'string',
      description: 'Рейтинг фильма',
    },
    year: {
      type: 'string',
      description: 'Год выпуска фильма',
    },
  },
}

export default meta

type Story = StoryObj<typeof MovieCard>

export const Default: Story = {
  args: {
    ageLimit: '18+',
    href: '/',
    imgSrc:
      'https://thumbs.dfs.ivi.ru/storage9/contents/4/7/4f5465145498592106dfdc9675fe0d.jpg/234x360//?q=85',
    imgAlt: 'Movie Image',
    movieName: 'Ничто не случается',
    rating: 8.3,
    year: '2019-2022',
    genre: ['Мелодрамы'],
  },
}
