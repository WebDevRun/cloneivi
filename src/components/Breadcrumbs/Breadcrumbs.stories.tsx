import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Breadcrumbs } from './Breadcrumbs'
import crumbsData from './data.json'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Breadcrumbs',
  tags: ['autodocs'],
  component: Breadcrumbs,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  args: {
    items: crumbsData
  },
}
