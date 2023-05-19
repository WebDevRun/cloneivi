import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { IconInText } from './IconInText'

const meta: Meta<typeof IconInText> = {
  title: 'IconInText',
  tags: ['autodocs'],
  component: IconInText,
  argTypes: {
    text: {
      description: 'Текст',
    },
    icon: {
      control: { type: 'select' },
      description: 'Название иконки',
    },
    sizeIcon: {
      control: { type: 'select' },
      description: 'Размер иконки "16px | 20px | 32px | 56px"',
    },
    orderIcon: {
      control: { type: 'select' },
      description: 'Расположение иконки "перед | после" текста',
    },
    extIcon: {
      description: 'Если в параметре icon иконка выбрана, но не отображается, то переключите здесь',
    },
    textVariant: {
      control: { type: 'select' },
      description: 'Варианты текста',
    },
  },
}

export default meta

type Story = StoryObj<typeof IconInText>

export const Default: Story = {
  args: {
    text: 'Современные мультфильмы',
    icon: 'arrowRight',
  },
}

export const IconAfter: Story = {
  args: {
    text: 'за неделю',
    icon: 'top10',
    orderIcon: 'after',
    extIcon: true,
  },
}
