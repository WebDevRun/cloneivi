import { Meta, StoryObj } from '@storybook/react'

import { FilterSelector } from './FilterSelector'

const meta: Meta<typeof FilterSelector> = {
  title: 'FilterSelector',
  tags: ['autodocs'],
  component: FilterSelector,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof FilterSelector>

export const Default: Story = {
  args: {},
}
