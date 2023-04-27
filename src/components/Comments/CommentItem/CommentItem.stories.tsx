import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { CommentItem } from './CommentItem'

const meta: Meta<typeof CommentItem> = {
  title: 'Comments/CommentItem',
  tags: ['autodocs'],
  component: CommentItem,
  argTypes: {
    date: {
      description: 'Дата комментария',
    },
    text: {
      description: 'Текст комментария',
    },
    vote: {
      description: 'Количество голосов',
    },
  },
}

export default meta

type Story = StoryObj<typeof CommentItem>

export const Default: Story = {
  args: {
    date: '9 апреля 2023',
    text: 'Фильм просто *** редкостное, не тратьте своё время!',
    vote: 2,
  },
}
