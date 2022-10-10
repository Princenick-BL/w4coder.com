import React from 'react'
import styles from './index.module.scss'
import {RiYoutubeFill,RiHome2Fill} from 'react-icons/ri'
import {MdWebStories} from 'react-icons/md'

export default function StickyMenu({setCurrentView}) {
  return (
    <div className={styles.stickyMenu + " sticky-menu"}>
        <RiHome2Fill size={24} style={{marginRight:"5px",marginLeft:"5px"}} onClick={(e)=>{setCurrentView(1)}}/>
        <MdWebStories size={24} style={{marginRight:"5px",marginLeft:"5px"}} onClick={(e)=>{setCurrentView(2)}}/>
        <RiYoutubeFill size={24} style={{marginRight:"5px",marginLeft:"5px"}} onClick={(e)=>{setCurrentView(3)}}/>
    </div>
  )
}
