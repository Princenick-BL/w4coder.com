import React from 'react'
import styles from '../index.module.scss'
export default function Ads600(props) {
  return (
    <div className={styles.widget600}>
        <div className={styles.contain}>
            {props.children ? (
                <>{props.children}</>
            ):(
                <div className={styles.adplaceholder}>Ad</div>
            )}

        </div>
    </div>
  )
}
