import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { CommentAvatar } from './CommentAvatar'

const meta: Meta<typeof CommentAvatar> = {
  title: 'Comments/CommentAvatar',
  tags: ['autodocs'],
  component: CommentAvatar,
}

export default meta

type Story = StoryObj<typeof CommentAvatar>

export const Default: Story = {}
