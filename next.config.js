const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
module.exports = nextConfig = {
  reactStrictMode: true,
  i18n,
}

const withSvgr = require('next-svgr');

module.exports = withSvgr({
  webpack(config, options) {
    return config;
  },
});