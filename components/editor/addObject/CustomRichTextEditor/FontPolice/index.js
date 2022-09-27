import React from 'react'
import styles from './index.module.scss'
export default function FontPolice() {
  return (
    <div className={styles.fontPolice}>
        <div>
            <span>Font Police :</span>
        </div>
        <select>
            <option>Arial</option>
        </select>
    </div>
  )
}
