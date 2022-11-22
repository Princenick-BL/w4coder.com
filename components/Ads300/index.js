import React from 'react'
import styles from './index.module.scss'

export default function Ads300x600({children}) {
  return (
    <div className={styles.ads300x300}>
      {/* <ins class="adsbygoogle" style={{ display: "block" }} data-ad-client="ca-pub-987************676" data-ad-slot="776****95" data-ad-format="auto" data-full-width-responsive="true"    > </ins>      <script>
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </script> */}
      <div className={styles.adInfo}>ADVERTISEMENT</div>
      <div className={styles.adContent}>
        300x300
      </div>
    </div>
  )
}
