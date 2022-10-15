import React, { useState } from 'react'
import HomePage from './HomePage'
import MoviesPage from './MoviesPage'
import StoriesPage from './StoriesPage'

export default function HP({topA,page1,toggleTheme}) {

  return <StoriesPage toggleTheme={toggleTheme} />
}
