import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { setupStore } from '@/store/store'
import '@styles/index.scss'

import { Comments } from './Comments'

const meta: Meta<typeof Comments> = {
  title: 'Comments',
  tags: ['autodocs'],
  component: Comments,
}

export default meta

type Story = StoryObj<typeof Comments>

export const Default: Story = {
  decorators: [
    (Story) => {
      const store = setupStore()

      return (
        <Provider store={store}>
          <Story />
        </Provider>
      )
    },
  ],
}
