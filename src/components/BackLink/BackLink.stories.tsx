import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { BackLink } from './BackLink'

const meta: Meta<typeof BackLink> = {
  title: 'BackLink',
  tags: ['autodocs'],
  component: BackLink,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof BackLink>

export const Default: Story = {
  args: {},
}
