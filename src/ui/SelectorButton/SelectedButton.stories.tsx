<<<<<<< HEAD
import { Meta, StoryObj } from '@storybook/react'

import { SelectorButton } from './SelectorButton'
=======
import type { Meta, StoryObj } from '@storybook/react'
import { SelectorButton } from './index'
>>>>>>> 535ccac (chore: selector button)


const meta: Meta<typeof SelectorButton> = {
  title: 'Selector/SelectorButton',
<<<<<<< HEAD
  tags: ['autodocs'],
=======
>>>>>>> 535ccac (chore: selector button)
  component: SelectorButton,
  argTypes: {
    disabled: {
      type: 'boolean',
      description: 'Отключение кнопки',
<<<<<<< HEAD
    },
    active: {
      type: 'boolean',
      description: 'Активация всплывающего меню'
=======
      options: [true, false],
      controls: { type: 'radio' }
    },
    active: {
      type: 'boolean',
      description: 'Активация всплывающего меню',
      options: [true, false],
      controls: { type: 'radio' }
>>>>>>> 535ccac (chore: selector button)
    },
    selectedItems: {
      description: 'Массив выбранных объектов',
    },
    name: {
      type: 'string',
      description: 'Имя селектора'
<<<<<<< HEAD
    },
    setActive: {
      type: 'function',
      description: 'Функция для изменения состояния'
=======
>>>>>>> 535ccac (chore: selector button)
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
<<<<<<< HEAD
    selectedItems: [],
=======
    selectedItems: [''],
>>>>>>> 535ccac (chore: selector button)
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