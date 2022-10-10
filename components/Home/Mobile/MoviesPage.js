import React from 'react'
import StickyMenu from '../../StickyMenu'

export default function MoviesPage({setCurrentView}) {
  return (
    <div>
        <StickyMenu setCurrentView={setCurrentView}/>
    </div>
  )
}
