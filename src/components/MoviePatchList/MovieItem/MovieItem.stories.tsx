import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { MovieItem } from './MovieItem'

const meta: Meta<typeof MovieItem> = {
  title: 'MovieItem',
  tags: ['autodocs'],
  component: MovieItem,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof MovieItem>

export const Default: Story = {
  args: {},
}
