/** @type {import('next').NextConfig} */

const withTailwind = require('tailwindcss/plugin');



const nextConfig = {
  experimental: {
    appDir: true,
  },
}
module.exports = withTailwind();
module.exports = nextConfig
