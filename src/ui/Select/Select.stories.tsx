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
    name: {
      type: 'string' || 'number',
      description: 'Текст селекта',
    },
    disabled: {
      type: 'boolean',
      description: 'Включение/выключение селекта',
    },
    category: {
      type: 'string',
      description: 'Название категории инпутов',
    },
    checked: {
      type: 'boolean',
      description: 'Активен ли элемент',
    },
    onClick: {
      description: 'Функция при клике на инпут',
    },
  },
}

export default meta

type Story = StoryObj<typeof Select>

export const RadioSelectChecked: Story = {
  args: {
    type: 'radio',
    name: 'Америка',
    category: 'county',
    checked: true,
    onClick: () => {},
  },
}

export const RadioSelect: Story = {
  args: {
    type: 'radio',
    name: 'Америка',
    category: 'county',
    checked: false,
    onClick: () => {},
  },
}

export const RadioSelectDisabled: Story = {
  args: {
    type: 'radio',
    name: 'Америка',
    category: 'county',
    checked: false,
    onClick: () => {},
    disabled: true,
  },
}

export const CheckboxSelectChecked: Story = {
  args: {
    type: 'checkbox',
    name: '2002',
    category: 'year',
    checked: true,
    onClick: () => {},
  },
}

export const CheckboxSelect: Story = {
  args: {
    type: 'checkbox',
    name: '2002',
    category: 'year',
    checked: false,
    onClick: () => {},
  },
}

export const CheckboxSelectDisabled: Story = {
  args: {
    type: 'checkbox',
    name: '2002',
    category: 'year',
    checked: false,
    onClick: () => {},
    disabled: true,
  },
}
