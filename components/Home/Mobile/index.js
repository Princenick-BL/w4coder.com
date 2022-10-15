import React, { useState } from 'react'
import HomePage from './HomePage'
import MoviesPage from './MoviesPage'
import StoriesPage from './StoriesPage'

export default function HP({topA,page1,toggleTheme}) {

  const [currentView,setCurrentView] = useState(1)

  return <HomePage page1={page1} topA={topA} toggleTheme={toggleTheme}/>
}
