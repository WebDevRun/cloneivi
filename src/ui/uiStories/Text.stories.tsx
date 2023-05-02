import { Meta, StoryObj } from '@storybook/react'

import { Text } from '../ui'
import '@styles/index.scss'

const meta: Meta<typeof Text> = {
  title: 'ui/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Тайна пропавшей деревни',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      description: 'Вариант текста',
    },
    as: {
      control: { type: 'none' },
    },
    cx: {
      control: { type: 'none' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const TextNormal: Story = {
  name: 'Обычный текст',
}

export const TextBold: Story = {
  name: 'Жирный',
  args: {
    variant: 'bold',
  },
}

export const TextSmall: Story = {
  name: 'Компактный',
  args: {
    variant: 'small',
  },
}

export const TextTitle: Story = {
  name: 'Обычный заголовок',
  args: {
    variant: 'title',
  },
}

export const TextTitleBig: Story = {
  name: 'Большой заголовок',
  args: {
    variant: 'titleBig',
  },
}
