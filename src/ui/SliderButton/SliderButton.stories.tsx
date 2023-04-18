import { Meta, StoryObj } from '@storybook/react'

import { SliderButton } from './SliderButton'

const meta: Meta<typeof SliderButton> = {
  title: 'SliderButton',
  tags: ['autodocs'],
  component: SliderButton,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof SliderButton>

export const Default: Story = {
  args: {},
}
