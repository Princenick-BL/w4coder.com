import React from 'react'
export const config = { amp: true }

export default function WebStories() {
  return (
    <div style={{
      width:"100vw",
      height:"100vh",
      maxHeight:"100vh",
      display:"grid",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      margin:"0",
      overflowY:"auto",
      rowGap: "20px",
      paddingTop: "20px"
    
    }}>
      <amp-story-player 
        width="300" 
        height="700" 
        style={{
          width:"calc(96vw - 20px )",
          height:"calc( calc(96vw * 16 / 9 ) - 20px )",
          minHeight:"calc(calc(96vw * 16 / 9 ) - 20px )",
          borderRadius:"10px"
        }}>
          <a href='https://w4coder.com/blog/web-story/632f345c62740dca9e49910d/top-javascript-programmation-framework-for-web-app-creation'></a>
      </amp-story-player>
      <amp-story-player 
        width="300" 
        height="700" 
        style={{
          width:"calc(96vw - 20px )",
          height:"calc( calc(96vw * 16 / 9 ) - 20px )",
          minHeight:"calc(calc(96vw * 16 / 9 ) - 20px )",
          borderRadius:"10px"
        }}>
          <a href='https://w4coder.com/blog/web-story/632f345c62740dca9e49910d/top-javascript-programmation-framework-for-web-app-creation'></a>
      </amp-story-player>
    </div>
  )
}
