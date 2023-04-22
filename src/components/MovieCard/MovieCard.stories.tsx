import { Meta, StoryObj } from '@storybook/react'

import { MovieCard } from './MovieCard'
import '../../styles/index.scss'

const meta: Meta<typeof MovieCard> = {
  title: 'MovieCard',
  tags: ['autodocs'],
  component: MovieCard,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof MovieCard>

export const Default: Story = {
  args: {
    ageLimit: 18,
    href: '/',
    imgSrc: 'https://thumbs.dfs.ivi.ru/storage26/contents/a/0/5944f945ac1f0e39d6d0ca1c709f31.jpg/234x360//?q=85',
    imgAlt: 'Movie Image',
    movieName: 'Ничто не случается',
    properties: {
      rating: '8,3',
      seasons: 2,
      year: '2019-2022',
      genre: 'Мелодрамы'
    }
  },
}
