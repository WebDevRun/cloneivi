import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { PersonFilmography } from './PersonFilmography'

const meta: Meta<typeof PersonFilmography> = {
  title: 'PersonFilmography',
  tags: ['autodocs'],
  component: PersonFilmography,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof PersonFilmography>

export const Default: Story = {
  args: {},
}
