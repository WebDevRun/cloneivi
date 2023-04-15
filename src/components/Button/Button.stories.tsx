import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Call } from './svg'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    mode: 'primary',
    label: 'Оплатить подписку',
  },
}

export const Secondary: Story = {
  args: {
    mode: 'secondary',
    label: 'Смотреть по подписке',
  },
}

export const Makoto: Story = {
  args: {
    mode: 'makoto',
    label: 'Смотреть по подписке',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Смотреть бесплатно',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Смотреть бесплатно',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}

export const Icon: Story = {
  args: {
    label: 'Button',
    children: <Call />,
  },
}

export const OnlyIcon: Story = {
  args: {
    children: <Call />
  },
}
