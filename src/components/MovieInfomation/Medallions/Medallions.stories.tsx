import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Medallions } from './Medallions'

const meta: Meta<typeof Medallions> = {
  title: 'Medallions',
  tags: ['autodocs'],
  component: Medallions,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Medallions>

export const Default: Story = {
  args: {},
}
