import { Meta, StoryObj } from '@storybook/react'

import { HeaderSvg } from '../../ui/svg/HeaderSvg'

import { Button } from './Button'
import '@styles/index.scss'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    background: {
      description: 'Настройка цвета кнопки',
    },
    horizontalPadding: {
      description: 'Горизонтальные внутренние отступы',
    },
    verticalPadding: {
      description: 'Вертикальные внутренние отступы',
    },
    onClick: {
      type: 'function',
      description: 'Обработчик событий клика',
    },
    border: {
      description: 'Настройка border стиля',
    },
    borderRadius: {
      description: 'Настройка border-radius стиля',
    },
    hoverBackground: {
      description: 'Настройка backround при наведении',
    },
    hoverBorder: {
      description: 'Настройка border при наведении',
    },
    hoverBoxShadow: {
      description: 'Настройка box-shadow наведении',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    background: '#ffffff',
    horizontalPadding: 7,
    verticalPadding: 11,
    hoverBackground: '#ff0f4d',
    hoverBoxShadow: '0 4px 16px hsla(0,0%,100%,.24)',
  },
  render: (args) => {
    return (
      <Button {...args}>
        <HeaderSvg icon="language" size={15} />
        <p style={{ marginLeft: 6 }}>Оплатить подписку</p>
      </Button>
    )
  },
}
