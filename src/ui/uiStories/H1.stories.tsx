import { Meta, StoryObj } from '@storybook/react'

import { H1 } from '../ui'
import '@styles/index.scss'

const meta: Meta<typeof H1> = {
  title: 'ui/H1',
  component: H1,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof H1>

export const Default: Story = {
  args: {
    children: 'Тайна пропавшей деревни',
  },
}
