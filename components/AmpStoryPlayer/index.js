import React,{useState,useEffect} from 'react'
import Head from 'next/head';
import Image from 'next/image';


async function initializeWidget(idx) {
    const player = document.getElementById("player2");
    // var stories = player.getStories();
    // player.show(stories[idx].href, null, {animate: true});
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
  
            }}>
              <Image 
                  className='img' 
                  width={100} 
                  height={100} 
                  src={img}
                  alt={text}  
                />
  
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
        const lightbox = document.getElementById("lightbox");
        const existed  = document.getElementById("player2");
        if(!existed){

            const playerEl = document.createElement('amp-story-player');
            playerEl.id = "player2"
            playerEl.style="width:100vw;height:100vh;"
            new AmpStoryPlayer(window, playerEl);
            document.body.appendChild(playerEl);
            playerEl.load();
            const urls = stories.map((st=>{
                return {href: st.url}
            }))
            playerEl.add(urls)
            // playerEl.pause()
    
            lightbox.appendChild(playerEl)
        }

        // const existed  = document.getElementById("playerConfig");
        // if(!existed){

        //     var script = document.createElement("script")
        //     script.id = "playerConfig"
        //     script.type="application/json"
        //     script.innerHTML=`
        //     {
        //         "behavior": {
        //         "autoplay": false,
        //         "pageScroll": false
        //         },
        //         "controls": [{
        //         "name": "close",
        //         "position": "start"
        //         }]
        //     }
        //     `
        //     player.appendChild(script)

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
