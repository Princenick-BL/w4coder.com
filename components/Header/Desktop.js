import React , {useState,useRef,useLayoutEffect,useEffect} from 'react'
import Logo from '../Logo'
import styles from './header.module.scss'
import Link from 'next/link'
import {searchArticle} from '../../services/articles'

export default function Desktop() {
  const [searchResult,setSearchResult]=useState([])

    const searchRef = useRef(null);
    //useAmpStoryPlayer(loadPlayer(playerRef))
    const stickyHeader = useRef()

     
    
    
      const searching = async (e)=>{
        const mainHeaderResult = document.getElementById("mainHeader")
        if(e?.target?.value?.length > 0){
          mainHeaderResult.classList.add('searching')
          const res = await searchArticle(e?.target?.value)
          console.log(res)
          setSearchResult(res)
        }else{
          mainHeaderResult.classList.remove('searching')
          setSearchResult([])
        }
    
      }
    
      function useSearchStop(ref) {
        useEffect(() => {
    
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              const mainHeaderResult = document.getElementById("mainHeader")
              mainHeaderResult.classList.remove('searching')
              setSearchResult([])
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }
      useSearchStop(searchRef);
  return (
    <div className={styles.deskHead}>
        <div>
          <Logo style={{fontSize:"2rem",marginRight:"1rem"}}/>
        </div>
        
            <div className="mainHeader">
              <input id="mainHeader" ref={searchRef} onChange={(e)=>{searching(e)}} onFocus={(e)=>{}} type={"search"} className={styles.search+ "  searchBar"} placeholder={"Search"}/>
              <div className='mainHeaderResult' id="mainHeaderResult">
                {searchResult && searchResult.length > 0 && searchResult.map((res,index)=>{
                  return(
                    <div className={"searchResultText"} key={index}>
                      <Link href={`/blog/article/${res?._id}/${res?.slug}`} >
                        {res.title}
                      </Link>
                    </div>
                  )
                })}

          </div>
        </div>
    </div>
  )
}
