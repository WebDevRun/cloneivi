import { Meta, StoryObj } from '@storybook/react'

import googlePlay from '../../assets/images/install/google-play.svg'

import { FooterLink } from './FooterLink'
import '../../styles/index.scss'

const meta: Meta<typeof FooterLink> = {
  title: 'FooterLink',
  component: FooterLink,
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
type Story = StoryObj<typeof FooterLink>

export const WithoutIcon: Story = {
  args: {
    type: 'square',
    text: 'Play Store',
    subText: 'Загрузить в',
    href: '#',
  },
}

export const WithoutSubText: Story = {
  args: {
    type: 'square',
    text: 'Welcome',
    iconSrc: googlePlay,
    iconAlt: 'googlePlay',
    href: '#',
  },
}

export const WithoutText: Story = {
  args: {
    type: 'circle',
    iconSrc: googlePlay,
    iconAlt: 'googlePlay',
    href: '#',
  },
}

export const WithAll: Story = {
  args: {
    type: 'square',
    text: 'Play Store',
    subText: 'Загрузить в',
    iconSrc: googlePlay,
    iconAlt: 'googlePlay',
    href: '#',
  },
}
