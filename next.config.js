/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '/styles/assets/welcome-image.jpeg',
      },
    ],
  },
}