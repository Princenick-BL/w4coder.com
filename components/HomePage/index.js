import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

export default function HomePage({isBreakpoint,page1,topA,stories}) {
  return (
    <>
        { isBreakpoint === 2 ? (
            <Desktop topA={topA} page1={page1} stories={stories}/>
        ) : isBreakpoint === 1 ?(
            <Mobile topA={topA} page1={page1} stories={stories}/>
        ):(
            <></>
        )}
        
    </>
  )
}
