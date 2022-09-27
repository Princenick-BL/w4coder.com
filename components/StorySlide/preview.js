import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
export default function StorySlidePreview({slide,pos}) {

  const get = (section ) =>{
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
          />
        )
      case "TEXTBLOCK":
        return(
          <div style={{position:"absolute",...section.style}}>
            {section?.content}
          </div>
          
          
        )
      case "IMAGEBLOCK":
        return(
          <div style={{
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

  return (
    <div className={styles.preview} 
    >
      {pos &&(
        <div className={styles.pos}>{pos}</div>
      )}
      {slide?.sections?.map((section,index)=>{
        return(
          <div key={index}>
            {get(section)}
          </div>
        )
      })}
        
    </div>
  )
}
