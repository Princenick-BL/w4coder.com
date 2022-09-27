/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // put the rest of config here

  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'localhost', 'api-nickscorp-app.herokuapp.com','assets.codepen.io','api.lorem.space']
  }, 
   
})

// module.exports = nextConfig
