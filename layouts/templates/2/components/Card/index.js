import React,{useState,useEffect} from 'react'
import styles from './card.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { SmallLogo } from '@/components/Logo'

export default function Slide({article,style,type=0,isBreakpoint=1}){
  
  var isVideo = article?.kind?.includes("youtube")
  const [dominantColor, setDominantColor] = useState('');

  return(
    <article
      className={styles.slide} 
      style={{
        textAlign:"unset",
        ...style,
        borderTop:isBreakpoint === 1 ? ".5rem solid var(--background-secondary)" : ""
      }}
      >   
        <Link href={`/articles/${article._id}/${article.slug}`}>
          <div className={styles.slider}>
            { isBreakpoint === 1 &&(

              <div className={styles.publisher}>
                {!isVideo? (
                    // <Image
                    //     src={article?.author?.logo || "/logo.png"}
                    //     width="30"
                    //     height="30"
                    //     layout="fixed"
                    //     className={styles.publisher_logo}
                    //     style={{minWidth:"10px"}}
                    //       alt={"Publisher logo"}
                    // />
                    <SmallLogo/>

                  ) : (
                    <svg className={styles.publisher_logo} viewBox="0 0 40 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block", height: "20px"}} >
                          <g viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet" className="style-scope yt-icon">
                              <g className="style-scope yt-icon">
                                  <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000" className="style-scope yt-icon"></path>
                                  <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" className="style-scope yt-icon"></path>
                              </g>
                          </g>
                      </svg>
                  )
                }
                <div className={styles.name}>Published by <strong>{isVideo ?  article?.snippet?.channelTitle : article?.author?.name}</strong> {moment(isVideo ? article?.snippet?.publishedAt : article?.updatedAt).fromNow()}</div>
              </div>
            )}
              <div className={styles.bonttom}>
                <span className={styles.cat}>{ isVideo? "Youtube":(article?.category?.name||"Article")}</span>
                <div className={styles.mark_down}>
                    {/* <h5 className={styles.cat}>Catérorie</h5> */}
                    <h2 className={styles.h2}><span>{isVideo?( article?.snippet?.title + " : "+article?.snippet?.description ) :(article.title+" : "+article.description)}</span></h2>
                    {/* <span className={styles.desc+" "+(type==1 ?styles.type2:"" )}>{article.description}</span> */}
                </div>
              </div>
           
              <Image
                  src={ isVideo? (article?.snippet?.thumbnails?.high?.url ): (article.poster?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n"+ (isBreakpoint===1 ? "/tr:w-1080,h-1080,cm-pad_resize,bg-F3F3F3":"")))}
                  width={1}
                  height={1}
                  layout="responsive"
                  className={styles.img}
                  alt={isVideo ? article?.snippet?.title : article.title}
                  placeholder="blur"
                  style={{aspectRatio:isBreakpoint==1 ? "1:1" : "16:9"}}
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0/89QDwAEYgG3DMBzIAAAAABJRU5ErkJggg=="
              />
            {isBreakpoint != 1&&(
              <div className={styles.bottomBox1}>
                
              </div>
            )}
            {isBreakpoint != 1&&(
              <div className={styles.bottomBox} style={{backgroundColor:`${dominantColor}`}}>
              </div>
            )}
          
            
          </div>
        </Link>
    </article>
                   
  )
}
