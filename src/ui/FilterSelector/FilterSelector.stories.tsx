import { Meta, StoryObj } from '@storybook/react'

import { FilterSelector } from './FilterSelector'

const GENRES = ['anime', 'biography', 'action', 'western', 'military', 'detective', 'children']


const meta: Meta<typeof FilterSelector> = {
  title: 'filter/FilterSelector',
  tags: ['autodocs'],
  component: FilterSelector,
  argTypes: {
    setSelectedItems: {
      description: 'Функция для выбора элемента',
    },
    selectedItems: {
      description: 'Массив выбранных элементов',
    },
    position: {
      type: 'string',
      description: 'Позиционирование модального окна относительно кнопки',
      options: ['left', 'center', 'right'],
      control: {type: 'radio'},
    },
    items: {
      description: 'Массив объектов',
    },
    title: {
      type: 'string',
      description: 'Имя селектора',
    },
    modalSize: {
      type: 'string',
      description: 'Размер модального окна',
      options: ['big', 'small'],
      control: {type: 'radio'},
    },
    category: {
      type: 'string',
      description: 'Категория селекторов в модальном окне',
      options: ['genre', 'country', 'year', 'rating'],
      control: {type: 'radio'},
    },
    activeModal: {
      type: 'string',
      description: 'Какое модальное окно сейчас активно',
      options: ['', 'genre', 'country', 'year', 'rating'],
      control: {type: 'radio'},
    },
  },
}

export default meta

type Story = StoryObj<typeof FilterSelector>

export const WithBigLeftModal: Story = {
  args: {
    title: 'Жанры',
    selectedItems: ['anime'],
    setSelectedItems: () => {
    },
    position: 'left',
    items: GENRES,
    modalSize: 'big',
    category: 'genre',
    activeModal: 'genre',
    setActiveModal: () => {
    },
  },
  render: args => {
    return (
      <div style={{width: 300, marginLeft: '500px'}}>
        <FilterSelector {...args} />
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
    modalSize: 'big',
    category: 'genre',
    activeModal: 'genre',
    setActiveModal: () => {
    },
  },
  render: args => {
    return (
      <div style={{width: 300, marginLeft: '500px'}}>
        <FilterSelector {...args} />
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
    modalSize: 'big',
    category: 'genre',
    activeModal: 'genre',
    setActiveModal: () => {
    },
  },
  render: args => {
    return (
      <div style={{width: 300, marginLeft: '500px'}}>
        <FilterSelector {...args} />
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
    name: 'genres',
    category: 'genre',
    activeModal: 'genre',
    setActiveModal: () => {
    },
  },
  render: args => {
    return (
      <div style={{width: 300, marginLeft: '500px'}}>
        <FilterSelector {...args} />
      </div>
    )
  },
}

export const UnActive: Story = {
  args: {
    title: 'Жанры',
    selectedItems: ['anime'],
    position: 'center',
    items: GENRES,
    modalSize: 'big',
    category: 'genre',
    activeModal: '',
    setActiveModal: () => {
    },
  },
  render: args => {
    return (
      <div style={{width: 300, marginLeft: '500px'}}>
        <FilterSelector {...args} />
      </div>
    )
  },
}

