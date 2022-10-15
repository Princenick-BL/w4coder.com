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

            </Head>
            <div id="storiesTop">
                <main className={styles.main} >
                    <StickyMenu setCurrentView={setCurrentView}/>
                    <div className={styles.head} id="#top">
                        <Logo style={{fontSize:"2rem"}}/>
                        {/* <h3>Main articles</h3> */}
                        <ThemeChanger toggleTheme={toggleTheme}/>
                    </div>
                    <div className={styles.flexSpace}>
                        <div className={styles.titleHead}>
                            <MdWebStories size={24}/> <h1>Web Stories</h1>
                        </div>
                        <select>
                            <option>en</option>
                            <option>fr</option>
                        </select>
                    </div>
                    <InfiniteScroll
                        dataLength={stories.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        className={styles.subSectionList}                         
                        style={{margin:"0 auto"}}
                    >
                        {stories && stories.map((story,index)=>{
                            return(
                                <div className={styles.preview} key={index}>
                                    <Link href={`/api/web-story/${story?._id}/${story?.slug}`}>
                                        <a>
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
                                        </a>
                                    </Link>
                                </div>

                            )
                        })}
                    </InfiniteScroll>
                    {/* <div className={styles.subSectionList} >
                        {stories && stories.map((story,index)=>{
                            return(
                                <div className={styles.preview} key={index}>
                                    <Link href={`/api/web-story/${story?._id}/${story?.slug}`}>
                                        <a>
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
                                        </a>
                                    </Link>
                                </div>

                            )
                        })}
                    </div> */}
                </main>
            </div>
        </>
    )
}
