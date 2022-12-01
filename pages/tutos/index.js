import React from 'react'
import TutuosLayout from '../../layouts/tutosLayout'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

export default function Tutos({isBreakpoint}) {
  return (
    <>
        <NextSeo
            title="w4coder || Tutos"
            description="This example uses more of the available config options."
            canonical="https://w4coder.com"
            openGraph={{
            url: 'https://w4coder.com',
            description: 'Open Graph Description',
            // images: [
            //   {
            //     url: 'https://www.example.ie/og-image-01.jpg',
            //     width: 800,
            //     height: 600,
            //     alt: 'Og Image Alt',
            //     type: 'image/jpeg',
            //   },
            //   {
            //     url: 'https://www.example.ie/og-image-02.jpg',
            //     width: 900,
            //     height: 800,
            //     alt: 'Og Image Alt Second',
            //     type: 'image/jpeg',
            //   },
            //   { url: 'https://www.example.ie/og-image-03.jpg' },
            //   { url: 'https://www.example.ie/og-image-04.jpg' },
            // ],
            siteName: 'w4coder',
            }}
            
        />
    <TutuosLayout isBreakpoint={isBreakpoint}>
        
        <div>Tutos</div>
    </TutuosLayout>
    </>
  )
}
