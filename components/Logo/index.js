import React from 'react'
import styles from './index.module.scss'
import Head from 'next/head'

export default function Logo({single,style}) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link rel="preload stylesheet" as="style" href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"></link>    
      </Head>
      {single ? (
        <div className={styles.logo} style={style}>{`w`}</div>
      ) : (
        <div className={styles.logo} style={style}>{`w4coder`}</div>
      )}
    </>
  )
}
