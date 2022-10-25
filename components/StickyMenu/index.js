import React from 'react'
import styles from './index.module.scss'
import {RiYoutubeFill,RiHome2Fill} from 'react-icons/ri'
import {MdWebStories} from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'
import Link from 'next/link'

export default function StickyMenu({current,currentScrollTop}) {
  return (
    <div className={styles.stickyMenu + " sticky-menu"}>
      <Link href="/">
        <div className={current===1 ? styles.active : ""}>
          <RiHome2Fill size={24} style={{marginRight:"5px",marginLeft:"5px"}}/>
          Home
        </div>
      </Link>
      <Link href="/web-stories">
        <div className={current===2 ? styles.active : ""}>
          <MdWebStories size={22} style={{marginRight:"5px",marginLeft:"5px"}}/>   
          Stories       
        </div>
      </Link>
      <Link href="/videos">
        <div className={current===3 ? styles.active : ""}>
          <RiYoutubeFill size={24} style={{marginRight:"5px",marginLeft:"5px"}}/>  
          Vidéos        
        </div>
      </Link>
      <Link href="/tutos">
        <div className={current===3 ? styles.active : ""}>
          <FaGraduationCap size={24} style={{marginRight:"5px",marginLeft:"5px"}}/>  
          Tutos        
        </div>
      </Link>
    </div>
  )
}
