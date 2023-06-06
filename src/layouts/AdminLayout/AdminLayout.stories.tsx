import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { AdminLayout } from './AdminLayout'

const meta: Meta<typeof AdminLayout> = {
  title: 'Admin/AdminLayout',
  tags: ['autodocs'],
  component: AdminLayout,
  argTypes: {
    children: {
      description: 'Next компонент',
    },
  },
}

export default meta

type Story = StoryObj<typeof AdminLayout>

export const Default: Story = {}
