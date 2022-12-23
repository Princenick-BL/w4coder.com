import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import moment from 'moment'

export default function YoutubeShort({info}) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image
          src={info?.snippet?.thumbnails?.maxres?.url}
          fill
          />
      </div>
      <div className={styles.infoDesc}>
        <div>
          <Image
            src={"/logo.png"}
            width={36}
            height={36}
            className={styles.logo}
            />
        </div>
        <div>
          <p>{info?.snippet?.title}</p>
          <span>{info?.snippet?.channelTitle}</span> 
          <span>{moment(info?.snippet?.publishedAt).fromNow()}</span>
        </div>
      </div>
    </div>
  )
}