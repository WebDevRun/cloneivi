import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { CommentForm } from './CommentForm'

const meta: Meta<typeof CommentForm> = {
  title: 'Comments/CommentForm',
  tags: ['autodocs'],
  component: CommentForm,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof CommentForm>

export const Default: Story = {
  args: {},
}
