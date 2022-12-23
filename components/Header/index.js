import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

export default function Header({isBreakpoint,style,border}) {
  return (
    <>
        { isBreakpoint === 2 ? (
            <Desktop style={style} border={border}/>
        ) : isBreakpoint === 1 ?(
            <Mobile style={style} border={border}/>
        ):(
            <></>
        )}
        
    </>
  )
}
