import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-react-i18next',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve('src'),
        '@components': path.resolve('src', 'components'),
        '@ui': path.resolve('src', 'ui'),
        '@pages': path.resolve('src', 'pages'),
        '@layouts': path.resolve('src', 'layouts'),
        '@assets': path.resolve('src', 'assets'),
        '@styles': path.resolve('src', 'styles'),
        '@public': path.resolve('public'),
        'next-i18next': 'react-i18next',
      }
    }
    return config
  },
}

export default config
