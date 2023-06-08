import type { Preview } from '@storybook/react'
import React, { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'

import i18n from './i18n'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#100e19',
        },
      ],
    },
  },
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'ru', title: 'Русский' },
        ],
      },
    },
  },
  decorators: [
    (story, context) => {
      const { locale } = context.globals

      useEffect(() => {
        i18n.changeLanguage(locale)
      }, [locale])

      return <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>
    },
  ],
}

export default preview
