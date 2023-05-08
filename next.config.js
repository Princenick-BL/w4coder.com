const withSourceMaps = require('@zeit/next-source-maps');
const withOffline = require('next-offline');

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['ik.imagekit.io','api.w4coder.com','picsum.photos', 'localhost', 'api-nickscorp-app.herokuapp.com','assets.codepen.io','api.lorem.space','random.imagecdn.app',"i.ytimg.com","yt3.ggpht.com"]
  }, 
  async rewrites() {
    return [
      { source: "/blog/:path*", destination: "/api/:path*" },
      { 
        source: "/fr/sitemap_index.xml", 
        destination: "https://api.w4coder.com/sitemap_index/fr",
        locale: false
      },
      { 
        source: "/en/sitemap_index.xml", 
        destination: "https://api.w4coder.com/sitemap_index/en",
        locale: false
      },
      { 
        source: "/:lang/sitemap/:path*", 
        destination: "https://api.w4coder.com/sitemap/:lang/:path*",
        locale: false
      }
    ];
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiUrl: 'https://api.w4coder.com',
  },
};

module.exports = withSourceMaps(nextConfig);
