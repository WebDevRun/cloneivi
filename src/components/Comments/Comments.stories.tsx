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
        comment_id: '4d522235-7915-4122-8303-4bc79ea603a5',
        text: 'Фильм просто *** редкостное, не тратьте своё время!',
        vote: 2,
        createAt: '2023-05-08T07:30:59.761Z',
        user: {
          profile: {
            first_name: 'Victor',
            last_name: 'Barinov',
          },
        },
        sub_comments: [
          {
            comment_id: 'ec2d35f8-b9de-4fa6-a906-c76b9f2ddaer',
            text: 'My comment about the film',
            createAt: '2023-05-08T07:30:59.761Z',
            vote: 2,
            user: {
              profile: {
                first_name: 'Victor',
                last_name: 'Barinov',
              },
            },
            sub_comments: [],
          },
        ],
      },
      {
        comment_id: 'ec2d35f8-b9de-4fa6-a906-c76b9f2ddaef',
        text: '- 1,5 часа из жизни',
        vote: 3,
        createAt: '2023-05-08T07:30:59.761Z',
        user: {
          profile: {
            first_name: 'Victor',
            last_name: 'Barinov',
          },
        },
        sub_comments: [],
      },
      {
        comment_id: '4c786377-f586-4580-ab6e-24cb0ccd407e',
        text: 'Неплохой фильм, сойдёт для разнообразия.',
        vote: 0,
        createAt: '2023-05-08T07:30:59.761Z',
        user: {
          profile: {
            first_name: 'Victor',
            last_name: 'Barinov',
          },
        },
        sub_comments: [],
      },
    ],
  },
}
