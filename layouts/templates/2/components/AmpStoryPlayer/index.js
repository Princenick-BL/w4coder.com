import React,{useState,useEffect} from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Logo from '@/components/Logo'
import styles from './index.module.scss'

async function initializeWidget(idx) {
    const player = document.getElementById("player2");
    // var stories = player.getStories();
    // console.log(stories)
    // player.show(stories[idx].href, null, {animate: true});
    // console.log(idx)
    player.go(idx )
    // player.play();
}
  
const Widget = ({img,pos,color,text,url,onclick,isBreakpoint=1}) =>{
    return(
        <div className={(isBreakpoint ===1 ?  styles.entryPoint : "" )+ " entry-point-card-container" }
          onClick={(e)=>{        
            onclick()
            document.getElementById("app").style.overflowY="hidden"
            initializeWidget(pos)
        }}>
            <div 
                className={isBreakpoint ===1 ?styles?.imgContainer:"" + ' img-container' }
                // style={{ 
                //     borderColor: `${color} !important`,
                //     border: `2px solid ${color}`,
                // }}
            >
                <Image 
                    className={isBreakpoint ===1 ?styles?.imgCard:"" + ' img' }
                    width={300} 
                    height={400} 
                    src={img}
                    alt={text}  
                />
            </div>
            <div className={isBreakpoint ===1 ?styles.cardContent : "" + ' entry-point-card-content'}>
                <h2 className="entry-point-card-title">{text}</h2>
            </div>
        </div>
    )
}

export default function AmpStoryPlayerComponent({stories,isBreakpoint=1}) {

    const [show,setShow]=useState(false)
    // console.log(stories)


    useEffect(()=>{
        try{

            const existed  = document.getElementById("playerConfig");
            if(!existed){
                const player = document.getElementById("player2");
                player.load();
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
                    }],
                    {
                        "behavior": {
                            "pageScroll": false
                        }
                    }
                }
                `
                player.appendChild(script)
                // playerEl.pause()
        
            }
        }catch(e){

        }

    }, [])
    
    return (
        <>
            <Head>
                <script async src="https://cdn.ampproject.org/amp-story-player-v0.js"></script>
                <link href="https://cdn.ampproject.org/amp-story-player-v0.css" rel='stylesheet' type='text/css'/>
            </Head>
           
            <div className="viewport">
                <div className="entry-point-container">
                    <div className="circular-entry-point">
                        <div className="entry-points">
                        {stories.map((story,index)=>{
                            return(
                            <Widget
                                key={index}
                                pos={index}
                                img={story.posterP}
                                color = {index == 0 ? "#466FFF": index == 1 ? "#E6AD1C" : index==2 ? "#FF6F32":"#4CA47C"}
                                text = {story.title}
                                url={story.url}
                                isBreakpoint = {isBreakpoint}
                                onclick={(e)=>{setShow(!show)}}
                            />
                            )
                        })}
                        </div>
                    </div>
                </div>
                <br></br>
                {stories?.length>0 && (

                    <div id='lightbox' className={`lightbox ${show?"show":""}`}>
                        <amp-story-player 
                            id="player2"
                            style={{width:"100vw",height:"100%"}}
                        >
                            {stories.map(((st,idx)=>{
                                return <a key={idx} href={`/blog/web-story/${st._id}/${st.slug}`}></a>
                            }))}
                        </amp-story-player>
                    </div>
                )}
            </div>   
        </>
    )
}
