/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['api.w4coder.com','picsum.photos', 'localhost', 'api-nickscorp-app.herokuapp.com','assets.codepen.io','api.lorem.space','random.imagecdn.app',"i.ytimg.com"]
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
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
