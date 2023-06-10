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

export const TextTitleXL: Story = {
  name: 'Большой div заголовок - titleXL (32px)',
  args: {
    variant: 'titleXL',
  },
}

export const TextTitleLarge: Story = {
  name: 'Большой div заголовок - titleLg (28px)',
  args: {
    variant: 'titleLg',
  },
}

export const TextTitleBig: Story = {
  name: 'Большой div заголовок - titleBg (24px)',
  args: {
    variant: 'titleBg',
  },
}

export const TextTitleMiddle: Story = {
  name: 'Обычный div заголовок - titleMd (20px)',
  args: {
    variant: 'titleMd',
  },
}

export const TextTitleSmall: Story = {
  name: 'Малый div заголовок - titleSm (15px)',
  args: {
    variant: 'titleSm',
  },
}

export const TextBold: Story = {
  name: 'Жирный - bold (15px)',
  args: {
    variant: 'bold',
  },
}

export const TextNormal: Story = {
  name: 'Обычный текст - normal (15px)',
}

export const TextSmall: Story = {
  name: 'Компактный - small (13px)',
  args: {
    variant: 'small',
  },
}