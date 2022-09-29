import React, { useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

export default function ArticlePreview({article,type}) {



  return (
    <div className={type == 2 ?  styles.item1 : styles.item} >
      {article && (

        <a href={`/article/${article?.category?.toLowerCase()}/${article?._id}/${article?.slug}`} className={styles.card}>
          {article?.poster  &&
          <div  className={styles.thumb}>
            <Image 
              className={styles.thumb}
              src={article?.poster}
              height={article?.meta?.height }
              width={article?.meta?.width }
              layout={"responsive"}
              style={{minWidth:"150px"}}
            />
          </div>
          }
          {/* <div className={styles.thumb} style={{backgroundImage: `url(${article?.poster})`}}></div> */}
          <article>
            <div className={styles.head}>
              {/* <div className={styles.icon}>

              </div> */}
              <div>
                <span>{`${article?.category}`}</span>
                <h4>{`${article?.title}`}</h4>
              </div>
            </div>
            <p>{`${article?.description}`}</p>
          </article>
        </a>
      )}
      </div>
  )
}

