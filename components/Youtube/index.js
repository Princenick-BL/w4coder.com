import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import moment from 'moment'

export default function YoutubeShort({info}) {
  return (
    <a target={"_blank"}  href={`https://www.youtube.com/watch?v=${info?.id?.videoId}`}>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image
            src={info?.snippet?.thumbnails?.high?.url}
            fill
            alt={info?.id?.videoId}
            />
        </div>
        <div className={styles.infoDesc}>
          <div>
            <Image
              src={"/logo.png"}
              width={36}
              height={36}
              className={styles.logo}
              alt={"logo"}
              />
          </div>
          <div>
            <p>{info?.snippet?.title}</p>
            <span>{info?.snippet?.channelTitle}</span> 
            <span>{moment(info?.snippet?.publishedAt).fromNow()}</span>
          </div>
        </div>
      </div>
    </a>
  )
}
