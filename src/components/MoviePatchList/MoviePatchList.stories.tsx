import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import { MoviePatchList } from './MoviePatchList'

const meta: Meta<typeof MoviePatchList> = {
  title: 'MoviePatchList',
  tags: ['autodocs'],
  component: MoviePatchList,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof MoviePatchList>

export const Default: Story = {
  args: {},
}
