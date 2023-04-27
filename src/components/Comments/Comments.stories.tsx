import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Comments } from './Comments'

const meta: Meta<typeof Comments> = {
  title: 'Comments/CommentLabel',
  tags: ['autodocs'],
  component: Comments,
  argTypes: {
    comments: {
      description: 'Список комментариев',
    },
  },
}

export default meta

type Story = StoryObj<typeof Comments>

export const Default: Story = {
  args: {
    comments: [
      {
        date: '9 апреля 2023',
        text: 'Фильм просто *** редкостное, не тратьте своё время!',
        vote: 2,
      },
      {
        date: '8 апреля 2023',
        text: '- 1,5 часа из жизни',
        vote: 3,
      },
      {
        date: '12 апреля 2023',
        text: 'Неплохой фильм, сойдёт для разнообразия.',
        vote: 0,
      },
    ],
  },
}
