import React from 'react'
import styles from './index.module.scss'
import Head from 'next/head'
import Link from 'next/link'

export default function Logo({single,style}) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Grenze+Gotisch&display=swap" rel="stylesheet"/>         
      </Head>
      {single ? (
        <div className={styles.logo} style={style}>{`LSB`}</div>
      ) : (
        <Link href={"/"}>
          <div className={styles.logo} style={style}>{`Luxe Story Blog`}</div>
        </Link>
      )}
    </>
  )
}