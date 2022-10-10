import React, { useState } from 'react'
import HomePage from './HomePage'
import MoviesPage from './MoviesPage'
import StoriesPage from './StoriesPage'

export default function HP({topA,page1,toggleTheme}) {

  const [currentView,setCurrentView] = useState(1)

  const getCurrentView = () =>{
    switch(currentView){
      case 1:
        return <HomePage page1={page1} topA={topA} toggleTheme={toggleTheme} currentView setCurrentView={setCurrentView}/>
        break

      case 2:
        return <StoriesPage toggleTheme={toggleTheme} setCurrentView={setCurrentView}/>
        break

      case 3:
        return <MoviesPage toggleTheme={toggleTheme} setCurrentView={setCurrentView}/>
        break

      default:
        return <HomePage page1={page1} topA={topA} toggleTheme={toggleTheme} currentView setCurrentView={setCurrentView}/>
        break
    }
  }

  return (
    <> {getCurrentView()} </>
  )
}
