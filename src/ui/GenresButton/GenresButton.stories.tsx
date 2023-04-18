import { Meta, StoryObj } from '@storybook/react'

import { GenresButton } from './GenresButton'

const meta: Meta<typeof GenresButton> = {
  title: 'GenresButton',
  tags: ['autodocs'],
  component: GenresButton,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof GenresButton>

export const Default: Story = {
  args: {},
}
