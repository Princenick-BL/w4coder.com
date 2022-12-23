/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.w4coder.com','picsum.photos', 'localhost', 'api-nickscorp-app.herokuapp.com','assets.codepen.io','api.lorem.space','random.imagecdn.app']
  }, 
  i18n: {
    locales: ['en-us', 'fr-fr'],
    defaultLocale: 'en-us',
  },
  async rewrites() {
    return [
      { source: "/blog/:path*", destination: "/api/:path*" },
      { source: "/sitemap_index.xml", destination: "https://api.w4coder.com/sitemap_index.xml" },
      { source: "/sitemap/:path*", destination: "https://api.w4coder.com/sitemap/:path*" }

    ];
  },
}

module.exports = nextConfig
