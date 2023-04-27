import { Meta, StoryObj } from '@storybook/react'

import { FilterSelector } from './FilterSelector'

const GENRES = ['anime', 'biography', 'action', 'western', 'military', 'detective', 'children']


const meta: Meta<typeof FilterSelector> = {
  title: 'filter/FilterSelector',
  tags: ['autodocs'],
  component: FilterSelector,
  argTypes: {
    title: {
      type: 'string',
      description: 'Имя селектора'
    },
    selectedItems: {
      description: 'Массив выбранных элементов'
    },
    setSelectedItems: {
      description: 'Функция для выбора элемента'
    },
    position: {
      type: 'string',
      description: 'Позиционирование модального окна относительно кнопки'
    },
    items: {
      description: 'Массив объектов'
    },
    name: {
      type: 'string',
      description: 'Имя для radio кнопок'
    },
    modalSize: {
      type: 'string',
      description: 'Размер модального окна',
      options: ['big', 'small'],
      control: {type: 'radio'}
    }
  },
}

export default meta

type Story = StoryObj<typeof FilterSelector>

export const WithBigLeftModal: Story = {
  args: {
    title: 'Жанры',
    selectedItems: ['anime'],
    position: 'left',
    items: GENRES,
    modalSize: 'big'
  },
  render: args => {
    return (
      <div style={{width: 300, marginLeft: '500px'}}>
        <FilterSelector {...args}/>
      </div>
    )
  },
}

export const WithBigRightModal: Story = {
  args: {
    title: 'Жанры',
    selectedItems: ['anime'],
    position: 'right',
    items: GENRES,
    modalSize: 'big'
  },
  render: args => {
    return (
      <div style={{width: 300, marginLeft: '500px'}}>
        <FilterSelector {...args}/>
      </div>
    )
  },
}

export const WithBigCenterModal: Story = {
  args: {
    title: 'Жанры',
    selectedItems: ['anime'],
    position: 'center',
    items: GENRES,
    modalSize: 'big'
  },
  render: args => {
    return (
      <div style={{width: 300, marginLeft: '500px'}}>
        <FilterSelector {...args}/>
      </div>
    )
  },
}

export const WithSmallModal: Story = {
  args: {
    title: 'Жанры',
    selectedItems: ['anime'],
    items: GENRES,
    modalSize: 'small',
    name: 'genres'
  },
  render: args => {
    return (
      <div style={{width: 300, marginLeft: '500px'}}>
        <FilterSelector {...args}/>
      </div>
    )
  },
}
