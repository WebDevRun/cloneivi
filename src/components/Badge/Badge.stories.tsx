import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  tags: ['autodocs'],
  component: Badge,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {},
}
