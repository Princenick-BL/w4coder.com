import React from 'react'
import StickyMenu from '../../StickyMenu'

export default function StoriesPage({setCurrentView}) {
  return (
    <div id="storiesTop">
        <StickyMenu setCurrentView={setCurrentView}/>
    </div>
  )
}
