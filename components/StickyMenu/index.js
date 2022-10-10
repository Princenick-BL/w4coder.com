import React from 'react'
import styles from './index.module.scss'
import {RiMovieFill,RiHome2Fill} from 'react-icons/ri'

export default function StickyMenu() {
  return (
    <div className={styles.stickyMenu}>
        <RiHome2Fill size={24} style={{marginRight:"5px",marginLeft:"5px"}}/>
        <RiMovieFill size={24} style={{marginRight:"5px",marginLeft:"5px"}}/>
    </div>
  )
}
