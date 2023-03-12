import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

export default function Header({isBreakpoint,style,border,stories}) {
  return (
    <>
        { isBreakpoint === 2 ? (
            <Desktop style={style} border={border} stories={stories}/>
        ) : isBreakpoint === 1 ?(
            <Mobile style={style} border={border} stories={stories}/>
        ):(
            <></>
        )}
        
    </>
  )
}
