import React, { useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Header from '../../components/Header'
import styles from './index.module.scss'
import { getTutos } from '../../services/tutos'
import Image from 'next/image';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Tutos({isBreakpoint,initTutos}) {

  const [tutos,setTutos] = useState([...initTutos])
  const [pageNum,setPageNum] = useState(1)
  const [hasMore,setHasMore] = useState(true)

  const fetchMoreData = async ()=>{
    const res =  await getTutos({filter:{
      page : pageNum + 1
    }})
    setPageNum(pageNum + 1)
    setTutos([...tutos,...res])
    if(res.length === 0){
      setHasMore(false)
    }
  }

  return (
    <>
      <NextSeo
        title="w4coder || Tutos"
        description="This example uses more of the available config options."
        canonical="https://w4coder.com"
        openGraph={{
        url: 'https://w4coder.com',
        description: 'Open Graph Description',
        // images: [
        //   {
        //     url: 'https://www.example.ie/og-image-01.jpg',
        //     width: 800,
        //     height: 600,
        //     alt: 'Og Image Alt',
        //     type: 'image/jpeg',
        //   },
        //   {
        //     url: 'https://www.example.ie/og-image-02.jpg',
        //     width: 900,
        //     height: 800,
        //     alt: 'Og Image Alt Second',
        //     type: 'image/jpeg',
        //   },
        //   { url: 'https://www.example.ie/og-image-03.jpg' },
        //   { url: 'https://www.example.ie/og-image-04.jpg' },
        // ],
        siteName: 'w4coder',
        }}  
      />
        
      <div className={styles.container}>
        <Header isBreakpoint={isBreakpoint}/>
        <div>
        <InfiniteScroll
          dataLength={tutos.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          className={styles.mainSlideShow}
        >
          {tutos ? tutos.map((t,i)=>{
            return(
              <div  key={i} className={styles.tuto}>
                <Link href={`/tutos/${t?._id}/${t?.slug}`}>
                  <h2> {t?.title}</h2>
                  <div className={styles.publisher}>
                    <Image
                        src={ "/logo.png"}
                        width="10"
                        height="10"
                        layout="fixed"
                        className={styles.publisher_logo}
                        style={{minWidth:"10px"}}
                          alt={"Publisher logo"}
                    />
                    <div className={styles.name}>Published by <strong>w4coder</strong> on {new Date(t.updatedAt).toDateString()}</div>
                  </div>
                </Link>
              </div>
            )
          }):(
            <></>
          )}
        </InfiniteScroll>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const tutos = await getTutos({filter:{
    page : 1
  }})
  return {
    props: {initTutos :tutos}, // will be passed to the page component as props
  }
}
