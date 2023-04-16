import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

import logout from './logout.svg'
import playArrow from './play_arrow.svg'
import user from './user.svg'
import search from './search.svg'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],

  parameters: {
    backgrounds: {
      default: 'twitter',
      values: [
        { name: 'twitter', value: '#00aced' },
        { name: 'facebook', value: '#3b5998' },
      ],
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

export const Player: Story = {
  args: {
    mode: 'player',
    text: 'Смотреть с рекламой',
    subText: 'серия 1 сезон 1',
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
    text: 'Поделиться',
  },
}

export const Sign_In: Story = {
  args: {
    mode: 'sign_in',
    iconSrc: user,
  },
}

export const Search: Story = {
  args: {
    mode: 'search',
    text: 'Поиск',
  },
}

export const Defer: Story = {
  args: {
    mode: 'defer',
  },
}

export const Free: Story = {
  args: {
    mode: 'defer',
    text: 'Бесплатные мультфильмы',
  },
}

export const RateSm: Story = {
  args: {
    mode: 'rate_sm',
    text: 'Оценить',
  },
}

export const RateMd: Story = {
  args: {
    mode: 'rate_md',
    text: 'Написать рецензию',
  },
}

export const Filter: Story = {
  args: {
    mode: 'filter',
    text: 'Фильтры',
  },
}
