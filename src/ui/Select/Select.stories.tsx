import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'controls/Select',
  tags: ['autodocs'],
  component: Select,
  argTypes: {
    type: {
      type: 'string',
      description: 'Тип input в select',
      options: ['radio', 'checkbox'],
      control: { type: 'radio' },
    },
    text: {
      type: 'string',
      description: 'Текст селекта'
    },
    disabled: {
      type: 'boolean',
      description: 'Включение/выключение селекта',
    }
  },
}

export default meta

type Story = StoryObj<typeof Select>

export const radioSelect: Story = {
  args: {
    type: 'radio',
    text: 'Америка'
  },
}

export const checkboxSelect: Story = {
  args: {
    type: 'checkbox',
    text: '2002 год'
  },
}

export const checkboxDisabled: Story = {
  args: {
    type: 'checkbox',
    text: '2023 год',
    disabled: true
  },
}
