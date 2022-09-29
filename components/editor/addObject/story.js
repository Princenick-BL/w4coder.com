import React,{useEffect, useState,useRef} from 'react'
import styles from './index.module.scss'
import {
    FontSizeOutlined,
    PictureOutlined ,
    InstagramOutlined,
    TwitterOutlined,
    PlaySquareOutlined,
    FormatPainterOutlined,
    HomeFilled
} from '@ant-design/icons';
import { useStoryContext } from '../../../contexts/story.contex';
import { getFiles } from '../../../services/files-editor';
import Image from 'next/image';
import StorySlidePreview from '../../StorySlide/preview';
import CustomRichText from './CustomRichTextEditor';
import Link from 'next/link';

const myLoader = ({ src, width, quality }) => {
    return src
}

export default function AddObject() {

    const wrapperRef = useRef()

    const [showMedia,setShowMedias] = useState(false);
    const [medias,setMedias] = useState(false)
    const {state,dispatch} = useStoryContext()
    const [show,setShow] = useState(state?.currentTab);

    const handleAddText = () =>{
        dispatch({
            type : "add-object",
            payload :  {  value : 
                {
                    pos : 1,
                    type : "TEXT_BLOCK",
                    meta : {  },
                    content : `<p>Hello world</p>`
    
                },
            }
        })
    }


    const handleChangeTab = (payload)=>{
        dispatch({
            type:"changeTab",
            payload : payload
        })
    }

    const handleAddPicture = () =>{
        dispatch({
            type : "add-object",
            payload :  {  value : 
                {
                    pos : 2,
                    type : "IMAGE_BLOCK",
                    meta : {
                        width : 1280,
                        height : 700,
                        alt : state?.title
                    },
                    content : `https://picsum.photos/1024/700`

                },
            }
        })
    }

    useEffect(()=>{
        (async ()=>{
            const res = await getFiles('images')
            setMedias(res.files)
        })();
    },[showMedia])

    // function useOutsideAlerter(ref) {
    //     useEffect(() => {
    
    //       /**
    //        * Alert if clicked on outside of element
    //        */
    //       function handleClickOutside(event) {
    //         if (ref.current && !ref.current.contains(event.target)) {
    //             setShowMedias(false)
    //         }
    //       }
    //       // Bind the event listener
    //       document.addEventListener("mousedown", handleClickOutside);
    //       return () => {
    //         // Unbind the event listener on clean up
    //         document.removeEventListener("mousedown", handleClickOutside);
    //       };
    //     }, [ref]);
    // }
    // useOutsideAlerter(wrapperRef);


    const Menu = () =>{

        const [show,setShow] = useState(1)

        const slide = {
            pos:1,
            type : "SLIDE",
            background : "https://picsum.photos/350/623",
            sections :[
                {
                    type:"BACKGROUND",
                    content :"https://picsum.photos/350/623",
                },
                {
                    type:"IMAGEBLOCK",
                    content :"https://api-nickscorp-app.herokuapp.com/read/e495cfd0b4686374727ad525f53414ad.png",
                    style:{
                        width:"150%",
                        height:"100%",
                        top:"50%",
                        left : "-30%",
                        transform:"rotate(30deg)"
                    }
                },
                {
                    type:"TEXTBLOCK",
                    content :"HELLO WORLD TITLE",
                    style:{
                        bottom:"5%",
                        left : "5%",
                        color : "#fff"
                    }
                }
            ]
        }

        const slide2 = {
            pos:1,
            type : "SLIDE",
            background : "https://picsum.photos/350/623",
            sections :[
                {
                    type:"IMAGEBLOCK",
                    content :"https://picsum.photos/350/350",
                    style:{
                        width:"98%",
                        height:"45%",
                        top:"5%",
                        left : "0%",
                        margin : "1%",
                        borderRadius:"10px",
                    }
                },
               
                {
                    type:"TEXTBLOCK",
                    content :"HELLO WORLD TITLE",
                    style:{
                        top:"60%",
                        left : "0%",
                        textAlign:"center",
                        color:"#000"
                    }
                }
            ]
        }

        const slide3 = {
            pos:1,
            type : "SLIDE",
            background : "https://picsum.photos/350/623",
            sections :[
                {
                    type:"BACKGROUND",
                    content :"https://picsum.photos/350/623",
                },
                {
                    type:"IMAGEBLOCK",
                    content :"https://api-nickscorp-app.herokuapp.com/read/d99236183650026fce649fdf35608bf4.png",
                    style:{
                        width:"150%",
                        height:"60%",
                        top:"40%",
                        left : "0%",
                    }
                },
                {
                    type:"TEXTBLOCK",
                    content :"HELLO WORLD TITLE",
                    style:{
                        bottom:"5%",
                        left : "5%",
                        color : "#fff"
                    }
                }
            ]
        }
        

        const getOpen = () =>{
            switch(state?.currentTab){
                case 1 :
                    return(
                        <div className={styles.openedMenu }>
                            <div className={styles.themesTitle}>Themes</div>
                            <div className={styles.themes}>
                                <div className={styles.template}>
                                    <StorySlidePreview slide={slide2}/>
                                </div>
                                <div className={styles.template}>
                                    <StorySlidePreview slide={slide3}/>
                                </div>
                                <div className={styles.template}>
                                    <StorySlidePreview slide={slide}/>
                                </div>
                                <div className={styles.template}>
                                    <StorySlidePreview slide={slide}/>
                                </div>
                                <div className={styles.template}> 
                                    <StorySlidePreview slide={slide}/>
                                </div>
                                <div className={styles.template}>
                                    <StorySlidePreview slide={slide}/>
                                </div>
                                <div className={styles.template}>
                                    <StorySlidePreview slide={slide}/>
                                </div>
                                <div className={styles.template}>
                                    <StorySlidePreview slide={slide}/>
                                </div>
                                <div className={styles.template}>
                                    <StorySlidePreview slide={slide}/>
                                </div>
                                <div className={styles.template}>
                                    <StorySlidePreview slide={slide}/>
                                </div>
                            </div>
                        </div>
                    )
                case 2 :
                    return(
                        <div className={styles.openedMenu}>
                            <div className={styles.themesTitle}>
                                <div className={styles.addText}>Add text</div>                                
                            </div>
                            <CustomRichText/>
                        </div>
                    )
                case 3 :
                    return(
                        <div className={styles.openedMenu }>
                            <div className={styles.themesTitle}>Images</div>
                            <form className={styles.fileInputForm}>
                                <span className={styles.label}>
                                    Upload File
                                </span>
  
                                <input type="file" name="upload" id="upload" className={styles.upload} placeholder="Upload File"/>
                            </form>
                            <div className={styles.medias}>
                                {medias && medias.map((media,index)=>{
                                    return(
                                        <div 
                                            key={index}
                                            className={styles.mediaImg}
                                            style={{backgroundImage:`url(${media.url})`}}
                                        ></div>
                                    )
                                })}

                            </div>
                            
                        </div>
                    )
                case 4 :
                    return(
                        <div className={styles.openedMenu}>
                            <div className={styles.themesTitle}>Instagram</div>

                            
                        </div>
                    )
                case 5 :
                    return(
                        <div className={styles.openedMenu}>
                            <div className={styles.themesTitle}>Twitter</div>
                            
                        </div>
                    )
                default :
                return(
                    <div className={styles.openedMenu }>
                        
                    </div>
                )
            }
        }
        //onClick={(e)=>{handleAddText(e)}}
        //onClick={(e)=>{handleAddPicture(e)}}

        return(
            <div className={styles.sider}>
                <div className={styles.objects}>
                    <div>
                        <Link href={"/admin"} >
                            <a className={styles.homeBack}>
                                <div className={styles.object }>
                                    <HomeFilled />
                                    Home
                                </div>
                            </a>
                        </Link>
                        <div className={styles.object + " "+ (state?.currentTab ===1 ? styles.active:"")} onClick={(e)=>{handleChangeTab('THEMEBLOCK')}}>
                            <FormatPainterOutlined />
                            Themes
                        </div>
                        <div className={styles.object + " "+ (state?.currentTab ===2 ? styles.active:"")} onClick={(e)=>{handleChangeTab('TEXTBLOCK')}}>
                            <FontSizeOutlined />   
                            Text 
                        </div>
                        <div className={styles.object + " "+ (state?.currentTab ===3 ? styles.active:"")} onClick={(e)=>{handleChangeTab('IMAGEBLOCK')}}>
                            <PictureOutlined />
                            Images
                        </div>
                        <div className={styles.object + " "+ (state?.currentTab ===4 ? styles.active:"")} onClick={(e)=>{handleChangeTab('INSTABLOCK')}}>
                            <InstagramOutlined />
                            Insta
                        </div>
                        <div className={styles.object + " "+ (state?.currentTab ===5 ? styles.active:"")} onClick={(e)=>{handleChangeTab('TWITTERBLOCK')}}>
                            <TwitterOutlined />
                            Twitter
                        </div>
                    </div>
                    <div className={styles.object+ " "+styles.mymedias+ " "+ (showMedia?styles.active : "")} onClick={(e)=>{setShowMedias(!showMedia)}}>
                        MEDIAS
                    </div>
                </div>
                {show&&(
                    <>
                    {getOpen()}
                    </>
                )}
            </div>
        )
    }

    return (
        <Menu/>
        // <>
        //         {/* <div 
        //             className={styles.addObject}
        //             onClick={(e)=>{setShow(!show)}}
        //             >
        //             +
        //         </div> */}
        //         <Menu/>
        //         {showMedia &&
        //             <div className={styles.medias} ref={wrapperRef}>
        //                 <div className={styles.form}>
        //                     <input type={"text"} placeholder='Search ?'/>
        //                 </div>
        //                 <div className={styles.mediasContent}>
        //                     {medias && medias?.map((file,index)=>{
        //                         return(
        //                             <div className={styles.img} key={index}>
        //                                 <Image
        //                                     loader={myLoader}
        //                                     src={file?.url}
        //                                     width={100}
        //                                     height={100}
        //                                     layout="responsive"
        //                                     alt={"Image"}
        //                                 />
        //                             </div>
        //                         )
        //                     })}
        //                 </div>
        //             </div>
        //         }
            
        // </div>

    )
}

