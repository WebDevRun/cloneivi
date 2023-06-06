import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { makeStore } from '@/store/store'

import '@styles/index.scss'

import { GenrePatchList } from './GenrePatchList'

const meta: Meta<typeof GenrePatchList> = {
  title: 'Admin/GenrePatchList',
  tags: ['autodocs'],
  component: GenrePatchList,
  argTypes: {
    genres: {
      description: 'Список жанров',
    },
  },
}

export default meta

type Story = StoryObj<typeof GenrePatchList>

export const Default: Story = {
  args: {
    genres: [
      {
        genre_id: '47b3d35c-dc1c-40d7-bc35-65d888d7f7bd',
        genre_ru: 'мелодрама',
        genre_en: 'melodrama',
        slug: 'melodrama',
      },
      {
        genre_id: '93edd3bd-3a18-4f10-8e24-a4f39f682976',
        genre_ru: 'спорт',
        genre_en: 'sport',
        slug: 'sport',
      },
      {
        genre_id: 'cf999928-94d6-461e-b32a-dc1527118422',
        genre_ru: 'аниме',
        genre_en: 'anime',
        slug: 'anime',
      },
      {
        genre_id: '37b2031c-69ef-4f96-80f9-f7db63f0ad4b',
        genre_ru: 'драма',
        genre_en: 'drama',
        slug: 'drama',
      },
    ],
  },
  decorators: [
    (Story) => {
      const store = makeStore()

      return (
        <Provider store={store}>
          <Story />
        </Provider>
      )
    },
  ],
}
