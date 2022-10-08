import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Head from 'next/head';

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

export default function DeskTopHP({topA,page1}) {

    const [firstA,setfirstA] = useState(false)
    const [secondA,setSecondA] = useState(false)

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
      var script = document.createElement("script")
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
      
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>w4coder</title>
                <script async src="https://cdn.ampproject.org/v0.js"></script>
                <script
                async
                custom-element="amp-story-player"
                src="https://cdn.ampproject.org/v0/amp-story-player-0.1.js"
                ></script>
            </Head>
            <div className={styles.topWrapper}>
                <div>

                </div>
                <br></br>
                <div className={styles.mainContent}>
                    {firstA && (
                        <div className={styles.articlesFirst}>
                            <div className={styles.img}>
                                <Image
                                    src={firstA?.poster}
                                    width={500}
                                    height={400}
                                    layout={"fill"}
                                    
                                />
                            </div>
                            <div className={styles.articleInfo}>
                                <div className={styles.cat}>{firstA?.category?.name || "A LA Une"}</div>
                                <h2 className={styles.title}>
                                    {firstA?.title}
                                </h2>
                                <div className={styles.desc}>
                                    {firstA?.description}
                                </div>
                                <div className={styles.more}>
                                    READ MORE
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
                                            <Image
                                                src={a?.poster||"https://picsum.photos/400/300"}
                                                width={500}
                                                height={400}
                                                layout={"fill"}
                                                
                                            />
                                        </div>
                                        <div className={styles.articleInfo}>
                                            <div className={styles.cat}>{a?.category?.name || "A LA Une"}</div>
                                            <h2 className={styles.title}>
                                                {a?.title}
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
            </div>
        </div>
    )
}
