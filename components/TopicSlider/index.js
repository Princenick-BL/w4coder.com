import React from 'react'
import styles from './index.module.scss'

export default function TopicSlider() {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.textColor}>React JS</h2>
            <div className={styles.container}>
                <div className={styles.top}> 

                </div>
                <div  className={styles.bottom}>
                    <div className={styles.positions}>2 sur 4</div>
                    <div className={styles.arrows}>
                        <div>&#x2039;</div>
                        <div>&#x203A;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
