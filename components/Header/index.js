import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

export default function Header({isBreakpoint}) {
  return (
    <>
        { isBreakpoint === 2 ? (
            <Desktop/>
        ) : isBreakpoint === 1 ?(
            <Mobile/>
        ):(
            <></>
        )}
        
    </>
  )
}
