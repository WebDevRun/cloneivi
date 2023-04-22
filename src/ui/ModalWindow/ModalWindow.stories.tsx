import { Meta, StoryObj } from '@storybook/react'

import { ModalWindow } from './ModalWindow'

const meta: Meta<typeof ModalWindow> = {
  title: 'ModalWindow',
  tags: ['autodocs'],
  component: ModalWindow,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof ModalWindow>

export const Default: Story = {
  args: {},
}
