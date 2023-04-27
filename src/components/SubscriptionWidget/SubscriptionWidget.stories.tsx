import { Meta, StoryObj } from '@storybook/react'

import { SubscriptionWidget } from './SubscriptionWidget'
import '@styles/index.scss'

const meta: Meta<typeof SubscriptionWidget> = {
  title: 'SubscriptionWidget',
  component: SubscriptionWidget,
  tags: ['autodocs'],
  argTypes: {},
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

export const Widget: Story = {
  args: {
    title: 'Подписка Иви',
    text: 'От 199 ₽ за месяц',
    textButton: 'Смотреть на SmartTV',
    note: 'Отключить можно в любой момент',
  },
}
