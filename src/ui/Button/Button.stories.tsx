import { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import '@styles/index.scss'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      description: 'Размер',
    },
    icon: {
      control: { type: 'select' },
      description: 'Название иконки',
    },
    background: {
      control: { type: 'select' },
      description: 'Фон',
    },
    withBorder: {
      control: { type: 'select' },
      description: 'Рамка',
    },
    text: {
      control: 'text',
      description: 'Основной текст на кнопке',
    },
    subText: {
      type: 'string',
      description: 'Дополнительный текст на кнопке. Не работает без основного текста',
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

export const Player: Story = {
  name: 'С двойным текстом',
  args: {
    size: 'big',
    text: 'Смотреть с рекламой',
    subText: 'серия 1 сезон 1',
  },
}

export const PrimaryMob: Story = {
  name: 'Для мобильных устройств',
  args: {
    size: 'small',
    background: 'gray',
    text: 'Смотреть 30 дней за 1₽',
  },
}

export const Primary: Story = {
  args: {
    background: 'primary',
    text: 'Оплатить подписку',
  },
}

export const Secondary: Story = {
  args: {
    size: 'middle',
    text: 'Смотреть по подписке',
  },
}

export const Trailer: Story = {
  name: 'Серая с иконкой',
  args: {
    icon: 'search',
    background: 'gray',
    text: 'Трейлер',
  },
}

export const Search: Story = {
  name: 'Прозрачная с иконкой',
  args: {
    background: 'transparent',
    icon: 'search',
    text: 'Поиск',
  },
}

export const BorderSm: Story = {
  name: 'Прозрачная с рамкой маленькая',
  args: {
    withBorder: 'borderSm',
    text: 'Оценить',
  },
}

export const RateMd: Story = {
  name: 'Прозрачная с рамкой средняя',
  args: {
    withBorder: 'borderMd',
    text: 'Написать рецензию',
  },
}

export const Sign_In: Story = {
  name: 'Это не кнопка, а ссылка',
  args: {
    icon: 'profile',
    background: 'transparent',
    withBorder: 'borderBg',
    size: 'big',
  },
}

export const Filter: Story = {
  args: {
    background: 'transparent',
    text: 'Фильтры',
  },
}

export const Language: Story = {
  args: {
    icon: 'language',
    background: 'transparent',
    size: 'big',
  },
}
