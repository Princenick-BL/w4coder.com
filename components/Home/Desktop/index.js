import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Head from 'next/head';
import { getArticle ,getTopArticles} from '../../../services/articles'
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
    const player = document.getElementById("player2");
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

    const [firstA,setfirstA] = useState(false)
    const [secondA,setSecondA] = useState(false)
    const [pages,setPages] = useState([])
    const [pageNum,setPageNum] = useState(1)
    const [hasMore,setHasMore] = useState(true)


    useEffect(()=>{
        const arr = [...topA]
        setfirstA(arr.pop())
        setSecondA(arr)
    },[])

    const [show,setShow]=useState(false)
    
    
    const [stories,setStories] = useState([
    {
        url: "https://wsdemos.uc.r.appspot.com/ampfest/s1",
        img : 'https://assets.codepen.io/1780597/4.png',
        color : '#FF6F32',
        text : 'Q&A with ZOE Newman'
    },
    {
        url: "https://wsdemos.uc.r.appspot.com/ampfest/s2",
        img : "https://assets.codepen.io/1780597/1.png" ,
        color :"#E6AD1C" ,
        text : "24 Hours in New York City"
    },
    {
        url: "https://wsdemos.uc.r.appspot.com/ampfest/s3",
        img : "https://assets.codepen.io/1780597/3.png" ,
        color : "#466FFF",
        text : "The Next King of the Sea"
    },
    {
        url: "https://wsdemos.uc.r.appspot.com/ampfest/s4",
        img : "https://assets.codepen.io/1780597/2.png",
        color : "#4CA47C",
        text : "Spark a Passion for Reading"
    }
])
  
    useEffect(()=>{
        const player = document.getElementById("player2");
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

    const fetchMoreData = async ()=>{

        const res =  await getArticle({filter:{
          page : pageNum + 1
        }})
        setPageNum(pageNum + 1)
        setPages([...pages,...res])
        if(res.length === 0){
          setHasMore(false)
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>w4coder - Officiel</title>
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
                <div style={{display:"flex"}}>
                    <Logo style={{fontSize:"2rem"}}/>
                    <StickyMenu current={1}/>
                </div>
                {/* <h3>Main articles</h3> */}
                <ThemeChanger toggleTheme={toggleTheme}/>
            </div>
            <div className={styles.topWrapper}>
                <div className={styles.mainContent}>
                    {firstA && (
                        <div className={styles.articlesFirst}>
                            <div className={styles.img}>
                                <Link href={`/blog/article/${firstA?._id}/${firstA?.slug}`}>
                                    
                                        <Image
                                            src={firstA?.poster}
                                            width={500}
                                            height={400}
                                            layout={"fill"}
                                            style={{width:"100%",height:"auto"}}
                                        />
                                    
                                </Link>
                            </div>
                            <div className={styles.articleInfo}>
                                <div className={styles.cat}>{firstA?.category?.name || "A LA Une"}</div>
                                <h2 className={styles.title}>
                                    <Link href={`/blog/article/${firstA?._id}/${firstA?.slug}`}>
                                        
                                            {firstA?.title}

                                        
                                    </Link>
                                </h2>
                                <div className={styles.desc}>
                                    {firstA?.description}
                                </div>
                                <div className={styles.more}>
                                    <Link href={`/blog/article/${firstA?._id}/${firstA?.slug}`}>
                                        
                                            READ MORE &rarr;
                                        
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={styles.articlesSecond}>
                        {secondA?.length > 0 && (
                            secondA?.map((a,index)=>{
                                return(
                                    <div key={index} className={styles.article}>
                                        <div className={styles.img}>
                                            <Link href={`/blog/article/${firstA?._id}/${firstA?.slug}`}>
                                                
                                                    <Image
                                                        src={a?.poster || "https://picsum.photos/400/300"}
                                                        width={500}
                                                        height={400}
                                                        layout={"fill"}
                                                        style={{width:"100%",height:"auto"}}

                                                    />
                                                
                                            </Link>
                                        </div>
                                        <div className={styles.articleInfo}>
                                            <div className={styles.cat}>{a?.category?.name || "A LA Une"}</div>
                                            <h2 className={styles.title}>
                                                <Link href={`/blog/article/${firstA?._id}/${firstA?.slug}`}>
                                                    
                                                        {a?.title}
                                                    
                                                </Link>
                                            </h2>
                                        </div>
                                    </div>
                                )

                            })
                        )}
                       
                    </div>
                </div>
                
            </div>
            <div className={styles.bottomWrapper}>
                <h4>Web stories</h4>
                <div className="viewport">
                    <div className="entry-point-container">
                        {/* <h1> Web Stories </h1> */}
                        <div className="circular-entry-point">
                            <div className="entry-points">
                            {stories.map((story,index)=>{
                                return(
                                    <Widget
                                        key={index}
                                        pos={index}
                                        img={story.img}
                                        color = {story.color}
                                        text = {story.text}
                                        url={story.url}
                                        onclick={(e)=>{setShow(!show)}}
                                    />
                                )
                            })}
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div className={`lightbox ${show?"show":""}`}>
                        {/* <div className={styles.side}>

                        </div> */}
                        <amp-story-player style={{width:"100vw",height:"100vh"}} layout="responsive" width="360" height="600" id="player2" >
                            {stories.map((story,index)=>{
                                return(
                                <a key={index} href={story?.url}></a>
                                )
                            })}
                        </amp-story-player>
                    </div>
                </div>
                <div className={styles.lists}>
                    <div className={styles.listLeft}>
                    {page1?.length > 0 && (
                        page1?.map((a,index)=>{
                            return(
                                <div key={index} className={styles.article}>
                                    <div className={styles.img}>
                                        <Link href={`/blog/article/${a?._id}/${a?.slug}`}>
                                            
                                                <Image
                                                    src={a?.poster||"https://picsum.photos/400/300"}
                                                    width={400}
                                                    height={400}
                                                    layout={"fill"}
                                                    style={{width:"100%",height:"auto"}}

                                                />
                                            
                                        </Link>
                                    </div>
                                    <div className={styles.articleInfo}>
                                        <div className={styles.cat+ " text-color"}>{a?.category?.name || "A LA Une"}</div>
                                        <h2 className={styles.title}>
                                        <Link href={`/blog/article/${a?._id}/${a?.slug}`}>
                                            
                                            {a?.title}
                                            
                                        </Link>
                                        </h2>
                                        <div className={styles.author}>
                                            By {a?.author?.name}
                                        </div>
                                        <div className={styles.desc}>
                                        {a?.description}
                                        </div>
                                        <div className={styles.more}>
                                            <Link href={`/blog/article/${a?._id}/${a?.slug}`}>
                                                
                                                    READ MORE &rarr;
                                                
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    )}
                     <InfiniteScroll
                        dataLength={pages.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        className={styles.mainSlideShow}
                        style={{margin:"0 auto"}}
                    >
                        {pages ? pages.map((a,index)=>{
                        return(
                            <div key={index} className={styles.article}>
                                <div className={styles.img}>
                                    <Link href={`/blog/article/${a?._id}/${a?.slug}`}>
                                        
                                            <Image
                                                src={a?.poster||"https://picsum.photos/400/300"}
                                                width={400}
                                                height={400}
                                                layout={"fill"}
                                                style={{width:"100%",height:"auto"}}
  
                                            />
                                        
                                    </Link>
                                </div>
                                <div className={styles.articleInfo}>
                                    <div className={styles.cat}>{a?.category?.name || "A LA Une"}</div>
                                    <h2 className={styles.title}>
                                        <Link href={`/blog/article/${a?._id}/${a?.slug}`}>
                                            
                                            {a?.title}
                                            
                                        </Link>
                                    </h2>
                                    <div className={styles.author}>
                                        By {a?.author?.name}
                                    </div>
                                    <div className={styles.desc}>
                                    {a?.description}
                                    </div>
                                    <div className={styles.more}>
                                        <Link href={`/blog/article/${a?._id}/${a?.slug}`}>
                                            
                                                READ MORE &rarr;
                                            
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                        }):(
                        <></>
                        )}
                    </InfiniteScroll>
                    </div>
                    <div className={styles.sider}>
                        <TopicSlider/>
                        <Ads600>
                            <amp-ad
                                layout="fixed"
                                width="300"
                                height="600"
                                type="adsense"
                                data-ad-client="ca-pub-5455960452945884"
                                data-ad-slot="5358300827">
                                    <amp-img
                                        src="/images/adPlaceholder.png"
                                        width="300"
                                        height="600"
                                        layout="responsive"
                                        alt="placeholder"
                                        class="mb4 mx3"
                                    ></amp-img>
                            </amp-ad>
                        </Ads600>
                    </div>

                </div>     
            </div>
            <Footer/>
        </div>
    )
}
