/** @type {import('next').NextConfig} */

const withTailwind = require('tailwindcss/plugin');



const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ]
  }
}
module.exports = withTailwind();
module.exports = nextConfig
