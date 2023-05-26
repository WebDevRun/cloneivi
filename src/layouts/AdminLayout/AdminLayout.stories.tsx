import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { AdminLayout } from './AdminLayout'

const meta: Meta<typeof AdminLayout> = {
  title: 'AdminLayout',
  tags: ['autodocs'],
  component: AdminLayout,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof AdminLayout>

export const Default: Story = {
  args: {},
}
