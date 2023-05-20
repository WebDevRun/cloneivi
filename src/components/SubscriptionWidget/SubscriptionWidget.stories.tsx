import { Meta, StoryObj } from '@storybook/react'

import posters from '../../components/SubscriptionWidget/posters.json'

import { SubscriptionWidget } from './SubscriptionWidget'

import '@styles/index.scss'

const meta: Meta<typeof SubscriptionWidget> = {
  title: 'SubscriptionWidget',
  component: SubscriptionWidget,
  tags: ['autodocs'],
  argTypes: {
    posters: {
      description: 'Данные для постеров',
    },
    title: {
      description: 'Заголовок',
    },
    text: {
      description: 'Дополнительный текст',
    },
    textButton: {
      description: 'Текст на кнопке',
    },
    note: {
      description: 'Дополнительный текст под кнопкой',
    },
    size: {
      description: 'Размер виджета',
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
type Story = StoryObj<typeof SubscriptionWidget>

export const WidgetSmall: Story = {
  args: {
    posters: posters.movies,
    title: 'Подписка Иви',
    text: 'От 199 ₽ за месяц',
    textButton: 'Смотреть на SmartTV',
    note: 'Отключить можно в любой момент',
  },
}

export const WidgetBig: Story = {
  args: {
    posters: posters.subscription,
    size: 'big',
    textButton: 'Смотреть на SmartTV',
  },
}
