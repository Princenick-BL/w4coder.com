import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import styles from './index.module.scss'
import Footer from '../components/Footer'
import { getStories } from '../services/stories'
import Image from 'next/image'
import Link from 'next/link'
import YoutubeShort from '../components/Youtube'
import axios from 'axios'
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://youtube.googleapis.com/youtube/v3/playlistItems';

export default function Youtube({isBreakpoint,data,res}) {

    console.log(res)
    const shorts = data

    return (
        <div className={styles.container}>
            <Head>
                <title>LSB || YouTube</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header isBreakpoint={isBreakpoint}/>
            <main className={styles.main}>
                {/* <h1 style={{marginTop:"1rem"}}>Web Stories</h1> */}
            
                <div className={styles.youtube}>

                    <div style={{display:"flex",alignItems:"center"}}>
                        <svg viewBox="0 0 40 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block", height: "20px"}} className="style-scope yt-icon">
                            <g viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet" class="style-scope yt-icon">
                                <g class="style-scope yt-icon">
                                    <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000" class="style-scope yt-icon"></path>
                                    <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" class="style-scope yt-icon"></path>
                                </g>
                            </g>
                        </svg>
                        <span style={{
                            fontSize: "1.1rem",
                            lineHeight: "2.8rem",
                            fontWeight: 400,
                        }}>YouTube</span>
                    </div>
                    <div className={styles.list}>
                        {shorts && shorts.map((sh,i)=>{
                            return(
                                <div key={i}>
                                    <YoutubeShort info={sh}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    
                </div>
            </main>
            <Footer/>

        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
  
   
    const ressult = await axios.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?key=${process.env.NEXT_PUBLIC_APP_YOUTUBE_API_KEY}&part=snippet&playlistId=PLBi1fROKdkWkj_OPLlMsMpnCmK8ZDz0EY`)
  
    return { 
        props: {
            data : ressult?.data?.items || [],
            res : ressult
        } 
    }
  }
