import React from 'react'
import Logo from '../Logo'
import styles from './index.module.scss'

export default function RecommendedTitle({title}) {
  return (
    <div className={styles.reco}>
        <h4 style={{color:"var(--color-primary-a)",fontSize:".8rem"}}>{title}</h4>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:".9rem"}}>By <Logo style={{marginLeft:"5px"}}/></div>
    </div>
  )
}
