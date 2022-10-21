/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // put the rest of config here

  reactStrictMode: true,
  images: {
    domains: ['api.w4coder.com','picsum.photos', 'localhost', 'api-nickscorp-app.herokuapp.com','assets.codepen.io','api.lorem.space']
  }, 
  async rewrites() {
    return [{ source: "/blog/:path*", destination: "/api/:path*" }];
  },
   
})

// module.exports = nextConfig
