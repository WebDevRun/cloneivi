import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { MovieForm } from './MovieForm'

const meta: Meta<typeof MovieForm> = {
  title: 'MovieForm',
  tags: ['autodocs'],
  component: MovieForm,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof MovieForm>

export const Default: Story = {
  args: {},
}
