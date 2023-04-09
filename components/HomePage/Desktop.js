import React,{useState} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import styles from './homepage.module.scss'
import Slide from './components/Mobile/Card'
import { getArticle ,getTopArticles,searchArticle} from '../../services/articles'
import AmpStoryPlayerComponent from '../AmpStoryPlayer';
import TutoReco from './components/TutoReco';


export default function Desktop({page1,topA,stories,lang}) {
    const [pages,setPages] = useState([...page1.slice(2)])
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
      
      <div className={styles.listOne}>
        { page1.slice(0, 2).map((article,index)=>{
          return(
            <Slide key={index} article={article} style={{height:"100%"}}/>
          )
        })}
      </div>
      <AmpStoryPlayerComponent stories={stories}/>
      <br></br>
      {/* <TutoReco nbrecord={4}/> */}
      <br></br>
      <InfiniteScroll
        dataLength={pages.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        className={styles.listTwo}
        style={{margin:"0 auto"}}
      >
        {pages ? pages.map((article,index)=>{
          return(
            <>
              <Slide article={article} style={{height:"100%"}} type={2}/>
              {index ===1  &&(
                <div className={styles.ads}></div>
              )}
            </>
          )
        }):(
          <></>
        )}
      </InfiniteScroll>
    </div>
  )
}
