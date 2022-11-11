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

export default function AmpStoryPlayerComponent() {

    const [show,setShow]=useState(false)

    const [stories,setStories] = useState([
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s1",
            img : 'https://picsum.photos/640/853',
            color : '#FF6F32',
            text : 'Comment créer une application web full stack avec NextJS et NodeJS'
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s2",
            img : "https://picsum.photos/640/853" ,
            color :"#E6AD1C" ,
            text : "Comment créer une application web full stack avec NextJS et NodeJS"
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s3",
            img : "https://picsum.photos/640/853" ,
            color : "#466FFF",
            text : "The Next King of the Sea"
        },
        {
            url: "https://wsdemos.uc.r.appspot.com/ampfest/s4",
            img : "https://picsum.photos/640/853",
            color : "#4CA47C",
            text : "Spark a Passion for Reading"
        }
    ])

    useEffect(()=>{
        const lightbox = document.getElementById("lightbox");
        const existed  = document.getElementById("player2");
        if(!existed){

            const playerEl = document.createElement('amp-story-player');
            playerEl.id = "player2"
            playerEl.style="width:100vw;height:100vh;"
            new AmpStoryPlayer(window, playerEl);
            lightbox.appendChild(playerEl)
            playerEl.load();
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
            playerEl.appendChild(script)
            const urls = stories.map((st=>{
                return {href: st.url}
            }))
            playerEl.add(urls)
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
                <div id='lightbox' className={`lightbox ${show?"show":""}`}>
                
                </div>
            </div>   
        </>
    )
}
