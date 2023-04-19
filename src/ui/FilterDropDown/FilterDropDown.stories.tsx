import { Meta, StoryObj } from '@storybook/react'

import { FilterDropDown } from './FilterDropDown'

const meta: Meta<typeof FilterDropDown> = {
  title: 'FilterDropDown',
  tags: ['autodocs'],
  component: FilterDropDown,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof FilterDropDown>

export const Default: Story = {
  args: {},
}
