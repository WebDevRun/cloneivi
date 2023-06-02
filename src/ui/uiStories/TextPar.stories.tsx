import { Meta, StoryObj } from '@storybook/react'

import { TextPar } from '../ui'
import '@styles/index.scss'

const meta: Meta<typeof TextPar> = {
  title: 'ui/TextPar',
  component: TextPar,
  tags: ['autodocs'],
  args: {
    children: 'Тайна пропавшей деревни',
  },
  argTypes: {
    variant: {
      control: { type: 'select', },
      options: ['normal', 'body'],
      description: 'Вариант текста',
    },
  },
}

export default meta
type Story = StoryObj<typeof TextPar>

export const TextParNormal: Story = {
  name: 'Текст, заключенный в тег <p></p>',
}

export const TextParBody: Story = {
  name: 'Текст, заключенный в тег <p></p>',
  args: {
    variant: 'body',
  },
}
