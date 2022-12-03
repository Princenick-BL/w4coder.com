import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

export default function Header({isBreakpoint,style}) {
  return (
    <>
        { isBreakpoint === 2 ? (
            <Desktop style={style}/>
        ) : isBreakpoint === 1 ?(
            <Mobile style={style}/>
        ):(
            <></>
        )}
        
    </>
  )
}
