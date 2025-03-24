/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar',
    localeDetection: false,
  },
  experimental: {
    appDir: true,
  },
  distDir: '.next',
  dir: 'src',
}

module.exports = nextConfig 