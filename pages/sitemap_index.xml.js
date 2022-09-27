// pages/server-sitemap-index.xml/index.tsx
import { getServerSideSitemapIndex } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps = async (ctx) => {
    // Method to source urls from cms
    // const urls = await fetch('https//example.com/api')

    return getServerSideSitemapIndex(ctx, [
        'https://princenickballo.fr',
    ])
}

// Default export to prevent next.js errors
export default function SitemapIndex() { }