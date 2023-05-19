import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { IconInText } from './IconInText'

const meta: Meta<typeof IconInText> = {
  title: 'IconInText',
  tags: ['autodocs'],
  component: IconInText,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof IconInText>

export const Default: Story = {
  args: {
    text: 'Современные мультфильмы',
    icon: 'arrowRight',
    sizeIcon: 'small',
  },
}

export const IconAfter: Story = {
  args: {
    text: 'за неделю',
    icon: 'top10',
    orderIcon: 'after',
    ext: true,
  },
}
