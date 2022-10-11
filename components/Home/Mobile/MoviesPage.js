import React from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import StickyMenu from '../../StickyMenu'
import Logo from '../../Logo'
import ThemeChanger from '../../ThemeChanger'
import {RiYoutubeFill} from 'react-icons/ri'


export default function MoviesPage({setCurrentView,toggleTheme}) {
  return (
    <>
        <Head>

        </Head>
        <main className={styles.main} >
            <StickyMenu setCurrentView={setCurrentView} />
            <div className={styles.head} id="#top">
                <Logo style={{fontSize:"2rem"}}/>
                {/* <h3>Main articles</h3> */}
                <ThemeChanger toggleTheme={toggleTheme}/>
            </div>
            <div className={styles.titleHead}>
                <RiYoutubeFill size={24}/> <h1>Vidéos</h1>
            </div>
            <div className={styles.subSectionList} >
               {"Coming soon :)"}
            </div>
        </main>
    </>
  )
}
