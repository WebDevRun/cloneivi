import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Movie } from './Movie'

const meta: Meta<typeof Movie> = {
  title: 'Movie',
  tags: ['autodocs'],
  component: Movie,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Movie>

export const Default: Story = {
  args: {},
}
