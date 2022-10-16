import React, { useState } from 'react'
import HomePage from './HomePage'


export default function HP({topA,page1,toggleTheme}) {

  const [currentView,setCurrentView] = useState(1)

  return <HomePage page1={page1} topA={topA} toggleTheme={toggleTheme}/>
}
