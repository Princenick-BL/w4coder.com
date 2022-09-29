import React,{useRef,useEffect,useCallback} from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { useStoryContext } from '../../contexts/story.contex'
import Wrapper from './Wrapper'

const get = (section,active=false ) =>{
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
        
        

        return(
          <Wrapper
            style={{position:"absolute",...section.style}}
            id={section.id}
          >
              {section?.content}
          </Wrapper>
        )
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
    dispatch({
        type:"setCurrentElement",
        payload : {}
    })
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

    function useOutsideAlerter(ref) {
        useEffect(() => {
    
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                dispatch({
                    type:"changeTab",
                    payload :"THEMEBLOCK"
                })
                dispatch({
                    type:"setCurrentElement",
                    payload : {}
                })
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
    }
    //useOutsideAlerter(wrapperRef);

    return (
        <div 
            className={styles.editor} 
            ref={wrapperRef}
        >
            {currentSlide?.sections?.map((section,index)=>{
                return(
                <div key={index} onClick={(e)=>{handleChangeTab(section)}} >
                    {get(section,state.currentElement.id === section.id)}
                </div>
                )
            })}
        </div>
    )
}
