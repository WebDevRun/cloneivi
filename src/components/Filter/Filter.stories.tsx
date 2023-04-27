import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Filter } from './Filter'

const meta: Meta<typeof Filter> = {
  title: 'filter/Filter',
  tags: ['autodocs'],
  component: Filter,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Filter>

export const Default: Story = {
  args: {},
}
