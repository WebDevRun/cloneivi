import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { makeStore } from '@/store/store'

import '@styles/index.scss'

import { GenrePatchList } from './GenrePatchList'

const meta: Meta<typeof GenrePatchList> = {
  title: 'Admin/GenrePatchList',
  tags: ['autodocs'],
  component: GenrePatchList,
}

export default meta

type Story = StoryObj<typeof GenrePatchList>

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
