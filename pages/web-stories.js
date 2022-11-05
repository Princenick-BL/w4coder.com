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
      padding:"10px",
      overflowY:"auto"
    }}>
      <amp-story-player 
        width="300" 
        height="700" 
        style={{
          width:"300px",
          height:"calc(300px * 16 / 9 )",
          minHeight:"calc(300px * 16 / 9 )",
          borderRadius:"10px"
        }}>
          <a href='http://localhost:3000/blog/web-story/632f345c62740dca9e49910d/top-javascript-programmation-framework-for-web-app-creation'></a>
      </amp-story-player>
      <amp-story-player 
        width="300" 
        height="700" 
        style={{
          width:"300px",
          height:"calc(300px * 16 / 9 )",
          minHeight:"calc(300px * 16 / 9 )",
          borderRadius:"10px"
        }}>
          <a href='http://localhost:3000/blog/web-story/632f345c62740dca9e49910d/top-javascript-programmation-framework-for-web-app-creation'></a>
      </amp-story-player>
    </div>
  )
}
