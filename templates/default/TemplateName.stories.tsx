import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { TemplateName } from './TemplateName'

const meta: Meta<typeof TemplateName> = {
  title: 'TemplateName',
  tags: ['autodocs'],
  component: TemplateName,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof TemplateName>

export const Default: Story = {
  args: {},
}
