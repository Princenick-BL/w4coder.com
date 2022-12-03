import React from 'react'
import styles from './index.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo({single,style,head,w=100,h=100}) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"/> 
      </Head>
      {single ? (
        <div className={styles.logo + " "+styles.bg} style={style}>{`w4c`}</div>
      ) : (
        <Link href={"/"}>
          <Image
            src="/logo.png"
            width={w}
            height={h}
            layout={"raw"}
            alt={"Logo"}
            />
        </Link>
      )}
    </>
  )
}


