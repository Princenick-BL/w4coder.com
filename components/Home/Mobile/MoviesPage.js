import React from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import StickyMenu from '../../StickyMenu'

export default function MoviesPage({setCurrentView}) {
  return (
    <>
        <Head>

        </Head>
        <StickyMenu setCurrentView={setCurrentView} />
        <main className={styles.main} >
        </main>
    </>
  )
}
