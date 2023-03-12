import React from 'react'
import styles from './index.module.scss'
import { getStories } from '../../services/stories'
import Image from 'next/image'
import DefaultLayout from '../../layouts/default'

export default function WebStories({isBreakpoint,stories}) {
  return (
    <DefaultLayout
        title={"w4coder"}
        description={""}
        isBreakpoint={isBreakpoint}
    >
        <div className={styles.cats}>
           
        </div>      
    </DefaultLayout>
  )
}

export async function getServerSideProps({locale}) {
    // Fetch data from external API

   
    //console.log(res.length)
  
    return { 
        props: {
            stories :  [],
        } 
    }
  }
