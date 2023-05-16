import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { TestLocale } from './TestLocale'

const meta: Meta<typeof TestLocale> = {
  title: 'TestLocale',
  tags: ['autodocs'],
  component: TestLocale,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof TestLocale>

export const Default: Story = {
  args: {},
}
