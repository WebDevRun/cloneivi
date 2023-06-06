import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { makeStore } from '@/store/store'
import '@styles/index.scss'

import { MoviePatchList } from './MoviePatchList'

const meta: Meta<typeof MoviePatchList> = {
  title: 'Admin/MoviePatchList',
  tags: ['autodocs'],
  component: MoviePatchList,
}

export default meta

type Story = StoryObj<typeof MoviePatchList>

export const Default: Story = {
  decorators: [
    (Story) => {
      const store = makeStore()

      return (
        <Provider store={store}>
          <Story />
        </Provider>
      )
    },
  ],
}
