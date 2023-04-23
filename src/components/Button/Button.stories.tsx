import { Button } from './Button'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    mode: 'primary',
  },
  argTypes: {
    mode: {
      options: [
        'primary',
        'primaryMob',
        'secondary',
        'player',
        'trailer',
        'share',
        'signIn',
        'search',
        'defer',
        'free',
        'rateSm',
        'rateMd',
        'filter',
        'language',
      ],
      control: { type: 'select' },
      description: 'Назначение кнопки',
    },
    text: {
      type: 'string',
      description: 'Основной текст на кнопке',
    },
    subText: {
      type: 'string',
      description: 'Дополнительный текст на кнопке',
    },
    iconSrc: {
      type: 'string',
      description: 'Иконка',
    },
    iconAlt: {
      type: 'string',
      description: 'Alt текст',
    },
    onClick: {
      type: 'function',
      description: 'Обработчик нажатия',
    },
  },

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
  name: 'Для кнопки с модом primary',
  args: {
    mode: 'primary',
    text: 'pay',
  },
}


export const PrimaryMob: Story = {
  args: {
    mode: 'primaryMob',
    text: 'Смотреть 30 дней за 1₽',
  },
}

export const Secondary: Story = {
  render: () => <Button mode="secondary" text="Смотреть по подписке" />,
}

export const Language: Story = {
  args: {
    mode: 'language',
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
    mode: 'signIn',
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
    mode: 'rateSm',
    text: 'Оценить',
  },
}

export const RateMd: Story = {
  args: {
    mode: 'rateMd',
    text: 'Написать рецензию',
  },
}

export const Filter: Story = {
  args: {
    mode: 'filter',
    text: 'Фильтры',
  },
}

