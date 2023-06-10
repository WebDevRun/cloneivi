import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

import '@styles/index.scss'

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}
