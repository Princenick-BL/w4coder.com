import React,{useState} from 'react'
import Head from 'next/head';
import Image from 'next/image';


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
export default function AmpStoryPlayer() {
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
                    <div className={`lightbox ${show?"show":""}`}>
                    <amp-story-player style={{width:"100vw",height:"100vh"}} layout="responsive" width="360" height="600"id="player2" >
                        {stories.map((story,index)=>{
                            return(
                            <a key={index} href={story?.url}></a>
                            )
                        })}
                    </amp-story-player>
                </div>
            </div>   
        </>
    )
}
