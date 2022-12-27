import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import styles from './index.module.scss'
import Footer from '../components/Footer'

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
