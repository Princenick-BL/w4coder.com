import React,{useState,useEffect,useRef} from 'react'
import Image from 'next/image';
import styles from './index.module.scss'
import LasrArticle from '../LastArticles'


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
            document.getElementById("mainContent").style.overflowY="hidden"
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

export default function StoryPlayerWidget({topA}) {

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

    const playerRef = useRef(null);

    
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
    },['init'])

   


    useEffect(()=>{
      const player = document.getElementById("player2");
      const lightboxEl = document.querySelector(".lightbox");

      player.addEventListener("amp-story-player-close", () => {
         document.getElementById("mainContent").style.overflowY="auto"
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
    <></>
  )
}
