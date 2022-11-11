import React,{useState,useEffect} from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../Logo'
import RecommendedTitle from '../RecommendedTitle'

async function initializeWidget(idx) {
    const player = document.getElementById("player2");
    // var stories = player.getStories();
    // console.log(stories)
    // player.show(stories[idx].href, null, {animate: true});
    console.log(idx)
    player.go(idx )
    // player.play();
}
  
const Widget = ({img,pos,color,text,url,onclick}) =>{
    return(
        <div className="entry-point-card-container" 
          onClick={(e)=>{        
            onclick()
            document.getElementById("app").style.overflowY="hidden"
            initializeWidget(pos)
        }}>
            <div 
                className='img-container' 
                style={{ 
                    borderColor: `${color} !important`,
                    border: `2px solid ${color}`,
                }}
            >
                <Image 
                    className='img' 
                    width={100} 
                    height={100} 
                    src={img}
                    alt={text}  
                />
                <div className="viewport-author-logo"><Logo single={true}/></div>
                <div className="viewport-author"><Logo/></div>
            </div>
            <div>
            <span className="entry-point-card-title">{text}</span>
            </div>
        </div>
    )
}

export default function AmpStoryPlayerComponent({stories}) {

    const [show,setShow]=useState(false)



    useEffect(()=>{

        const lightbox = document.getElementById("lightbox");
        const existed  = document.getElementById("player2");
        if(!existed){

            const playerEl = document.createElement('amp-story-player');
            playerEl.id = "player2"
            playerEl.style="width:100vw;height:100vh;"
            const player = new AmpStoryPlayer(window, playerEl);
            lightbox.appendChild(player)
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
            const urls = stories.map((st=>{
                return {href:`/blog/web-story/${st._id}/${st.slug}`}
            }))
            player.add(urls)
            // playerEl.pause()
    
        }

        // const existed  = document.getElementById("playerConfig");
        // if(!existed){

      

        //     player.addEventListener("amp-story-player-close", () => {
        //         document.getElementById("app").style.overflowY="auto"
        //         player.pause();
        //         setShow(false)
        //     });

            
        //     player.addEventListener("ready", () => {
        //         player.play()
        //         initializeWidget(0);
        //         player.pause()
        //     });
        // }
    }, [])
    
    return (
        <>
            <RecommendedTitle title={"Web stories"}/>
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
                                color = {index == 0 ? "#FF6F32": index == 1 ? "#E6AD1C" : index==2 ? "#466FFF":"#4CA47C"}
                                text = {story.title}
                                url={story.url}
                                onclick={(e)=>{setShow(!show)}}
                            />
                            )
                        })}
                        </div>
                    </div>
                </div>
                <br></br>
                <div id='lightbox' className={`lightbox ${show?"show":""}`}>
                
                </div>
            </div>   
        </>
    )
}
