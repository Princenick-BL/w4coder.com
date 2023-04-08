import React from 'react'
import styles from './card.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'

export default function Slide({article,style,type=0,isBreakpoint=1}){
  return(
    <section
      className={styles.slide} 
      style={{
        textAlign:"unset",
        ...style
      }}
      >   
      
        <div className={styles.slider}>
          {isBreakpoint === 1&&(
            <>
            <div className={styles.publisher}>
              <Image
                  src={article.author.logo || "/logo.png"}
                  width="30"
                  height="30"
                  layout="fixed"
                  className={styles.publisher_logo}
                  style={{minWidth:"10px"}}
                    alt={"Publisher logo"}
              />
              <div className={styles.name}>Published by <strong>{article.author.name}</strong> {moment(article.updatedAt).fromNow()}</div>
            </div>
            </>
          )}
           <Link href={`/blog/article/${article._id}/${article.slug}`}>
              <div className={styles.bonttom}>
                <span className={styles.cat}>{article?.category?.name}</span>

                <div className={styles.mark_down}>
                    {/* <h5 className={styles.cat}>Catérorie</h5> */}
                    <h2 className={styles.h2}><span>{article.title+" : "+article.description}</span></h2>
                    {/* <span className={styles.desc+" "+(type==1 ?styles.type2:"" )}>{article.description}</span> */}

                </div>

              </div>
          </Link>
          <Link href={`/blog/article/${article._id}/${article.slug}`} className={styles.imgContainer}>
            <Image
                src={article.poster?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n")+ (isBreakpoint===1 ? "?tr=w-1080,h-1080 ,cm-pad_resize,bg-F3F3F3":"")}
                width={article?.meta?.width || 1000}
                height={250}
                layout="responsive"
                className={styles.img}
                alt={article.title}
                placeholder="blur"
                style={{aspectRatio:isBreakpoint==1 ? "1:1" : "16:9"}}
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0/89QDwAEYgG3DMBzIAAAAABJRU5ErkJggg=="
            />
          </Link>
          {isBreakpoint != 1&&(
            <>
            <div className={styles.publisher}>
              <Image
                  src={article.author.logo || "/logo.png"}
                  width="30"
                  height="30"
                  layout="fixed"
                  className={styles.publisher_logo}
                  style={{minWidth:"10px"}}
                    alt={"Publisher logo"}
              />
              <div className={styles.name}>Published by <strong>{article.author.name}</strong> {moment(article.updatedAt).fromNow()}</div>
            </div>
            </>
          )}
         
          
      </div>
    </section>
                   
  )
}
