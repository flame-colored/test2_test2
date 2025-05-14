/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://www.pngkit.com/png/full/715-7154118_png.png',
    listUrl: 'https://github.com/flame-colored/test2_test2/',
    contactUrl: 'https://github.com/flame-colored/test2_test2/issues',
  },
  reactStrictMode: true,
  basePath: '/flame-colored/test2_test2/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
