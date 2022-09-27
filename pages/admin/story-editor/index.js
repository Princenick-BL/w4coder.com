import React,{Fragment,useEffect,useState} from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import Image from 'next/image'
import { useStoryContext } from '../../../contexts/story.contex'
import { useRouter } from 'next/router'
import {GlobalProvider} from '../../../contexts/global.context'
import {StoryProvider} from '../../../contexts/story.contex'
import { getStory } from '../../../services/stories-editor'
import BlogHead from '../../../components/editor/BlogHead'
import withAuth from "../../../middleware/withAuth";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FileTextOutlined,
  UserOutlined,

} from '@ant-design/icons';
import Logo from '../../../layouts/icons/logo'
import WebStory from '../../../layouts/icons/webStory'
import GoogleAnalyticsIcon from '../../../layouts/icons/analytics'
import Link from 'next/link';
import AddObject from '../../../components/editor/addObject/story'
import StorySlidePreview from '../../../components/StorySlide/preview'
import StorySlideEditor from '../../../components/StorySlide/editor'

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function StoryEditorContent({location}) {

  const [collapsed, setCollapsed] = useState(true);

  const Router = useRouter()
  const {key} = Router.query

  const {state,dispatch} = useStoryContext()
  const {story} = state
  const [items,setItems] = useState([])

  const [currentIndex,setCurentIndex] = useState(0)

  const handleChangeCurrentSlide = (pos) =>{
    dispatch({
      type : 'setCurrentSlide',
      payload : items[pos]
    })
    dispatch({
      type : 'changeTab',
      payload : "THEMEBLOCK"
    })
  }

  useEffect(()=>{
    setItems(story?.slides)
    dispatch({
      type : 'setCurrentSlide',
      payload : {...story?.slides[0]}
    })
  },[story])

  useEffect(()=>{
    (async ()=>{
      if(key){
        const res = await getStory(key)
        if(res){
          dispatch({
            type : 'init',
            payload : {
              value : {
                ...res?.data,
                slides:[
                  {
                    id:0,
                    pos:1,
                    type : "SLIDE",
                    background : "https://api.lorem.space/image/movie?w=350&h=623",
                    sections :[
                        {
                          id:1,
                          type:"BACKGROUND",
                          content :"https://api.lorem.space/image/movie?w=350&h=623",
                        },
                        {
                          id:2,
                          type:"TEXTBLOCK",
                          content :"HELLO WORLD TITLE",
                          style:{
                              top:"90%",
                              bottom:5,
                              left : 0,
                              color : "#000",
                              width : 200,
                              textAlign : "center",
                              height : 100
                          }
                        }
                    ]
                  },
                  {
                    id:1,
                    pos:1,
                    type : "SLIDE",
                    background : "https://api.lorem.space/image/movie?w=350&h=623",
                    sections :[
                        {
                          id:1,
                            type:"BACKGROUND",
                            content :"https://api.lorem.space/image/movie?w=350&h=623",
                        },
                        {
                          id:2,
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
                          id:3,
                            type:"TEXTBLOCK",
                            content :"HELLO WORLD TITLE",
                            style:{
                                top:"55%",
                                left : "5%",
                                color : "#fff"
                            }
                        }
                    ]
                  },{
                      id:2,
                      pos:1,
                      type : "SLIDE",
                      background : "https://api.lorem.space/image/movie?w=350&h=623",
                      sections :[
                          {
                            id:1,
                              type:"IMAGEBLOCK",
                              content :"https://api.lorem.space/image/movie?w=340&h=300",
                              style:{
                                  width:"98%",
                                  height:"45%",
                                  top:"5%",
                                  left : "0%",
                                  margin : "1%",
                                  borderRadius:"10px",
                                  overflow : "hidden"
                              }
                          },
                        
                          {
                            id:2,
                              type:"TEXTBLOCK",
                              content :"HELLO WORLD TITLE",
                              style:{
                                  top:"60%",
                                  left : "0%",
                                  textAlign:"center",
                                  color:"#000",
                                  width:"100%"
                              }
                          }
                      ]
                  },{
                      id:3,
                      pos:1,
                      type : "SLIDE",
                      background : "https://api.lorem.space/image/movie?w=350&h=623",
                      sections :[
                          {
                            id:1,
                              type:"BACKGROUND",
                              content :"https://api.lorem.space/image/movie?w=350&h=623",
                          },
                          {
                            id:2,
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
                            id:3,
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
                ] 
              }
            }
          })
          
        }
      }
    })();
  },[key])

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {

    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };



  return (
    <div>
        <Head>
            <meta charSet="utf-8"/>
            <title>STORY EDITOR</title>
            <link rel="canonical" href={location}/>
        </Head>
        <main id="content" role="main" className={styles.main}>
          <AddObject/>
          <div className={styles.content}>
            <div className={styles.slideContainer}>
              <div className={styles.slide}>
                <StorySlideEditor/>
              </div>
              <div className={styles.info}>
                <div className={styles.infoNumPage}>Slide {currentIndex+1}</div>
              </div>
            </div>
            <div className={styles.allSlides}>
              <div className={styles.scrollBtn}></div>
              <div className={styles.slider}>
                {items && items.map((slide,index)=>{
                  return(
                    <div key={index} onClick={(e)=>{handleChangeCurrentSlide(index);setCurentIndex(index)}}>
                      <StorySlidePreview slide={slide} pos={index + 1}/>
                    </div>
                  )
                })}
              </div>
              <div className={styles.scrollBtn}></div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.status}>
              <div className={styles.statu}>
                <div>Draft</div>
                <div className={styles.saved}>Last saved 27/09/2000 - 10:09:33</div>
              </div>
              <div className={styles.button}>Update</div>
            </div>
            <div className={styles.metas}>
              <span>Title</span>
              <textarea placeholder="Title" value={story && story.title} rows={4}/>
              <span>Description</span>
              <textarea placeholder="Description" rows={6} value={story && story.desc}/>
              <span>Posters</span>
              <form className={styles.fileInputForm}>
                  <span className={styles.label}>
                      Upload File
                  </span>

                  <input type="file" name="upload" id="upload" className={styles.upload} placeholder="Upload File"/>
              </form>
            </div>
          </div>           
        </main>
    </div>
  )
}


function StoryEditor() {
  return (
    <GlobalProvider>
        <StoryProvider>
            <StoryEditorContent />
        </StoryProvider>
    </GlobalProvider>
  )
}

export default StoryEditor;

