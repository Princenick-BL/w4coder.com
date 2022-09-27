import React from 'react'
import styles from './index.module.scss'
import FontPolice from './FontPolice'
import FontSize from './FontSize'
import TextAlign from './TextAlign'
import FontWeight from './FontWeight'
import FontStyle from './FontStyle'
import TextColor from './TextColor'
import BackgroundColor from './BackgroundColor'


export default function CustomRichText() {
  return (
    <div className={styles.container}>
        <FontPolice/>
        <FontSize/>
        <div className={styles.flex}>
            <FontWeight/>
            <FontStyle/>
            <TextAlign/>
        </div>
        <TextColor/>
        <BackgroundColor/>
    </div>
  )
}
