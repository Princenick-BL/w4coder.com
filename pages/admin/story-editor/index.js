import React,{useCallback,useEffect,useRef,useState} from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import Image from 'next/image'
import { useStoryContext } from '../../../contexts/story.contex'
import { useRouter } from 'next/router'
import {GlobalProvider} from '../../../contexts/global.context'
import {StoryProvider} from '../../../contexts/story.contex'
import { getStory } from '../../../services/stories-editor'
import withAuth from "../../../middleware/withAuth";
import AddObject from '../../../components/editor/story/addObject/story'
import StorySlidePreview from '../../../components/StorySlide/preview'
import StorySlideEditor from '../../../components/StorySlide/editor'
import { patchStory } from '../../../services/stories-editor'
import { FaEdit } from 'react-icons/fa'
import Drawer from 'react-modern-drawer'
import { CloseOutlined } from '@ant-design/icons'
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

  const [initstate,setInitState] = useState(false)

  const [collapsed, setCollapsed] = useState(false);

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
    
  },[story?._id])

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
                // slides:[
                //   {
                //     id:0,
                //     pos:1,
                //     type : "SLIDE",
                //     background : "https://picsum.photos/350/623?random=1",
                //     sections :[
                //         {
                //           id:1,
                //           type:"BACKGROUND",
                //           content :"https://picsum.photos/350/623?random=1",
                //         },
                //         {
                //           id:2,
                //           type:"TEXTBLOCK",
                //           balise : "h1",
                //           content :"Top 5 Javascript Framework and librairie",
                //           style:{
                //             color : "#fff",
                //             width : "100%%",
                //             height : "max-content",
                //             fontSize : "1.5rem",
                //             lineHeight : "1.5",
                //             height: "12.1988%"
                //           }
                //         },
                //         {
                //           id:3,
                //           type:"TEXTBLOCK",
                //           balise : "p",
                //           content :"By Prince Nick BALLO",
                //           style:{
                //             color : "#fff",
                //             width : "100%%",
                //             height : "max-content",
                //             fontSize : "1rem",
                //             height: "12.1988%"
                //           }
                //         }
                //     ]
                //   },
                //   {
                //     id:1,
                //     pos:1,
                //     type : "SLIDE",
                //     background : "https://picsum.photos/350/623?random=1",
                //     sections :[
                //         {
                //           id:4,
                //             type:"IMAGEBLOCK",
                //             content :"https://picsum.photos/350/623?random=1",
                //             style:{
                //                 width:"90%",
                //                 height:"80%",
                //                 top:"5%",
                //                 left : "5%",
                //             }
                //         },
                //         {
                //           id:5,
                //           type:"TEXTBLOCK",
                //           balise : "h1",
                //           content :"Top 5 Javascript Framework and librairie",
                //           style:{
                //             color : "#fff",
                //             width : "100%%",
                //             height : "max-content",
                //             fontSize : "1.5rem",
                //             lineHeight : "1.5",
                //             height: "12.1988%"
                //           }
                //         },
                //         {
                //           id:6,
                //           type:"TEXTBLOCK",
                //           balise : "p",
                //           content :"By Prince Nick BALLO",
                //           style:{
                //             color : "#fff",
                //             width : "100%%",
                //             height : "max-content",
                //             fontSize : "1rem",
                //             height: "12.1988%"
                //           }
                //         }
                //     ]
                //   },
                //   {
                //       id:2,
                //       pos:1,
                //       type : "SLIDE",
                //       background : "https://picsum.photos/350/623?random=1",
                //       sections :[
                //           {
                //             id:7,
                //               type:"BACKGROUND",
                //               content :"https://api.lorem.space/image/movie?w=340&h=300",
                //               style:{
                //                   width:"98%",
                //                   height:"45%",
                //                   top:"5%",
                //                   left : "0%",
                //                   margin : "1%",
                //                   borderRadius:"10px",
                //                   overflow : "hidden"
                //               }
                //           },
                //           {
                //             id:8,
                //             type:"TEXTBLOCK",
                //             balise : "h1",
                //             content :"Top 5 Javascript Framework and librairie",
                //             style:{
                //               color : "#fff",
                //               width : "100%%",
                //               height : "max-content",
                //               fontSize : "1.5rem",
                //               lineHeight : "1.5",
                //               height: "12.1988%"
                //             }
                //           },
                //           {
                //             id:9,
                //             type:"TEXTBLOCK",
                //             balise : "p",
                //             content :"By Prince Nick BALLO",
                //             style:{
                //               color : "#fff",
                //               width : "100%%",
                //               height : "max-content",
                //               fontSize : "1rem",
                //               height: "12.1988%"
                //             }
                //           }
                //       ]
                //   },
                //   {
                //       id:3,
                //       pos:1,
                //       type : "SLIDE",
                //       background : "https://picsum.photos/350/623?random=1",
                //       sections :[
                //           {
                //             id:10,
                //               type:"BACKGROUND",
                //               content :"https://picsum.photos/350/623?random=1",
                //           },
                //           {
                //             id:11,
                //             type:"TEXTBLOCK",
                //             balise : "h1",
                //             content :"Top 5 Javascript Framework and librairie",
                //             style:{
                //               color : "#fff",
                //               width : "100%%",
                //               height : "max-content",
                //               fontSize : "1.5rem",
                //               lineHeight : "1.5",
                //               height: "12.1988%"
                //             }
                //           },
                //           {
                //             id:12,
                //             type:"TEXTBLOCK",
                //             balise : "p",
                //             content :"By Prince Nick BALLO",
                //             style:{
                //               color : "#fff",
                //               width : "100%%",
                //               height : "max-content",
                //               fontSize : "1rem",
                //               height: "12.1988%"
                //             }
                //           }
                //       ]
                //   },
                //   {
                //     id:4,
                //     pos:1,
                //     type : "SLIDE",
                //     background : "https://picsum.photos/350/623?random=1",
                //     sections :[
                //         {
                //           id:13,
                //             type:"BACKGROUND",
                //             content :"https://picsum.photos/350/623?random=1",
                //         },
                //         {
                //           id:14,
                //           type:"TEXTBLOCK",
                //           balise : "h1",
                //           content :"Top 5 Javascript Framework and librairie",
                //           style:{
                //             color : "#fff",
                //             width : "100%%",
                //             height : "max-content",
                //             fontSize : "1.5rem",
                //             lineHeight : "1.5",
                //             height: "12.1988%"
                //           }
                //         },
                //         {
                //           id:15,
                //           type:"TEXTBLOCK",
                //           balise : "p",
                //           content :"By Prince Nick BALLO",
                //           style:{
                //             color : "#fff",
                //             width : "100%%",
                //             height : "max-content",
                //             fontSize : "1rem",
                //             height: "12.1988%"
                //           }
                //         }
                //     ]
                //   },
                //   {
                //     id:5,
                //     pos:1,
                //     type : "SLIDE",
                //     background : "https://picsum.photos/350/623?random=1",
                //     sections :[
                //         {
                //           id:1,
                //             type:"BACKGROUND",
                //             content :"https://picsum.photos/350/623?random=1",
                //         },
                //         {
                //           id:2,
                //           type:"TEXTBLOCK",
                //           balise : "h1",
                //           content :"Top 5 Javascript Framework and librairie",
                //           style:{
                //             color : "#fff",
                //             width : "100%%",
                //             height : "max-content",
                //             fontSize : "1.5rem",
                //             lineHeight : "1.5",
                //             height: "12.1988%"
                //           }
                //         },
                //         {
                //           id:3,
                //           type:"TEXTBLOCK",
                //           balise : "p",
                //           content :"By Prince Nick BALLO",
                //           style:{
                //             color : "#fff",
                //             width : "100%%",
                //             height : "max-content",
                //             fontSize : "1rem",
                //             height: "12.1988%"
                //           }
                //         }
                //     ]
                //   },
                //   {
                //     id:6,
                //     pos:1,
                //     type : "SLIDE",
                //     background : "https://picsum.photos/350/623?random=1",
                //     sections :[
                //         {
                //           id:1,
                //             type:"BACKGROUND",
                //             content :"https://picsum.photos/350/623?random=1",
                //         },
                //         {
                //           id:2,
                //           type:"TEXTBLOCK",
                //           balise : "h1",
                //           content :"Top 5 Javascript Framework and librairie",
                //           style:{
                //             color : "#fff",
                //             width : "100%%",
                //             height : "max-content",
                //             fontSize : "1.5rem",
                //             lineHeight : "1.5",
                //             height: "12.1988%"
                //           }
                //         },
                //         {
                //           id:3,
                //           type:"TEXTBLOCK",
                //           balise : "p",
                //           content :"By Prince Nick BALLO",
                //           style:{
                //             color : "#fff",
                //             width : "100%%",
                //             height : "max-content",
                //             fontSize : "1rem",
                //             height: "12.1988%"
                //           }
                //         }
                //     ]
                //   },
                //   {
                //     id:7,
                //     pos:1,
                //     type : "SLIDE",
                //     background : "https://picsum.photos/350/623?random=1",
                //     sections :[
                //         {
                //           id:1,
                //             type:"BACKGROUND",
                //             content :"https://picsum.photos/350/623?random=1",
                //         },
                //         {
                //           id:2,
                //           type:"TEXTBLOCK",
                //           balise : "h1",
                //           content :"Top 5 Javascript Framework and librairie",
                //           style:{
                //             color : "#fff",
                //             width : "100%%",
                //             height : "max-content",
                //             fontSize : "1.5rem",
                //             lineHeight : "1.5",
                //             height: "12.1988%"
                //           }
                //         },
                //         {
                //           id:3,
                //           type:"TEXTBLOCK",
                //           balise : "p",
                //           content :"By Prince Nick BALLO",
                //           style:{
                //             color : "#fff",
                //             width : "100%%",
                //             height : "max-content",
                //             fontSize : "1rem",
                //             height: "12.1988%"
                //           }
                //         }
                //     ]
                //   },

                // ] 
              }
            },
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

  const handleUpdate = useCallback(async (event) => {

    try{
      const res =  await patchStory(story);
      if(res){
        dispatch({
          type : 'init',
          payload : {
            value : res?.data
          }
        })
      }
    }catch(e){
      
    }
    
  }, [story]);


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
            <div className={styles.info}>
              <div className={styles.infoNumPage}>Slide {currentIndex+1}</div>
              <div className={styles.statu}>
                <div>Draft</div>
                <div className={styles.saved}>Last saved {new Date(story?.updatedAt).toLocaleDateString()}</div>
              </div>
              <div className={styles.rightAction}>
                <div className={styles.button} onClick={(e)=>{handleUpdate()}}>Update</div>
                <FaEdit 
                  className={styles.editForm}
                  onClick={(e)=>{setCollapsed(!collapsed)}}
                />
              </div>
            </div>
            <div className={styles.slideContainer}>
              <div className={styles.containerContent}>

                <div className={styles.slide}>
                  <StorySlideEditor />
                </div>
              </div>
              <div className={styles.allSlides}>
                <div className={styles.scrollBtn}>
                  <div></div>
                </div>
                <div className={styles.slider}>
                  {items && items.map((slide,index)=>{
                    return(
                      <div key={index}>
                        <div className={styles.addSlide}>+</div>
                        <div  onClick={(e)=>{handleChangeCurrentSlide(index);setCurentIndex(index)}}>
                          <StorySlidePreview slide={slide} pos={index + 1}/>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className={styles.scrollBtn}></div>
              </div>
              
            </div>
          </div>
          <Drawer
              open={collapsed}
              onClose={setCollapsed}
              direction='right'
              className={styles.right}
              
            >
                <div className={styles.status}>
                  <CloseOutlined
                    style={{margin:"1rem",fontWeight:"bold"}}
                    onClick={(e)=>{setCollapsed(!collapsed)}}
                   />
                </div>
                <div className={styles.metas}>
                  <span>Posters</span>
                  <form className={styles.fileInputForm}>
                      <span className={styles.label}>
                          Upload File
                      </span>

                      <input type="file" name="upload" id="upload" className={styles.upload} placeholder="Upload File"/>
                  </form>
                  <span>Title</span>
                  <textarea placeholder="Title" value={story && story.title} rows={4}/>
                  <span>Description</span>
                  <textarea placeholder="Description" rows={6} value={story && story.desc}/>
                </div>
            </Drawer>
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

export default withAuth(StoryEditor);

