import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Head from 'next/head';
import { getStories } from '../../../services/stories'
import Link from 'next/link';
import InfiniteScroll from "react-infinite-scroll-component";
import TopicSlider from '../../TopicSlider';
import Ads600 from '../../Ads/Ads600';
import Footer from '../../footer/footer';
import ScrollToTop from 'react-scroll-to-top';
import Logo from '../../Logo';
import ThemeChanger from '../../ThemeChanger';
import StickyMenu from '../../StickyMenu';

function getAmpPlayerScript(callback) {
    const ampJS = document.createElement("script");
    ampJS.async = true;
    ampJS.src ="https://cdn.ampproject.org/amp-story-player-v0.js";
    //ampJS.onload = callback;
    return ampJS;
  }

async function initializeWidget(idx) {
    const player = document.getElementById("player33");
    var stories = player.getStories();
    player.show(stories[idx].href, null, {animate: true});
    player.play();
}

const Widget = ({img,pos,color,text,url,onclick}) =>{
    return(
        <div className="entry-point-card-container" 
          onClick={(e)=>{        
            onclick()
            // document.getElementById("mainContent").style.overflowY="hidden"
            initializeWidget(pos)
        }}>
            <div className='img-container' style={{ 
                    borderColor: `${color} !important`,
                    border: `2px solid ${color}`,

                  }}>
              <Image 
                  className='img' width={100} height={100} src={img}/>

            </div>
            <div>
            <span className="entry-point-card-title">{text}</span>
            </div>
        </div>
    )
}

export default function DeskTopHP({topA,page1,toggleTheme}) {

    const [pageNum,setPageNum] = useState(0)
    const [hasMore,setHasMore] = useState(true)
    const [show,setShow] = useState(false)

    
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
  
  
    useEffect(()=>{
        const player = document.getElementById("player33");
        const existed  = document.getElementById("playerConfig");
        if(!existed){

            var script = document.createElement("script")
            script.id = "playerConfig"
            script.type="application/json"
            script.innerHTML=`
                {
                    "behavior": {
                        "autoplay": false,
                        "pageScroll": false
                    },
                    "controls": [{
                        "name": "close",
                        "position": "start"
                    }]
                }
            `
            player.appendChild(script)
        
            player.addEventListener("amp-story-player-close", () => {
                // document.getElementById("mainContent").style.overflowY="auto"
                player.pause();
                setShow(false)
            });
        
            
            player.addEventListener("ready", () => {
                player.play()
                initializeWidget(0);
                player.pause()
            });
        }
      
    }, [])

    


    return (
        <div className={styles.container}>
            <Head>
                <title>w4coder - Web Stories</title>
                <script async src="https://cdn.ampproject.org/v0.js"></script>
                <script
                async
                custom-element="amp-story-player"
                src="https://cdn.ampproject.org/v0/amp-story-player-0.1.js"
                ></script>
                {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5455960452945884"
     crossOrigin="anonymous"></script>
                <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script> */}
            </Head>
            <ScrollToTop smooth color="#6f00ff" />
            <div className={styles.head} id="#top">
                <Logo style={{fontSize:"2rem"}}/>
                {/* <h3>Main articles</h3> */}
                <ThemeChanger toggleTheme={toggleTheme}/>
            </div>
            <div className={styles.banner}>
                <Image
                    src={"https://picsum.photos/1700/300"}
                    layout="fill"
                />
                <div className={styles.bannerContent}>
                    <h1>Web Stories</h1>

                </div>
            </div>
            <StickyMenu current={2}/>
            <div className={styles.flexSpace}>
                {/* <div className={styles.titleHead}>
                    <MdWebStories size={24}/> <h1>Web Stories</h1>
                </div> */}
                <select>
                    <option>en</option>
                    <option>fr</option>
                </select>
            </div>
            <div className={styles.listCenter}>
            <div className="viewport">
                    <div className="entry-point-container">
                        {/* <h1> Web Stories </h1> */}
                        <div className="circular-entry-point">
                        <InfiniteScroll
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
                            {stories.map((story,index)=>{
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
                            </InfiniteScroll>
                        </div>
                    </div>
                    <br></br>

                    <div className={`lightbox ${show?"show":""}`}>
                        {/* <div className={styles.side}>

                        </div> */}
                        <amp-story-player style={{width:"100vw",height:"100vh"}} layout="responsive" width="360" height="600" id="player33" >
                            {stories.map((story,index)=>{
                                return(
                                <a key={index} href={story?.url}></a>
                                )
                            })}
                        </amp-story-player>
                    </div>
                </div>
            </div>

            <br></br>

            {/* <div className={`lightbox ${show?"show":""}`}>
                <amp-story-player style={{width:"100vw",height:"100vh"}} layout="responsive" width="360" height="600" id="player33" >
                    {stories.map((story,index)=>{
                        return(
                            <a key={index} href={`/blog/web-story/${story?._id}/${story?.slug}`}></a>
                        )
                    })}
                </amp-story-player>
            </div>    */}

            <Footer/>
        </div>
    )
}
