import React from 'react'
import styles from './index.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/legacy/image'

export default function Logo({single,style,head,w=100,h=100}) {
  return (
    <>
      {single ? (
        <div className={styles.logo + " "+styles.bg} style={style}>{`w4c`}</div>
      ) : (
        <Link href={"/"} style={{width:"max-content"}}>
          <Image
            src="/logo.png"
            width={w}
            height={h}
            layout={"fixed"}
            alt={"Logo"}
            />
        </Link>
      )}
    </>
  )
}


