
import { Meta, StoryObj } from '@storybook/react'

import { FilterSelectorButton } from './FilterSelectorButton'

<<<<<<<< HEAD:src/ui/FilterSelector/FilterSelectorButton/FilterSelectorButton.stories.tsx
const meta: Meta<typeof FilterSelectorButton> = {
  title: 'filter/FilterSelectorButton',
========
const meta: Meta<typeof SelectorButton> = {
  title: 'Selector/SelectorButton',
>>>>>>>> a274c4840e65f3d34281e8f2adbdf764b425ca83:src/ui/FilterSelector/FilterSelectorButton/SelectorButton.stories.tsx
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