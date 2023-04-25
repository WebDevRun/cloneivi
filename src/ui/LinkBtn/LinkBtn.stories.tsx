import { Meta, StoryObj } from '@storybook/react'

import googlePlay from '../../assets/images/install/google-play.svg'
import img from '../../assets/img.jpg'

import { LinkBtn } from './LinkBtn'
import '../../styles/index.scss'

const meta: Meta<typeof LinkBtn> = {
  title: 'FooterLink',
  component: LinkBtn,
  tags: ['autodocs'],
  argTypes: {
    type: {
      type: 'string',
      description: 'Изменение вида кнопки',
      options: ['square', 'circle'],
      control: { type: 'radio' },
    },
    href: {
      type: 'string',
      description: 'URL ссылки',
    },
    iconSrc: {
      type: 'string',
      description: 'URL картинки',
      defaultValue: '',
    },
    iconAlt: {
      type: 'string',
      description: 'Альтернативный тект если не отображается картинка',
    },
    text: {
      type: 'string',
      description: 'Основной текст',
    },
    subText: {
      type: 'string',
      description: 'Дополнительный текст',
    },
  },
}

export default meta
type Story = StoryObj<typeof LinkBtn>

export const WithoutIcon: Story = {
  args: {
    mode: 'footer',
    type: 'square',
    text: 'Play Store',
    subText: 'Загрузить в',
    href: '#',
  },
}

export const WithoutSutText: Story = {
  args: {
    mode: 'footer',
    type: 'square',
    text: 'Click me',
    iconSrc: googlePlay,
    iconAlt: 'googlePlay',
    href: '#',
  },
}

export const WithoutText: Story = {
  args: {
    mode: 'footer',
    type: 'circle',
    iconSrc: googlePlay,
    iconAlt: 'googlePlay',
    href: '#',
  },
}

export const WithAll: Story = {
  args: {
    mode: 'footer',
    type: 'square',
    text: 'Play Store',
    subText: 'Загрузить в',
    iconSrc: googlePlay,
    iconAlt: 'googlePlay',
    href: '#',
  },
}

export const WithImg: Story = {
  args: {
    mode: 'actor',
    href: '/',
    type: 'square',
    iconSrc: img,
    iconAlt: 'Actor Image',
    text: 'Франсуа Клюзе'
  }
}
