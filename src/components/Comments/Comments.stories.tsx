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
        comment_id: '456e7902-9a64-437d-95c2-a3fbd509bd76',
        title: 'About film',
        text: 'My comment about the film',
        film_id: 'eb5eb005-5818-4cee-9f7b-0fc6c1fae2cc',
        createdAt: '2023-05-08T12:46:45.152Z',
        updatedAt: '2023-05-08T12:46:45.152Z',
        user_id: 'f7b2bc15-ea49-453e-a924-c0c32b21cee0',
        parent_id: null,
        vote: 36,
        user: {
          email: 'admin@gmail.com',
          profile: {
            profile_id: '1751f99d-85ea-4db9-a69a-897380a0265c',
            first_name: 'Victor',
            last_name: 'Barinov',
          },
        },
        sub_comments: [
          {
            comment_id: '7301a15c-d83c-40fb-88e1-1e3995b94ccb',
            title: 'About film',
            text: 'My subcomment about the film',
            film_id: 'eb5eb005-5818-4cee-9f7b-0fc6c1fae2cc',
            createdAt: '2023-05-08T12:55:31.509Z',
            updatedAt: '2023-05-08T12:55:31.509Z',
            user_id: 'f7b2bc15-ea49-453e-a924-c0c32b21cee0',
            parent_id: '456e7902-9a64-437d-95c2-a3fbd509bd76',
            vote: 36,
            user: {
              email: 'admin@gmail.com',
              profile: {
                profile_id: '1751f99d-85ea-4db9-a69a-897380a0265c',
                first_name: 'Victor',
                last_name: 'Barinov',
              },
            },
            sub_comments: [],
          },
          {
            comment_id: '847e083f-d656-4640-b98f-5ff9d4d54399',
            title: 'About film',
            text: 'My subcomment about the film 2',
            film_id: 'eb5eb005-5818-4cee-9f7b-0fc6c1fae2cc',
            createdAt: '2023-05-08T12:56:04.353Z',
            updatedAt: '2023-05-08T12:56:04.353Z',
            user_id: 'f7b2bc15-ea49-453e-a924-c0c32b21cee0',
            parent_id: '456e7902-9a64-437d-95c2-a3fbd509bd76',
            vote: 36,
            user: {
              email: 'admin@gmail.com',
              profile: {
                profile_id: '1751f99d-85ea-4db9-a69a-897380a0265c',
                first_name: 'Victor',
                last_name: 'Barinov',
              },
            },
            sub_comments: [],
          },
        ],
      },
    ],
  },
}
