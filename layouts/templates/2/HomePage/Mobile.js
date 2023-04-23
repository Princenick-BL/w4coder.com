import React,{useState} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { getArticle ,getTopArticles,searchArticle} from '@/services/articles'
import Slide from '@/layouts/templates/2/components/Card'
import styles from './homepage.module.scss'

export default function Mobile({page1,topA,stories,lang,isBreakpoint=1}) {
    const [pages,setPages] = useState([])
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
    <div className={styles.editorial}>
      <div className={styles.editorialContent}>
        <div
          className={styles.mainSlideShow}
        >
          {page1 ? page1.map((article,index)=>{
            return(
              <div key={index} >
                <Slide article={article} style={{height:"100%"}} isBreakpoint={isBreakpoint}/>
              </div>
            )
          }):(
            <></>
          )}
        </div>

        <InfiniteScroll
          dataLength={pages.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          className={styles.mainSlideShow}
          style={{margin:"0 auto"}}
        >
          {pages ? pages.map((article,index)=>{
            return(
              <div  key={index}>
              <Slide article={article} style={{height:"100%"}} isBreakpoint={isBreakpoint}/>
              </div>
            )
          }):(
            <></>
          )}
        </InfiniteScroll>

      </div>        
    </div>
  )
}
