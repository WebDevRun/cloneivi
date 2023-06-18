import { Meta, StoryObj } from '@storybook/react'

import { GENRES_ICONS } from '@/utils/consts/filters'

import { FilterSelector } from './FilterSelector'

const GENRES = ['anime', 'biography', 'action', 'western', 'military', 'detective', 'children']

const meta: Meta<typeof FilterSelector> = {
  title: 'filter/FilterSelector',
  tags: ['autodocs'],
  component: FilterSelector,
  argTypes: {
    position: {
      type: 'string',
      description: 'Позиционирование модального окна относительно кнопки',
      options: ['left', 'center', 'right'],
      control: {type: 'radio'},
    },
    allFilters: {
      description: 'Массив всех фильтров',
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
    setActiveModal: {
      description: 'функция для выбора активного drop down'
    },
    selectedFilters: {
      description: 'Массив выбранных фильтров'
    },
    filterRedirect: {
      description: 'Функция для редиректа при выборе фильтра'
    }
  },
}

export default meta

type Story = StoryObj<typeof FilterSelector>

export const WithBigLeftModal: Story = {
  args: {
    title: 'Жанры',
    position: 'left',
    modalSize: 'big',
    category: 'genre',
    activeModal: 'genre',
    setActiveModal: () => {
    },
    allFilters: GENRES_ICONS,
    filterRedirect: () => {},
    selectedFilters: [],
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
    position: 'right',
    modalSize: 'big',
    category: 'genre',
    activeModal: 'genre',
    setActiveModal: () => {
    },
    allFilters: GENRES_ICONS,
    filterRedirect: () => {},
    selectedFilters: [],
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
    position: 'center',
    modalSize: 'big',
    category: 'genre',
    activeModal: 'genre',
    setActiveModal: () => {
    },
    allFilters: GENRES_ICONS,
    filterRedirect: () => {},
    selectedFilters: [],
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
    modalSize: 'small',
    category: 'genre',
    activeModal: 'genre',
    setActiveModal: () => {
    },
    allFilters: GENRES_ICONS,
    filterRedirect: () => {},
    selectedFilters: [],
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
    position: 'center',
    modalSize: 'big',
    category: 'genre',
    activeModal: '',
    setActiveModal: () => {
    },
    allFilters: GENRES_ICONS,
    filterRedirect: () => {},
    selectedFilters: [],
  },
  render: args => {
    return (
      <div style={{width: 300, marginLeft: '500px'}}>
        <FilterSelector {...args} />
      </div>
    )
  },
}

