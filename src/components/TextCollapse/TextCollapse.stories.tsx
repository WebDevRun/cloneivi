import { Meta, StoryObj } from '@storybook/react'

import '@styles/index.scss'

import data from './data.json'
import { TextCollapse } from './TextCollapse'

const meta: Meta<typeof TextCollapse> = {
  title: 'TextCollapse',
  tags: ['autodocs'],
  component: TextCollapse,
  argTypes: {
    children: {
      description:
        'Текст, обернутый в HTML тег. Если текст находится в нескольких тегах, то эти теги нужно обернуть в родительский тег',
    },
    maxChar: {
      description: 'Количество показываемых символов в свернутом виде'
    },
    textForCollapse: {
      description: 'Текст на кнопке в развернутом виде'
    },
    textForExpand: {
      description: 'Текст на кнопке в свернутом виде'
    }
  },
}

export default meta

type Story = StoryObj<typeof TextCollapse>

export const Default: Story = {
  args: {
    children: (
      <>
        <section>
          <div>
            <p style={{ margin: '1rem 0' }}>{data.text1}</p>
            <p>{data.text2}</p>
          </div>
          <p style={{ margin: '1rem' }}>{data.text3}</p>
        </section>
        <p>{data.text4}</p>
      </>
    ),
    maxChar: 228,
    textForCollapse: 'Свернуть детали',
    textForExpand: 'Детали о фильме',
  },
}
