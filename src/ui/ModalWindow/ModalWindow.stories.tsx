import { useArgs } from '@storybook/client-api'
import { Meta, StoryObj } from '@storybook/react'

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

export const Playground = () => {
  const [{ active }, updateArgs] = useArgs()
  const handleClose = () => updateArgs({ active: !active })

  return (
    <div>
      <button onClick={() => updateArgs({ active: !active })}>
        Open Modal
      </button>
      <ModalWindow active={active} setActive={handleClose}>
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
