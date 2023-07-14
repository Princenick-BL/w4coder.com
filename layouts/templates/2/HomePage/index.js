import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'
// import Cookies from '@/components/Cookies'
import { NextSeo } from 'next-seo';
import Head from 'next/head';

export default function HomePage({page1,topA,stories,lang,isBreakpoint}) {
  return (
    <>
      <NextSeo
        title="w4coder"
        description="This example uses more of the available config options."
        canonical="https://w4coder.com"
        openGraph={{
          url: 'https://w4coder.com',
          title: 'w4coder',
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
      { isBreakpoint === 2 ? (
        <Desktop topA={topA} page1={page1} stories={stories}  lang={lang} isBreakpoint={isBreakpoint}/>
      ) : isBreakpoint === 1 ?(
        <Mobile topA={topA} page1={page1} stories={stories}  lang={lang} isBreakpoint={isBreakpoint}/>
      ):(
        <></>
      )}
      {/* <Cookies/> */}
    </>
  )
}
