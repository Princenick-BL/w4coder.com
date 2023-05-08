import React from 'react'
import Logo from '../Logo'
import styles from './index.module.scss'
import Link from 'next/link'
import adPlaceholder from '@/public/adPlaceholder.png'
import Image from 'next/legacy/image'


export default function Ads300x600({children}) {
  return (
    <div className={styles.ads300x300}>
      {/* <ins class="adsbygoogle" style={{ display: "block" }} data-ad-client="ca-pub-987************676" data-ad-slot="776****95" data-ad-format="auto" data-full-width-responsive="true"    > </ins>      <script>
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </script> */}
      <div className={styles.adInfo}>ADVERTISEMENT</div>
      <div className={styles.adContent}>
          <AD_PLACEHOLDER/>
      </div>
    </div>
  )
}

export function AD_PLACEHOLDER() {
  return (
    <div className={styles.adPlaceholder}>
      <Image
        src={adPlaceholder}
        width={300}
        height={600}
        alt='ad placeholder'
        />
      <div className={styles.indicator}>

      </div>
    </div>
  )
}

