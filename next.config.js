const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
module.exports = nextConfig = {
  images : {
    domains : ['thumbs.dfs.ivi.ru']
  },
  reactStrictMode: true,
  i18n,
}
