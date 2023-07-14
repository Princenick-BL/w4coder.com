import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'
import Header from '@/layouts/templates/2/components/Header'
import Footer from '@/layouts/templates/2/components/Footer'


export default function DefaultLayout({title,description,children,isBreakpoint,toggleTheme}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isBreakpoint={isBreakpoint} />
      <main className={styles.main}>
        <svg className={styles.svg1} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#24A148" d="M48.2,-69.4C62.6,-65.7,74.6,-52.6,78,-37.8C81.4,-23,76.2,-6.4,72.3,9.3C68.4,25.1,65.8,39.9,57.8,51.2C49.8,62.5,36.3,70.2,21.1,77C5.9,83.8,-11.1,89.6,-22.8,83.5C-34.6,77.4,-41.2,59.4,-50.7,45.5C-60.1,31.7,-72.5,21.9,-76.8,9.4C-81.1,-3,-77.3,-18.3,-68.7,-29.1C-60.2,-39.8,-46.9,-46.1,-34.7,-50.7C-22.4,-55.4,-11.2,-58.5,2.8,-62.9C16.9,-67.4,33.8,-73.1,48.2,-69.4Z" transform="translate(100 100)" />
        </svg>
        <svg className={styles.svg2} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="pink" d="M48.2,-69.4C62.6,-65.7,74.6,-52.6,78,-37.8C81.4,-23,76.2,-6.4,72.3,9.3C68.4,25.1,65.8,39.9,57.8,51.2C49.8,62.5,36.3,70.2,21.1,77C5.9,83.8,-11.1,89.6,-22.8,83.5C-34.6,77.4,-41.2,59.4,-50.7,45.5C-60.1,31.7,-72.5,21.9,-76.8,9.4C-81.1,-3,-77.3,-18.3,-68.7,-29.1C-60.2,-39.8,-46.9,-46.1,-34.7,-50.7C-22.4,-55.4,-11.2,-58.5,2.8,-62.9C16.9,-67.4,33.8,-73.1,48.2,-69.4Z" transform="translate(100 100)" />
        </svg>
        <svg className={styles.svg3} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="blue" d="M48.2,-69.4C62.6,-65.7,74.6,-52.6,78,-37.8C81.4,-23,76.2,-6.4,72.3,9.3C68.4,25.1,65.8,39.9,57.8,51.2C49.8,62.5,36.3,70.2,21.1,77C5.9,83.8,-11.1,89.6,-22.8,83.5C-34.6,77.4,-41.2,59.4,-50.7,45.5C-60.1,31.7,-72.5,21.9,-76.8,9.4C-81.1,-3,-77.3,-18.3,-68.7,-29.1C-60.2,-39.8,-46.9,-46.1,-34.7,-50.7C-22.4,-55.4,-11.2,-58.5,2.8,-62.9C16.9,-67.4,33.8,-73.1,48.2,-69.4Z" transform="translate(100 100)" />
        </svg>
        <div className={styles.children}>
            {children}    
        </div>
      </main>
      <Footer toggleTheme={toggleTheme}/>
    </div>
  )
}
