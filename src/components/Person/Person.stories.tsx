import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { Person } from './Person'

const meta: Meta<typeof Person> = {
  title: 'Person',
  tags: ['autodocs'],
  component: Person,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Person>

export const Default: Story = {
  args: {},
}
