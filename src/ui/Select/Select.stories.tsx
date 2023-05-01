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
      description: 'Текст селекта'
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
      description: 'Активен ли элемент'
    },
    onClickHandler: {
      description: 'Функция при клике на инпут'
    },
    value: {
      type: 'string' || 'number',
      description: 'Значение инпута'
    }
  },
}

export default meta

type Story = StoryObj<typeof Select>

export const radioSelectChecked: Story = {
  args: {
    type: 'radio',
    name: 'Америка',
    category: 'county',
    checked: true,
    onClickHandler: () => {},
    value: 'USA'
  },
}

export const radioSelect: Story = {
  args: {
    type: 'radio',
    name: 'Америка',
    category: 'county',
    checked: false,
    onClickHandler: () => {},
    value: 'USA'
  },
}

export const radioSelectDisabled: Story = {
  args: {
    type: 'radio',
    name: 'Америка',
    category: 'county',
    checked: false,
    onClickHandler: () => {},
    value: 'USA',
    disabled: true
  },
}

export const checkboxSelectChecked: Story = {
  args: {
    type: 'checkbox',
    name: 2002,
    category: 'year',
    checked: true,
    onClickHandler: () => {},
  },
}

export const checkboxSelect: Story = {
  args: {
    type: 'checkbox',
    name: 2002,
    category: 'year',
    checked: false,
    onClickHandler: () => {},
  },
}

export const checkboxSelectDisabled: Story = {
  args: {
    type: 'checkbox',
    name: 2002,
    category: 'year',
    checked: false,
    onClickHandler: () => {},
    disabled: true
  },
}