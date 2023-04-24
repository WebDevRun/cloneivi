import { Meta, StoryObj } from '@storybook/react'

import googlePlay from '../../assets/images/install/google-play.svg'

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
    type: 'square',
    text: 'Play Store',
    subText: 'Загрузить в',
    href: '#',
  },
}

export const WithoutSutText: Story = {
  args: {
    type: 'square',
    text: 'Click me',
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

export const WithImg: Story = {
  args: {
    href: '/',
    type: 'square',
    iconSrc: 'https://thumbs.dfs.ivi.ru/storage33/contents/f/f/06672be611ab9b9e54579c4f645460.jpg/44x44/?q=85',
    iconAlt: 'Actor Image'
  }
}
