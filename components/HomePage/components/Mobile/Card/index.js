import React from 'react'
import styles from './card.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'

export default function Slide({article,style,type=0}){
  return(
    <section
      className={styles.slide} 
      style={{
        textAlign:"unset",
        ...style
      }}
      >   
        <div className={styles.slider}>
          <Link href={`/blog/article/${article._id}/${article.slug}`} className={styles.imgContainer}>
            <Image
                src={article.poster}
                width={article?.meta?.width || 1000}
                height={180}
                layout="responsive"
                className={styles.img}
                alt={article.title}
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0/89QDwAEYgG3DMBzIAAAAABJRU5ErkJggg=="
            />
          </Link>
        
          <Link href={`/blog/article/${article._id}/${article.slug}`}>
              <div className={styles.bonttom}>
                <span className={styles.cat}>{article?.category?.name}</span>

                <div className={styles.mark_down}>
                    {/* <h5 className={styles.cat}>Catérorie</h5> */}
                    <h2 className={styles.h2}><span>{article.title}</span></h2>
                    {/* <span className={styles.desc+" "+(type==1 ?styles.type2:"" )}>{article.description}</span> */}

                </div>

              </div>
          </Link>
          <div className={styles.publisher}>
            <Image
                src={article.author.logo || "/logo.png"}
                width="10"
                height="10"
                layout="fixed"
                className={styles.publisher_logo}
                style={{minWidth:"10px"}}
                  alt={"Publisher logo"}
            />
            <div className={styles.name}>Published by <strong>{article.author.name}</strong> {moment(article.updatedAt).fromNow()}</div>
          </div>
      </div>
    </section>
                   
  )
}
