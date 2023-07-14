import React from 'react'
// import Logo from '../../../../../components/Logo'
import styles from './index.module.scss'

export default function RecommendedTitle({title,style}) {
  return (
    <h2 className={styles.reco} style={{...style,fontFamily:"Oswald"}}>
      <span>
      {title}
      </span>
    </h2>
  )
}
