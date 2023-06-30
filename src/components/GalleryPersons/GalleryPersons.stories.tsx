import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { GalleryPersons } from './GalleryPersons'

const meta: Meta<typeof GalleryPersons> = {
  title: 'GalleryPersons',
  tags: ['autodocs'],
  component: GalleryPersons,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof GalleryPersons>

export const Default: Story = {
  args: {},
}
