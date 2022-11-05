import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'


export default function Slide({article,style,type=0}){
  return(
    <div
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
                  width={300}
                  height={300}
                  layout="responsive"
                  className={styles.img}
                  alt={article.title}
                  
              />
            </Link>
              <Link href={`/blog/article/${article._id}/${article.slug}`}>
                  <div className={styles.bonttom}>

                    <div className={styles.mark_down}>
                        {/* <h5 className={styles.cat}>Catérorie</h5> */}
                        <h2 className={styles.h2}>{article.title}</h2>
                        {/* <span className={styles.desc+" "+(type==1 ?styles.type2:"" )}>{article.description}</span> */}

                    </div>

                  </div>
              </Link>
              <div className={styles.publisher}>
                <Image
                    src={article.author.logo || "/favicon.ico"}
                    width="20"
                    height="20"
                    layout="fixed"
                    className={styles.publisher_logo}
                    style={{minWidth:"20px"}}
                     alt={"Publisher logo"}
                />
                <div className={styles.name}>Published by <strong>{article.author.name}</strong> on {new Date(article.updatedAt).toDateString()}</div>

              </div>
          </div>
              

    </div>
                   
  )
}
