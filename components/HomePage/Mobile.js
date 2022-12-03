import React,{useState} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { getArticle ,getTopArticles,searchArticle} from '../../services/articles'
import Slide from './components/Mobile/Card'
import styles from './homepage.module.scss'
import AmpStoryPlayerComponent from '../AmpStoryPlayer';
import RecommendedTitle from '../RecommendedTitle';
import Ads300x600 from '../Ads300';
import TutoReco from './components/TutoReco';

export default function Mobile({page1,topA,stories}) {
    const [pages,setPages] = useState([])
    const [pageNum,setPageNum] = useState(1)
    const [hasMore,setHasMore] = useState(true)

    const fetchMoreData = async ()=>{
      const res =  await getArticle({filter:{
        page : pageNum + 1
      }})
      setPageNum(pageNum + 1)
      setPages([...pages,...res])
      if(res.length === 0){
        setHasMore(false)
      }
    }

  return (
    <div className={styles.editorial}>
      <div style={{marginTop:"1rem"}}></div>
      <RecommendedTitle title={"ARTICLES"}/>
      <div className={styles.editorialContent}>
        <div
          className={styles.mainSlideShow}
        >
          {page1 ? page1.map((article,index)=>{
            return(
              <>
              <Slide key={index} article={article} style={{height:"100%"}}/>
              {index === 1 &&(
                <>
                  <AmpStoryPlayerComponent stories={stories}/>
                  {/* <Ads300x600/> */}
                </>
              )}
              
              </>
            )
          }):(
            <></>
          )}
        </div>
        
        {/* <Ads300x600/> */}
        <TutoReco/>

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
              <Slide article={article} style={{height:"100%"}}/>
              {/* {index%2 === 1 && (
                <Ads300x600/>
              )} */}
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
