import React from 'react'
import DefaultLayout from '../layouts/default'

export default function About({isBreakpoint}) {
  return (
    <DefaultLayout
      title={"w4coder"}
      description={""}
      isBreakpoint={isBreakpoint}
    >
      <h1>A propos</h1>      
    </DefaultLayout>
  )
}
