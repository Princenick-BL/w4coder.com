import React from 'react'
import styles from './index.module.scss'

export default function Popup({onClick}) {
  return (
    <div className={styles.popup}>
        <div className={styles.content}>
            <div>Cette page est maintenance pour la mise en place d'environnement 3D</div>
            <br></br>
            <button onClick={onClick}>OK</button>
        </div>
    </div>
  )
}
