import { Meta, StoryObj } from '@storybook/react'

import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  tags: ['autodocs'],
  component: Slider,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {},
}
