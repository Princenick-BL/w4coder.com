import React,{useEffect,useState,useRef} from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import LasrArticle from '../../LastArticles'
import Footer from '../../footer/footer'
import Ads300 from '../../Ads/Ads300'
import Slide from '../../CardView'
import { getArticle ,getTopArticles} from '../../../services/articles'
import TheSideBar from '../../ThesideBar'
import Head from 'next/head'
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTop from "react-scroll-to-top";
import TopicSlider from '../../TopicSlider'
import Logo from '../../Logo'
import ThemeChanger from '../../ThemeChanger'
import StickyMenu from '../../StickyMenu'

//export const config = { amp: true };


const ampStoryPlayerUrl = "https://cdn.ampproject.org/amp-story-player-v0";

function getAmpPlayerScript(callback) {
  const ampJS = document.createElement("script");
  ampJS.async = true;
  ampJS.src ="https://cdn.ampproject.org/amp-story-player-v0.js";
  //ampJS.onload = callback;
  return ampJS;
}

function getAmpScript(callback) {
  const ampJS = document.createElement("script");
  ampJS.async = true;
  ampJS.src ="https://cdn.ampproject.org/v0/amp-story-player-0.1.js";
  //ampJS.onload = callback;
  return ampJS;
}

function getAmpCss() {
  const ampCSS = document.createElement("link");
  ampCSS.href = "https://cdn.ampproject.org/v0.css";
  ampCSS.rel = "stylesheet";
  ampCSS.type = "text/css";

  return ampCSS;
}

const useAmpStoryPlayer = (callback) => {
  useEffect(() => {
    console.log("useAmpStoryPlayer");
    const ampScript = document.querySelector(
      `script[src="https://cdn.ampproject.org/v0/amp-story-player-0.1.js"]`
    );
    if (!ampScript) {
    //   document.head.appendChild(getAmpScript(callback));
      document.head.appendChild(getAmpPlayerScript(callback));

      //document.head.appendChild(getAmpCss());
    }
  }, []);
};


const loadPlayer = (playerRef) => () => {
  const player = document.getElementById("player2");
  if (player) {
    player.load();
  }

  // playerRef.current.add([
  //   {
  //     href:
  //       "https://stories.marmiton.org/menu-de-la-semaine-4-10-janvier-dE3b4YkgP/"
  //   }
  // ]);
  
};

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
            document.getElementById("homTop").style.overflowY="hidden"
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

function HomePage({topA,page1,toggleTheme,currentView,setCurrentView}) {

  const [pages,setPages] = useState([])
  const [pageNum,setPageNum] = useState(1)
  const [hasMore,setHasMore] = useState(true)

  const playerRef = useRef(null);
  //useAmpStoryPlayer(loadPlayer(playerRef))

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


  // useEffect(()=>{
  //   const player = document.getElementById("player2");
    
  //   const existed  = document.getElementById("playerConfig");
  //   if(!existed){

  //       var script = document.createElement("script")
  //       script.id = "playerConfig"
  //       script.type="application/json"
  //       script.innerHTML=`
  //         {
  //           "behavior": {
  //             "autoplay": false,
  //             "pageScroll": false
  //           },
  //           "controls": [{
  //             "name": "close",
  //             "position": "start"
  //           }]
  //         }
  //       `
  //       player.appendChild(script)

  //       player.addEventListener("amp-story-player-close", () => {
  //         document.getElementById("homTop").style.overflowY="auto"
  //           player.pause();
  //           setShow(false)
  //       });

        
  //       player.addEventListener("ready", () => {
  //         player.play()
  //         initializeWidget(0);
  //         player.pause()
  //       });
  //     }
  // }, [])

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
    <>
      <Head>
        <title>w4coder - Officiel</title>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script
          async
          custom-element="amp-story-player"
          src="https://cdn.ampproject.org/v0/amp-story-player-0.1.js"
        ></script>
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5455960452945884"
     crossOrigin="anonymous"></script> */}
      </Head>
      <div  id="homTop">
        {/* <HomeMenu /> */}
        <main className={styles.main} >
          <ScrollToTop smooth color="#6f00ff" />
          <div className={styles.head} id="#top">
            <Logo style={{fontSize:"2rem",marginRight:"0"}}/>
            {/* <h3>Main articles</h3> */}
            <ThemeChanger toggleTheme={toggleTheme}/>
          </div>
          <input type={"search"} className={styles.search} placeholder={"Search"}/>
          {/* <div className="viewport">
            <div className="entry-point-container">
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

              <amp-story-player style={{width:"100vw",height:"100vh"}} layout="responsive" width="360" height="600"id="player2" >
                {stories.map((story,index)=>{
                    return(
                      <a key={index} href={story?.url}></a>
                    )
                  })}
              </amp-story-player>
            </div>
          </div>    */}
          <StickyMenu setCurrentView={setCurrentView}  current={1}/>
       
          <div className={styles.editorial}>
            <div className={styles.editorialContent}>
              <div
                className={styles.mainSlideShow}
              >
                {page1 ? page1.map((article,index)=>{
                  return(
                    <Slide key={index} article={article} style={{height:"100%"}}/>
                  )
                }):(
                  <></>
                )}
              </div>
              {/* <amp-ad width="100vw" height="320"
                    type="adsense"
                    data-ad-client="ca-pub-5455960452945884"
                    data-ad-slot="5221773298"
                    data-auto-format="rspv"
                    data-full-width="">
                <div overflow=""></div>
                </amp-ad> */}
              {/* <LasrArticle topA={topA}/> */}
              <TopicSlider/>


              <InfiniteScroll
                dataLength={pages.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                className={styles.mainSlideShow}
                style={{margin:"0 auto"}}
              >
                {pages ? pages.map((article,index)=>{
                  return(
                    <div  key={index}>
                    <Slide article={article} style={{height:"100%"}}/>
                    {/* {(Math.floor(Math.random()* 10) > 8 )&& (
                      <Ads300>
                        <amp-ad 
                          width="300" 
                          height="200"
                          type="adsense"
                          data-ad-client="ca-pub-5455960452945884"
                          data-ad-slot="5221773298"
                          data-auto-format="rspv"
                          data-full-width="">
                            <amp-img
                              src="/images/adPlaceholder300.png"
                              width="300"
                              height="250"
                              layout="responsive"
                              alt="placeholder"
                          ></amp-img>
                        </amp-ad>
                      </Ads300>
                    )} */}
                    </div>
                  )
                }):(
                  <></>
                )}
              </InfiniteScroll>
            </div>
              
            <TheSideBar/>
          </div>
          {/* <Pagination/> */}
          <br></br>
          <br></br>
          <Footer/>
        </main>
      </div>
    </>
  )
}
// export default dynamic(() => Promise.resolve(HomePage), {
//   ssr: false,
// });

export default HomePage

