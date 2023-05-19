import { Meta, StoryObj } from '@storybook/react'

import { HeaderSvg } from '../svg/HeaderSvg'
import { H1 } from '../ui'
import { AddIcon } from '../ui'

import '@styles/index.scss'

const meta: Meta<typeof AddIcon> = {
  title: 'ui/AddIcon',
  component: AddIcon,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'none' },
    },
    cx: {
      control: { type: 'none' },
    },
  },
}

export default meta
type Story = StoryObj<typeof AddIcon>

export const Default: Story = {
  args: {
    children: 'Тайна пропавшей деревни',
    icon: <HeaderSvg icon='language' />,
  },
}

export const IconAfter: Story = {
  args: {
    children: 'Тайна пропавшей деревни',
    icon: <HeaderSvg icon='language' />,
    orderIcon: 'after',
  },
}