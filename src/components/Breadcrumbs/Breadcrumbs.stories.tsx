import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Breadcrumbs } from './Breadcrumbs'
import crumbsData from './data.json'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Breadcrumbs',
  tags: ['autodocs'],
  component: Breadcrumbs,
  argTypes: {
    items: {
      description: 'Данные в виде массива объектов'
    },
    separator: {
      description: 'Разделитель между элементами'
    }
  },
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const SlashDefault: Story = {
  args: {
    items: crumbsData,
    separator: 'slash',
  },
}

export const Dot: Story = {
  args: {
    items: crumbsData,
    separator: 'dot',
  },
}
