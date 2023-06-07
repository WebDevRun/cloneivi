import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { ModalWindow } from './ModalWindow'

const meta: Meta<typeof ModalWindow> = {
  title: 'ModalWindow',
  tags: ['autodocs'],
  component: ModalWindow,
  argTypes: {
    active: {
      description:
        'Здесь мы передаем булево значение состояния, которое указывает, открыто ли модальное окно или нет.',
    },
    children: {
      description: 'Само модальное окно',
    },
    setActive: {
      description: 'Функция которая меняет state active',
    },
  },
}

export default meta

type Story = StoryObj<typeof ModalWindow>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div>
        <button>Open Modal</button>
        <Story />
      </div>
    ),
  ],
  args: {
    active: false,
    setActive: () => {},
    children: (
      <div
        style={{
          background: 'gray',
          borderRadius: '10px',
          width: '200px',
          height: '100px',
        }}
      >
        <h2>Modal Window</h2>
      </div>
    ),
  },
}

export const Playground = () => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div>
      <button onClick={() => setActive(true)}>
        Open Modal
      </button>
      <ModalWindow active={active} setActive={setActive}>
        <div
          style={{
            background: 'gray',
            borderRadius: '10px',
            width: '200px',
            height: '100px',
          }}
        >
          <h2>Modal Window</h2>
        </div>
      </ModalWindow>
    </div>
  )
}
