import { Meta, StoryObj } from '@storybook/react'

import { MovieCard } from './MovieCard'

const meta: Meta<typeof MovieCard> = {
  title: 'MovieCard',
  tags: ['autodocs'],
  component: MovieCard,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof MovieCard>

export const Default: Story = {
  args: {},
}
