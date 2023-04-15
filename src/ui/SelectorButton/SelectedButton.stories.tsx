import { SelectorButton } from './index'

import type { Meta, StoryObj } from '@storybook/react'


const meta: Meta<typeof SelectorButton> = {
  title: 'Selector/SelectorButton',
  component: SelectorButton,
  argTypes: {
    disabled: {
      type: 'boolean',
      description: 'Отключение кнопки',
      options: [true, false],
      controls: { type: 'radio' }
    },
    active: {
      type: 'boolean',
      description: 'Активация всплывающего меню',
      options: [true, false],
      controls: { type: 'radio' }
    },
    selectedItems: {
      description: 'Массив выбранных объектов',
    },
    name: {
      type: 'string',
      description: 'Имя селектора'
    }
  }
}

export default meta

type Story = StoryObj<typeof SelectorButton>;

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