import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Comments } from './Comments'

const meta: Meta<typeof Comments> = {
  title: 'Comments/CommentLabel',
  tags: ['autodocs'],
  component: Comments,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Comments>

export const Default: Story = {
  args: {},
}
