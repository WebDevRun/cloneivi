import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Input',
  tags: ['autodocs'],
  component: Input,
  argTypes: {
    type: {
      description: 'Тип инпута',
    },
    label: {
      description: 'Текст инпута',
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Найти фильм:',
    type: 'text',
  },
}
