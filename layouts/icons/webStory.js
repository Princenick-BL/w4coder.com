import React from 'react'
import Image from 'next/image';
import img from './amp-web-stories.png'

export default function WebStory() {
  return (
    <div style={{width:"30px",height:"30px",maxWidth:"25px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Image
            src={img}
            width={25}
            height={25}
            layout='fixed'
            style={{width:"14px",marginRight:"10px"}}
        />
    </div>
  )
}
