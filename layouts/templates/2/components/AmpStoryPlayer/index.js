import React,{useState,useEffect} from 'react'
import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.scss'
import wslogo from '@/public/images/ws-logo.png'
import { Link } from 'wouter';
import RecommendedTitle from '@/layouts/templates/2/components/RecommendedTitle';

async function initializeWidget(idx) {
    const player = document.getElementById("player2");
    // var stories = player.getStories();
    // console.log(stories)
    // player.show(stories[idx].href, null, {animate: true});
    // console.log(idx)
    //player.go(idx )
    // player.play();
}
  
const Widget = ({img,pos,color,text,url,onclick,isBreakpoint=1}) =>{
    return(
        <div className={ styles.entryPoint+ " entry-point-card-container" }
          onClick={(e)=>{        
            onclick()
            document.getElementById("app").style.overflowY="hidden"
            initializeWidget(pos)
        }}>
            <div 
                className={styles?.imgContainer }
                // style={{ 
                //     borderColor: `${color} !important`,
                //     border: `2px solid ${color}`,
                // }}
            >
                <Image 
                    className={styles?.imgCard}
                    width={300} 
                    height={400} 
                    src={img}
                    alt={text}  
                />
            </div>
            <div className={styles.cardContent  + ' entry-point-card-content'}>
                <h2 className="entry-point-card-title">{text}</h2>
            </div>
        </div>
    )
}

export default function AmpStoryPlayerComponent({stories,isBreakpoint=1}) {

    const [show,setShow]=useState(false)
    const [currentStory,setCurrentStory] = useState(false)


    useEffect(()=>{
        try{

            // const existed  = document.getElementById("playerConfig");
            // if(!existed){
            //     const player = document.getElementById("player2");
            //     player.load();
            //     var script = document.createElement("script")
            //     script.id = "playerConfig"
            //     script.type="application/json"
            //     script.innerHTML=`
            //     {
            //         "behavior": {
            //             "autoplay": false,
            //             "pageScroll": false
            //         },
            //         "controls": [{
            //             "name": "close",
            //             "position": "start"
            //         }],
            //         {
            //             "behavior": {
            //                 "pageScroll": false
            //             }
            //         }
            //     }
            //     `
            //     player.appendChild(script)
                // playerEl.pause()
        
            //}
        }catch(e){

        }

    }, [])
    
    return (
        <>
            {stories?.length > 0 ? (
                <>
                    <Head>
                        <script async src="https://cdn.ampproject.org/amp-story-player-v0.js"></script>
                        <link href="https://cdn.ampproject.org/amp-story-player-v0.css" rel='stylesheet' type='text/css'/>
                    </Head>
                    <RecommendedTitle title={"Web stories"} style={{marginTop:"0",marginBottom:"0"}}/>
                    <div className="viewport">
                        <div className="entry-point-container">
                            <div className="circular-entry-point">
                                <div className="entry-points" style={{  gridTemplateColumns: `repeat(${stories?.length}, 179.6px)`}}>
                                    {[...stories,...stories].map((story,index)=>{
                                        return(
                                        <Widget
                                            key={index}
                                            pos={index}
                                            img={story.posterP}
                                            color = {index == 0 ? "#466FFF": index == 1 ? "#E6AD1C" : index==2 ? "#FF6F32":"#4CA47C"}
                                            text = {story.title}
                                            url={story.url}
                                            isBreakpoint = {isBreakpoint}
                                            onclick={(e)=>{setShow(!show);setCurrentStory(story)}}
                                        />
                                        )
                                    })}
                                    {/* <Link href='/web-stories'>
                                        <div className={ styles.entryPoint2 }>
                                            <div className={styles.mws}>{"More Story →"}</div>
                                        </div>
                                    </Link> */}
                                
                                </div>
                            </div>
                        </div>
                        <br></br>
                        {show && stories?.length>0 && (
                            <div id='lightbox' className={`lightbox ${show?"show":""}`}>
                                <amp-story-player 
                                    id="player2"
                                    style={{width:"100vw",height:"100%"}}
                                    src={`/blog/web-story/${currentStory._id}/${currentStory.slug}`}
                                >
                                   
                                </amp-story-player>
                            </div>
                        )}
                    </div>  
                    <RecommendedTitle title={"POSTS"} style={{marginTop:"0",marginBottom:"0",borderBottom:"none"}}/>
 
                </>
            ):(
                <>
                </>
            )}
        </>
    )
}
