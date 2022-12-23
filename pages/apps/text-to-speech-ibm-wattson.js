import React, { useRef } from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Image from 'next/image'
import Footer from '../../components/Footer'
import styles from '../index.module.scss'
import { useEffect,useState,useCallback } from 'react'
import currentStyles from './index.module.scss'
import {getVoices,generateTTS} from '../../services/tts'
import {useAsync} from '../../hook/useAsync'
import { useRouter } from 'next/router'

const tracks = [
    {
      id: 0,
      title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
      url:
        "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
    },
    {
      id: 1,
      title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
      url:
        "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3"
    }
];

export default function ListApp({isBreakpoint,page1,topA,toggleTheme,stories}) {
  
    var player = useRef(null)
    const router = useRouter()
    const [voices,setVoices] = useState([])
    const [gender,setGender] = useState("female")
    const [language,setLanguage] = useState(router.locale.slice(0,2)+router.locale.slice(2)?.toUpperCase())
    const [text,setText] = useState(false)
    const [voice,setVoice] = useState(false)
    const [changedText,setChangedtext] = useState(true)
    const [generating,setIsgenerating]=useState(false)
    const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
    const [playing,setPlaying] = useState(false)
    const [audio,setAudio] = useState(null)
  
    const {run,data,loading} = useAsync(getVoices)
  
  
    useEffect(()=>{
      run()
    },[])
  
    useEffect(()=>{
        if(data && data.success){
            setVoices(data.data)
        }
    },[data])
  
   
    const getFilteredVoide = useCallback(() =>{
  
        return voices.filter((v)=>{
            if(gender && language){
                return (v.gender === gender && v.language?.toLowerCase() == language?.toLowerCase() )
            }else if(gender){
                return (v.gender === gender  )
            }else if (language){
                return (v.language === language  )
            }else{
                return true
            }
        })
  
    })
  
  
  
    const handleGenerateTTS = useCallback( async () =>{
      
        setIsgenerating(true)
      
        if(changedText || player.current===null){
            const res = await generateTTS(text,voice)
            if(res.success){
                setIsgenerating(false)
                setChangedtext(false)
                if(!res.data.error){
                    const b64 = Buffer.from(res.data.buffer).toString('base64')
                    console.log("new audio")
                    player.current  = new Audio('data:audio/wav;base64,'+b64) 
                    setAudio('data:audio/wav;base64,'+b64) 
                    handlePlay()    
                }else{
                    alert(res.data.message)
                }
            }
        }else{
            console.log("old audio",audio)
            handlePlay()    
        }

    },[voice,text])

    const handlePlay = () =>{
        setPlaying(!playing)
        if(player.current){
            if(!playing){
                player.current.play()
            }else{
                player.current.pause()
            }
        }
    }

    useEffect(()=>{
        console.log(player.current)
    },[player.current])

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.head}>
                <Header isBreakpoint={isBreakpoint} border={false}/>
            </div>
            <h1 className={currentStyles.h1}>{"IBM WATTSON API based text to speech"}</h1>
            <main className={currentStyles.main}>
                <div className={currentStyles.top} >
                    <textarea placeholder={"Insert your text here"} onChange={(e)=>{setText(e.target.value);setChangedtext(true)}}   >

                    </textarea>
                </div>
                
                <div className={currentStyles.bottom}>
                    <div className={currentStyles.box}>
                        <select className={currentStyles.select} defaultValue={language || "en-US"}  onChange={(e)=>setLanguage(e.target.value)}>
                            <option value="">Language</option>
                            <option value="fr-FR">French (Français)</option>
                            <option value="fr-CA">French Canadian</option>
                            <option value="en-US">American English</option>
                            <option value="en-GB"> British English</option>
                            <option value="de-DE">Standard German (Standard Deutsch)</option>
                            <option value="it-IT">Italian (Italiano)</option>
                            <option value="pt-BR">Brazilian Portuguese (Português Brasileiro)</option>
                            <option value="pt-BR">Brazilian Portuguese (português brasileiro)</option>
                            <option value="es-LA">Latin American Spanish (español latinoamericano)</option>
                            <option value="es-ES">Castilian Spanish (español castellano)</option>
                            <option value="ja-JP">Japanese (日本語)</option>
                        </select>

                        <select  className={currentStyles.select}  defaultValue="female" onChange={(e)=>setGender(e.target.value)}>
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <select  className={currentStyles.select} defaultValue="en-US_LisaV2Voice" onChange={(e)=>setVoice(e.target.value)}>
                            <option value="">Voice</option>
                            {getFilteredVoide().map(v=>{
                                return <option key={v.name} value={v.name}>{v.description.split(' ')[0].slice(0, -1)}</option>
                            })}
                        </select>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className={currentStyles.bottom}>
                    <svg  style={{shapeRendering: "auto",margin:"0 5px"}} width="40" height="40" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" onClick={(e)=>{handleGenerateTTS(e)}}>
                        <svg style={{width:"35px",height:"35px"}} viewBox="0 0 24 24" >
                            <path _ngcontent-fft-c113="" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path>
                        </svg>
                        <circle cx="50" cy="50" fill="none" stroke={generating ? "red" : "none"} strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1">
                            </animateTransform>
                        </circle>
                    </svg>
                    {audio &&(
                        <a href={audio}>
                            <svg style={{width:"30px",height:"40px",position:"absolute",right:"1rem"}} viewBox="0 0 24 24">
                                <path _ngcontent-fft-c113="" d="M12.4529 21.8638H13.7627L14.0493 21.8585C15.0043 21.8585 15.631 21.7052 15.9645 21.3867C16.2967 21.0683 16.4574 20.4667 16.4574 19.5493C16.4574 18.6254 16.2886 18.0107 15.9431 17.6739C15.5976 17.3345 14.9681 17.1694 14.0199 17.1694H10.8672V23.9476H12.4529V21.8638ZM14.8516 19.5729C14.8516 20.1286 14.7444 20.3003 14.6815 20.354C14.6132 20.4104 14.3962 20.506 13.7105 20.506H12.4529V18.5271H13.8364C14.5127 18.5271 14.6735 18.6385 14.7069 18.6726C14.7498 18.7158 14.8516 18.8927 14.8516 19.5729Z"></path>
                                <path _ngcontent-fft-c113="" d="M6.16652 21.1679L6.01518 21.6331L5.86116 21.1613C5.72857 20.7708 5.62143 20.472 5.54107 20.2597L4.3625 17.2742L4.32232 17.1694H2V23.9476H3.58705V20.2675C3.58705 20.0382 3.57902 19.7695 3.56429 19.4628C3.6808 19.8075 3.77188 20.0591 3.84286 20.2335L5.34821 23.9476H6.71563L8.20759 20.2033C8.27321 20.0329 8.36295 19.78 8.47679 19.4432C8.46339 19.7472 8.4567 20.0225 8.4567 20.2688V23.9489H10.0438V17.1707H7.67857L6.47857 20.2715C6.38884 20.4969 6.28304 20.7996 6.16652 21.1679Z"></path>
                                <path _ngcontent-fft-c113="" d="M19.5411 24.0001C20.6045 24.0001 21.309 23.8612 21.6933 23.5742C22.0871 23.2819 22.2867 22.7236 22.2867 21.9124C22.2867 21.1837 22.0041 20.6936 21.4643 20.4668C21.8581 20.2571 22.1902 19.8246 22.1902 18.9662C22.1902 18.2664 21.984 17.7736 21.5755 17.5036C21.1858 17.2428 20.5041 17.1157 19.4916 17.1157C18.4831 17.1157 17.8188 17.252 17.4599 17.5312C17.0902 17.8195 16.9094 18.3555 16.9094 19.1694V19.5743H18.4509V19.2218C18.4509 18.7198 18.5527 18.5875 18.5969 18.5508C18.6438 18.5141 18.8273 18.425 19.4956 18.425C20.2389 18.425 20.4317 18.5062 20.4786 18.5403C20.5108 18.5652 20.6179 18.6818 20.6179 19.1969C20.6179 19.6372 20.5081 19.7303 20.4759 19.7486C20.417 19.7788 20.1853 19.8509 19.2773 19.8509L18.8929 19.8417V21.1234H19.8237C20.3326 21.1234 20.5108 21.2047 20.5697 21.2532C20.6246 21.2964 20.7143 21.4275 20.7143 21.8115C20.7143 22.3553 20.6005 22.5047 20.5509 22.5454C20.484 22.5991 20.2697 22.6882 19.5866 22.6882C18.8032 22.6882 18.5902 22.5952 18.534 22.5532C18.4858 22.5192 18.3733 22.3802 18.3733 21.8534C18.3733 21.8246 18.3679 21.7354 18.3585 21.5887L18.3478 21.4353H16.8023L16.7969 21.9582C16.7969 22.738 17.0005 23.2819 17.4036 23.5729C17.7987 23.8599 18.4965 24.0001 19.5411 24.0001Z"></path>
                                <path _ngcontent-fft-c113="" fill-rule="evenodd" clip-rule="evenodd" d="M1.33333 10.3011C0.596 10.3011 0 10.6553 0 11.0935V12.3605C0 13.427 1.464 14.263 3.33333 14.263H20.6667C22.536 14.263 24 13.427 24 12.3605V11.0935C24 10.6553 23.4027 10.3011 22.6667 10.3011C21.9307 10.3011 21.3333 10.6553 21.3333 11.0935V12.3605C21.3333 12.6687 20.736 12.6782 20.6667 12.6782H3.33333C3.264 12.6782 2.66667 12.6687 2.66667 12.3605V11.0935C2.66667 10.6553 2.07067 10.3011 1.33333 10.3011ZM12.9427 10.9104L19.692 6.89934C20.2133 6.58951 20.2133 6.08872 19.692 5.7789C19.172 5.46907 18.2867 5.46907 17.7653 5.7789L13.3333 8.38824V0.79239C13.3333 0.354198 12.736 0 12 0C11.264 0 10.6667 0.354198 10.6667 0.79239V8.48728L6.23467 5.82803C5.71333 5.51899 4.89067 5.51899 4.36933 5.82803C4.10933 5.98333 3.98933 6.18619 3.98933 6.38824C3.98933 6.5911 4.12533 6.79395 4.38533 6.94846L11.0547 10.9104C11.576 11.2202 12.4213 11.2202 12.9427 10.9104Z"></path>
                            </svg>
                        </a>
                    )}
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2>Documentation</h2>
                <br></br>
                <h3>How to use</h3>
                <ul>
                    <li>Step 1 : Paste the text you want to convert into speech in the text area</li>
                    <br></br>
                    <li>Step 2 : Select the voice you want to use for the speech generation by choosing language and gender</li>
                    <br></br>
                    <li>Step 3 : Click on the play button to generate the speech and listen.</li>
                    <br></br>
                    <li>Step 4 : When your speech is available for download, the download icon will appear on the right side just next to the play button you used before</li>
                </ul>
                <h3>Learn more</h3>
                <br></br>
                <br></br>
            </main>
            <Footer toggleTheme={toggleTheme}/>
        </div>
    )
}
