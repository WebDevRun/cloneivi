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
    text: 'Оплатить подписку',
  },
}

export const Secondary: Story = {
  args: {
    mode: 'secondary',
    text: 'Смотреть по подписке',
  },
}

export const Makoto: Story = {
  args: {
    mode: 'makoto',
    text: 'Смотреть по подписке',
  },
}

export const Player: Story = {
  args: {
    mode: 'player',
    text: 'Смотреть с рекламой',
    subText: 'серия 1 сезон 1'
  },
}

export const Trailer: Story = {
  args: {
    mode: 'trailer',
    text: 'Трейлер',
  },
}


export const Share: Story = {
  args: {
    mode: 'share',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    text: 'Смотреть бесплатно',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    text: 'Смотреть бесплатно',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    text: 'Button',
  },
}

export const Icon: Story = {
  args: {
    text: 'Button',
    children: <Call />,
  },
}

export const OnlyIcon: Story = {
  args: {
    children: <Call />
  },
}
