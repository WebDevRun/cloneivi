import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { MoviePageContent } from './MoviePageContent'

const meta: Meta<typeof MoviePageContent> = {
  title: 'Movie',
  tags: ['autodocs'],
  component: MoviePageContent,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof MoviePageContent>

export const Default: Story = {
  args: {},
}
