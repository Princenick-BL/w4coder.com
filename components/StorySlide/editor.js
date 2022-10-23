import React,{useRef,useEffect,useCallback} from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { useStoryContext } from '../../contexts/story.contex'
import Wrapper from './Wrapper'

const get = (section,active=false,boxRef,index ) =>{
    switch(section?.type){
      case "BACKGROUND":
        return(
          <Image
            src={section?.content}
            layout="fill"
            style={{
                position:"absolute",
                top : "0",
                left:"0",
                width:"100%",
                height:"100%"
            }}
            className={active ? styles.active : ""}
          />
        )
      case "TEXTBLOCK":
          switch(section.balise){
            case "h1":
              return(
                <Wrapper
                  { ...section}
                  style={{...section.style,fontWeight:600}}
                  boxRef = {boxRef}
                  index = {index}
                  active={active}
                >
                  <h1
                  style={{
                    position:"relative",
                    ...section.style,
                  }}
                  >
                  {section?.content}

                  </h1>
                
              </Wrapper>
              )
              case "p":
                return(
                  <Wrapper
                  { ...section}
                  boxRef = {boxRef}
                  index = {index}
                  active={active}

                >
                  <p
                  style={{
                    position:"relative",
                    ...section.style,
                   
                  }}
                  >
                  {section?.content}
  
                  </p>
                  </Wrapper>
                )
              default:
                return(
                  <p
                  style={{
                    position:"relative",
                    ...section.style,
                    
                  }}
                  >
                  {section?.content}
  
                  </p>
                )
          }

       
      case "IMAGEBLOCK":
        return(
          <div 
          className={active ? styles.active : ""}
          style={{
             position:"absolute",
              ...section.style
          }}>
            <Image
              src={section?.content}
              layout="fill"
            />
          </div>
          
          
        )
    }
}
export default function StorySlidePreview() {


  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      //Do whatever when esc is pressed
      dispatch({
        type:"changeTab",
        payload : "THEMEBLOCK"
    })
    // dispatch({
    //     type:"setCurrentElement",
    //     payload : {}
    // })
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const wrapperRef = useRef()

  const {state,dispatch} = useStoryContext()

  const {currentSlide} = state

  const handleChangeTab = (payload)=>{
    dispatch({
        type:"changeTab",
        payload : payload?.type
    })
    dispatch({
        type:"setCurrentElement",
        payload : payload
    })
  }


  return (
    <div 
        id = "wrapper"
        className={styles.editor} 
        ref={wrapperRef}
    >
        {currentSlide?.sections?.map((section,index)=>{
            return(
            <div key={index} onClick={(e)=>{handleChangeTab(section)}} >
                {get(section,((state.currentElement.id === section.id) &&( state.currentElement.type === section.type) ),wrapperRef,index)}
            </div>
            )
        })}
    </div>
  )
}
