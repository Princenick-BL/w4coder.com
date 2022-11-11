import React from 'react'
import styles from './index.module.scss'
import Head from 'next/head'
import Link from 'next/link'

export default function Logo({single,style,head}) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>       </Head>
      {single ? (
        <div className={styles.logo + " "+styles.bg} style={style}>{`w4c`}</div>
      ) : (
        <Link href={"/"}>
          <div className={styles.logo+ "  "+(head ? styles.head:"")} style={style}>{`w4coder`}</div>
        </Link>
      )}
    </>
  )
}


