
import { Meta, StoryObj } from '@storybook/react'

import { FilterSelectorButton } from './FilterSelectorButton'

const meta: Meta<typeof FilterSelectorButton> = {
  title: 'filter/FilterSelectorButton',
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
    title: {
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
    title: 'Жанры',
    active: false,
    selectedItems: [],
  }
}

export const WithSelectedItems: Story = {
  args: {
    title: 'Жанры',
    active: false,
    selectedItems: ['Детектив, Артхаус'],
  }
}

export const Active: Story = {
  args: {
    title: 'Жанры',
    active: true,
    selectedItems: [],
  }
}

export const Disabled: Story = {
  args: {
    title: 'Жанры',
    active: false,
    disabled: true,
    selectedItems: [],
  }
}