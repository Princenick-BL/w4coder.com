import React from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import StickyMenu from '../../StickyMenu'

export default function StoriesPage({setCurrentView}) {
  return (
    <>
        <Head>

        </Head>
        <div id="storiesTop">
            <StickyMenu setCurrentView={setCurrentView}/>
            <main className={styles.main} >
            </main>
        </div>
    </>
  )
}
