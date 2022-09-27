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
            <Link href={`/read/article/${article._id}/${article.slug}`}>
                <a>
                    <div className={styles.slider}>
                        <Image
                            src={article.poster}
                            width={article.meta.width}
                            height={article.meta.height}
                            layout="responsive"
                            className={styles.img}
                        />
                        <div className={styles.bonttom}>

                          <div className={styles.mark_down}>
                              {/* <h5 className={styles.cat}>Catérorie</h5> */}
                              <h2 className={styles.h2}>{article.title}</h2>
                              <span className={styles.desc+" "+(type==1 ?styles.type2:"" )}>{article.description}</span>

                          </div>

                        </div>
                        <div className={styles.publisher}>
                          <Image
                              src={article.author.logo}
                              width="40"
                              height="40"
                              layout="fixed"
                              className={styles.publisher_logo}
                              style={{minWidth:"40px"}}
                          />
                          <div className={styles.name}>Published by <strong>{article.author.name}</strong> on {new Date(article.updatedAt).toLocaleDateString()}</div>

                        </div>
                    </div>
                </a>
            </Link>

    </div>
                   
  )
}
