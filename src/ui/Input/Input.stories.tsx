import { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

import '@styles/index.scss'

const meta: Meta<typeof Input> = {
  title: 'Input',
  tags: ['autodocs'],
  component: Input,
  argTypes: {
    type: {
      description: 'Тип инпута',
    },
    description: {
      description: 'Описание перед инпутом',
    },
    placeholder: {
      description: 'Подпись инпута',
    },
    setText: {
      description: 'Функция для задания теста',
    },
    text: {
      description: 'Текст инпута',
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    description: 'Найти фильм:',
    placeholder: 'Найти',
    text: '',
    type: 'text',
  },
}
