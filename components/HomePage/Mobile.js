import React,{useState} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { getArticle ,getTopArticles,searchArticle} from '../../services/articles'
import Slide from './components/Mobile/Card'
import styles from './homepage.module.scss'
import AmpStoryPlayerComponent from '../AmpStoryPlayer';
import RecommendedTitle from '../RecommendedTitle';


export default function Mobile({page1,topA,stories}) {
    const [pages,setPages] = useState([])
    const [pageNum,setPageNum] = useState(1)
    const [hasMore,setHasMore] = useState(true)
    console.log(page1)
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
      <RecommendedTitle title={"Articles"}/>
      <div className={styles.editorialContent}>
        <div
          className={styles.mainSlideShow}
        >
          {page1 ? page1.map((article,index)=>{
            return(
              <>
              <Slide key={index} article={article} style={{height:"100%"}}/>
              {index === 1 &&(
                <AmpStoryPlayerComponent stories={stories}/>
              )}
              </>
            )
          }):(
            <></>
          )}
        </div>
        
        {/* <TopicSlider/> */}

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
              {/* {(Math.floor(Math.random()* 10) > 8 )&& (
                <Ads300>
                  <amp-ad 
                    width="300" 
                    height="200"
                    type="adsense"
                    data-ad-client="ca-pub-5455960452945884"
                    data-ad-slot="5221773298"
                    data-auto-format="rspv"
                    data-full-width="">
                      <amp-img
                        src="/images/adPlaceholder300.png"
                        width="300"
                        height="250"
                        layout="responsive"
                        alt="placeholder"
                    ></amp-img>
                  </amp-ad>
                </Ads300>
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
