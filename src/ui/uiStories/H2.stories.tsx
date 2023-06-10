import { Meta, StoryObj } from '@storybook/react'

import { H2 } from '../ui'
import '@styles/index.scss'

const meta: Meta<typeof H2> = {
  title: 'ui/H2',
  component: H2,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof H2>

export const Default: Story = {
  name: 'Заголовок h2 (20px)',
  args: {
    children: 'Тайна пропавшей деревни',
  },
}
