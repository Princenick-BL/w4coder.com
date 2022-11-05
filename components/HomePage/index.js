import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

export default function HomePage({isBreakpoint,page1,topA}) {
  return (
    <>
        { isBreakpoint === 2 ? (
            <Desktop topA={topA} page1={page1}/>
        ) : isBreakpoint === 1 ?(
            <Mobile topA={topA} page1={page1}/>
        ):(
            <></>
        )}
        
    </>
  )
}
