import React,{useEffect, useState} from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import StickyMenu from '../../StickyMenu'
import Logo from '../../Logo'
import ThemeChanger from '../../ThemeChanger'
import {MdWebStories} from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import { getStories } from '../../../services/stories'
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTop from "react-scroll-to-top";


export default function StoriesPage({setCurrentView,toggleTheme}) {
    
    const [pageNum,setPageNum] = useState(0)
    const [hasMore,setHasMore] = useState(true)

    
    const [stories,setStories] = useState([])

    useEffect(()=>{
        (async ()=>{
            const res = await getStories({filter:{
                page : 1
            }})
            setStories(res)
            if(res.length < 10){
                setHasMore(false)
            }
        })();
    },[])

    const fetchMoreData = async ()=>{

        const res =  await getStories({filter:{
          page : pageNum + 1
        }})
        setPageNum(pageNum + 1)
        setStories([...stories,...res])
        if(res.length === 0){
          setHasMore(false)
        }
    }

    return (
        <>
            <Head>
                <title>w4coder - Web Stories</title>
                <script async src="https://cdn.ampproject.org/v0.js"></script>
            </Head>
            <div id="storiesTop">
                <main className={styles.main} >
                    <div className={styles.head} id="#top">
                        <Logo style={{fontSize:"2rem",marginRight:"0"}}/>
                        {/* <h3>Main articles</h3> */}
                        <ThemeChanger toggleTheme={toggleTheme}/>
                    </div>
                    {/* <div className={styles.banner}>
                        <div className={styles.bannerContent}>
                            <h1>Web Stories</h1>
                        </div>
                    </div> */}
                    <ScrollToTop smooth color="#6f00ff" />

                    <StickyMenu setCurrentView={setCurrentView} current={2}/>

                    <div className={styles.flexSpace}>
                        {/* <div className={styles.titleHead}>
                            <MdWebStories size={24}/> <h1>Web Stories</h1>
                        </div> */}
                        <select>
                            <option>en</option>
                            <option>fr</option>
                        </select>
                    </div>

                    <div className={styles.player}>
                        <amp-story-player width="300" height="700" style={{width:"96vw",height:"calc(96vw * 16 / 9 )"}}>
                            <a href='http://localhost:3000/blog/web-story/632f345c62740dca9e49910d/top-javascript-programmation-framework-for-web-app-creation'></a>
                        </amp-story-player>
                    </div>

                    {/* <InfiniteScroll
                        dataLength={stories.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={
                            <div 
                                style={{
                                    width:"100%",
                                    height:"100%",
                                    display:"flex",
                                    justifyContent : "center",
                                    alignItems : "center"
                                }}
                            >
                                <svg  style={{
                                    margin: "auto", 
                                    background: `linear-gradient(
                                        to right,
                                        #462523 0,
                                            #cb9b51 22%, 
                                        #f6e27a 45%,
                                        #f6f2c0 50%,
                                        #f6e27a 55%,
                                        #cb9b51 78%,
                                        #462523 100%
                                        );`, 
                                    display: "block", shapeRendering: "auto"}} width="40px" height="40px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                    <circle cx="50" cy="50" fill="none" stroke="var(--color-primary-light)" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                                    </circle>
                                </svg>
                            </div>
                        }
                        className={styles.subSectionList}                         
                        style={{margin:"0 auto"}}
                    >
                        {stories && stories.map((story,index)=>{
                            return(
                                <div className={styles.preview} key={index}>
                                    <Link href={`/blog/web-story/${story?._id}/${story?.slug}`}>
                                        <div>
                                            <Image
                                                src={story?.poster || "https://picsum.photos/400/534?random=5"}
                                                width={400}
                                                height={534}
                                                layout={"fill"}
                                            />
                                            <div className={styles.publisherLog}>
                                                <Image
                                                    src={"https://picsum.photos/400/534?random=7"}
                                                    width={50}
                                                    height={50}
                                                    layout={"fill"}
                                                />
                                            </div>
                                            <div className={styles.details}>
                                                <div>{story?.title}</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            )
                        })}
                    </InfiniteScroll> */}
                   
                </main>
            </div>
        </>
    )
}
