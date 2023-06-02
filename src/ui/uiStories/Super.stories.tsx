import { Meta, StoryObj } from '@storybook/react'

import { Super } from '../ui'
import '@styles/index.scss'

const meta: Meta<typeof Super> = {
  title: 'ui/Super',
  component: Super,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Super>

export const SuperNormal: Story = {
  args: {
    children: 'Тайна пропавшей деревни',
  },
}
