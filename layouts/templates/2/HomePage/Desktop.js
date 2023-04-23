import React,{useState} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import styles from './homepage.module.scss'
import Slide from '@/layouts/templates/2/components/Card'
import { getArticle ,getTopArticles,searchArticle} from '@/services/articles'
import AmpStoryPlayerComponent from '@/layouts/templates/2/components/AmpStoryPlayer';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import RecommendedTitle from '@/layouts/templates/2/components/RecommendedTitle';


export default function Desktop({page1,topA,stories,lang,isBreakpoint=1}) {
  const [pages,setPages] = useState([...page1.slice(3)])
  const [pageNum,setPageNum] = useState(1)
  const [hasMore,setHasMore] = useState(true)

  const fetchMoreData = async ()=>{

    const res =  await getArticle({filter:{
      page : pageNum + 1,
      lang : lang
    }})
    setPageNum(pageNum + 1)
    setPages([...pages,...res])
    if(res.length === 0){
      setHasMore(false)
    }
  }
  return (
    <div className={styles.homeDesktop}>
      <section className={styles.listOne}>
        { page1.slice(0, 1).map((article,index)=>{
          return(
            <Link href={`/blog/article/${article._id}/${article.slug}`} key={index}>
            <article className={styles.topArticle}>
              <figure>
                <Image
                 src={ article?.poster?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n/tr:w-1920,h-1080,cm-pad_resize,bg-F3F3F3")}
                 width={16*10}
                 height={9*10}
                 layout="responsive"
                 className={styles.img}
                 alt={ article?.title}
                 placeholder="blur"
                 blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0/89QDwAEYgG3DMBzIAAAAABJRU5ErkJggg=="
                />
              </figure>
              <div className={styles.desc}>
                <div>
                  <h2> {(article.title+" : "+article.description)} </h2>
                </div>
                <span>Publié par <strong>{article?.author?.name}</strong> il y a {moment(article?.updatedAt).fromNow()}</span>
              </div>

            </article>
            </Link>
            // <Slide key={index} article={article} style={{height:"100%"}} isBreakpoint={isBreakpoint}/>
          )
        })}
      </section>
      <section className={styles.listTwo}>
        { page1.slice(0, 3).map((article,index)=>{
          return(
            <Link href={`/blog/article/${article._id}/${article.slug}`} className={styles.article} key={index}>
            <article className={styles.topArticle}>
              <figure>
                <Image
                  src={ article?.poster?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n/tr:w-1920,h-1920,cm-pad_resize,bg-F3F3F3")}
                  width={1}
                  height={1}
                  layout="responsive"
                  className={styles.img}
                  alt={ article?.title}
                  placeholder="blur"
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0/89QDwAEYgG3DMBzIAAAAABJRU5ErkJggg=="
                />
              </figure>
              <div className={styles.desc}>
                <div>
                  <h2> {(article.title+" : "+article.description)} </h2>
                </div>
                <span>Publié par <strong>{article?.author?.name}</strong> il y a {moment(article?.updatedAt).fromNow()}</span>
              </div>

            </article>
            </Link>
            // <Slide key={index} article={article} style={{height:"100%"}} isBreakpoint={isBreakpoint}/>
          )
        })}
      </section>
      <section className={styles.listTree}>
        <div className={styles.subList}>
          <br></br>
          <br></br>
          <AmpStoryPlayerComponent stories={stories} isBreakpoint={isBreakpoint}/>
          <RecommendedTitle title={"Top Posts"}/>
          <InfiniteScroll
            dataLength={pages.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            className={styles.scroll}
          >
            {pages ? pages.map((article,index)=>{
              return(
                  <Link href={`/blog/article/${article._id}/${article.slug}`} className={styles.article} key={index}>
                    <article className={styles.topArticle}>
                      <figure>
                        <Image
                          src={ article?.poster?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n/tr:w-1920,h-1920,cm-pad_resize,bg-F3F3F3")}
                          width={1}
                          height={1}
                          layout="responsive"
                          className={styles.img}
                          alt={ article?.title}
                          placeholder="blur"
                          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0/89QDwAEYgG3DMBzIAAAAABJRU5ErkJggg=="
                        />
                      </figure>
                      <div className={styles.desc}>
                        <div>
                          <h2> {(article.title+" : "+article.description)} </h2>
                        </div>
                        <span>Publié par <strong>{article?.author?.name}</strong> il y a {moment(article?.updatedAt).fromNow()}</span>
                      </div>

                    </article>
                  </Link>
              )
            }):(
              <></>
            )}
          </InfiniteScroll>
        </div>
        <div className={styles.recZone}>
          <div className={styles.stickyRec}>

          </div>
        </div>
      </section>
    </div>
  )
}
