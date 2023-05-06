import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { PersonHeader } from './PersonHeader'

const meta: Meta<typeof PersonHeader> = {
  title: 'Person/PersonHeader',
  tags: ['autodocs'],
  component: PersonHeader,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof PersonHeader>

export const Default: Story = {
  args: {},
}
