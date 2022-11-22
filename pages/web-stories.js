import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import styles from './index.module.scss'
import Footer from '../components/Footer'
import { getStories } from '../services/stories'
import Image from 'next/image'
import Link from 'next/link'

export default function WebStories({isBreakpoint,stories}) {
  return (
    <div className={styles.container}>
        <Head>
            <title>LSB || Web Stories</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header isBreakpoint={isBreakpoint}/>
        <main className={styles.main}>
            <h1 style={{marginTop:"1rem"}}>Web Stories</h1>
            <div className={styles.cats}>
                {stories.map((s,i)=>{
                    return(
                        <div className={styles.cat} key={i}>
                            <Image
                                src={s.posterP}
                                layout="fill"
                                className={styles.img}
                                alt={s.title}
                            />
                            <Link  className={styles.poster} href={`/blog/web-story/${s._id}/${s.slug}`}>
                                <div className={styles.publisherLogo}>

                                </div>
                                <div className={styles.publisherTP}>
                                    <div className={styles.postTitle}>
                                        {s.title}
                                    </div>
                                    <div className={styles.publisherName}>
                                        w4coder
                                    </div>
                                </div> 
                            </Link>
                        </div>
                    )
                })}
            </div>
        </main>
        <Footer/>

    </div>
  )
}

export async function getServerSideProps(context) {
    // Fetch data from external API
  
    const stories =  await getStories({filter:{
        page : 1
    }})
  
    //console.log(res.length)
  
    return { 
        props: {
            stories : stories || [],
        } 
    }
  }
