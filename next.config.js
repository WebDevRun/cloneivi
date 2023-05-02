const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
module.exports = nextConfig = {
  reactStrictMode: true,
  i18n,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thumbs.dfs.ivi.ru',
        port: '',
      },
    ],
  },
}
