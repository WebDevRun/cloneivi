
import { Meta, StoryObj } from '@storybook/react'

import { FilterSelectorButton } from './FilterSelectorButton'

const meta: Meta<typeof FilterSelectorButton> = {
  title: 'FilterSelectorButton',
  tags: ['autodocs'],
  component: FilterSelectorButton,
  argTypes: {
    disabled: {
      type: 'boolean',
      description: 'Отключение кнопки',
    },
    active: {
      type: 'boolean',
      description: 'Активация всплывающего меню'
    },
    selectedItems: {
      description: 'Массив выбранных объектов',
    },
    name: {
      type: 'string',
      description: 'Имя селектора'
    },
    setActive: {
      type: 'function',
      description: 'Функция для изменения состояния'
    }
  }
}

export default meta

type Story = StoryObj<typeof FilterSelectorButton>;

export const Default: Story = {
  args: {
    name: 'Жанры',
    active: false,
    selectedItems: [],
  }
}

export const WithSelectedItems: Story = {
  args: {
    name: 'Жанры',
    active: false,
    selectedItems: ['Детектив, Артхаус'],
  }
}

export const WithFullySelectedItems: Story = {
  args: {
    name: 'Жанры',
    active: false,
    selectedItems: ['Детектив', 'Артхаус', 'Мультфильм', 'Триллер', 'Военные'],
  }
}

export const Active: Story = {
  args: {
    name: 'Жанры',
    active: true,
    selectedItems: [],
  }
}

export const Disabled: Story = {
  args: {
    name: 'Жанры',
    active: false,
    disabled: true,
    selectedItems: [],
  }
}