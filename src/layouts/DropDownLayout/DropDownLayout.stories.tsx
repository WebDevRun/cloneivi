import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'
import { DropDownLayout } from '@layouts/DropDownLayout/DropDownLayout'

const meta: Meta<typeof DropDownLayout> = {
  title: 'DropDownLayout',
  component: DropDownLayout,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Данные drop-down menu',
    },
    type: {
      type: 'string',
      description: 'Для какого компонента будет использоваться',
      options: ['filter', 'header'],
      control: { type: 'radio' },
    },
    position: {
      type: 'string',
      description: 'Позиционирование относительно родителя',
      options: ['left', 'center', 'right'],
      control: { type: 'radio' },
    },
    size: {
      type: 'string',
      description: 'Изменение размера drop-down menu',
      options: ['big', 'small'],
      control: { type: 'radio' },
    }
  },
}

export default meta
type Story = StoryObj<typeof DropDownLayout>

export const bigCenterFilter: Story = {
  args: {
    type: 'filter',
    position: 'center',
    size: 'big'
  },
}

export const smallLeftFilter: Story = {
  args: {
    type: 'filter',
    position: 'left',
    size: 'small'
  },
}

