import { Meta, StoryObj } from '@storybook/react'

import { FilterDropDown } from './FilterDropDown'

import '@styles/index.scss'

const GENRES = ['anime', 'biography', 'action', 'western', 'military', 'detective', 'children']

const meta: Meta<typeof FilterDropDown> = {
  title: 'filter/FilterDropDown',
  tags: ['autodocs'],
  component: FilterDropDown,
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер модального окна',
      options: ['big', 'small'],
      control: {type: 'radio'},
    },
    position: {
      type: 'string',
      description: 'Положение относительно родительского блока',
      options: ['left', 'center', 'right'],
      control: {type: 'radio'},
    },
    slider: {
      description: 'Компонент слайдера',
    },
    items: {
      description: 'Массив объектов для фильтра',
    },
    name: {
      type: 'string',
      description: 'Имя для input',
    },
  },
}

export default meta

type Story = StoryObj<typeof FilterDropDown>

export const BigLeft: Story = {
  args: {
    size: 'big',
    slider: <div style={{height: 88, background: '#000'}}/>,
    position: 'left',
    items: GENRES,
  },
  render: args => {
    return (
      <div style={{width: 300, height: 20, background: '#fff', position: 'relative', marginLeft: '500px'}}>
        <FilterDropDown {...args} />
      </div>
    )
  },
}

export const BigRight: Story = {
  args: {
    size: 'big',
    slider: <div style={{height: 88, background: '#000'}}/>,
    position: 'right',
    items: GENRES,
  },
  render: args => {
    return (
      <div style={{width: 300, height: 20, background: '#fff', position: 'relative', marginLeft: '500px'}}>
        <FilterDropDown {...args} />
      </div>
    )
  },
}

export const BigCenter: Story = {
  args: {
    size: 'big',
    slider: <div style={{height: 88, background: '#000'}}/>,
    position: 'center',
    items: GENRES,
  },
  render: args => {
    return (
      <div style={{width: 300, height: 20, background: '#fff', position: 'relative', marginLeft: '500px'}}>
        <FilterDropDown {...args} />
      </div>
    )
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    slider: <div style={{height: 88, background: '#000'}}/>,
    items: GENRES,
    name: 'genres',
  },
  render: args => {
    return (
      <div style={{width: 300, height: 20, background: '#fff', position: 'relative', marginLeft: '500px'}}>
        <FilterDropDown {...args} />
      </div>
    )
  },
}

