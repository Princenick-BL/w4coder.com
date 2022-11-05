import React from 'react'
import Logo from '../Logo'
import styles from './header.module.scss'
import Link from 'next/link'

export default function Desktop() {
  const [searchResult,setSearchResult]=useState([])

    const searchRef = useRef(null);
    //useAmpStoryPlayer(loadPlayer(playerRef))
    const stickyHeader = useRef()

    useLayoutEffect(() => {
        const mainHeader = document.getElementById('mainHeader')
        let fixedTop = stickyHeader.current.offsetTop
        const fixedHeader = () => {
          if (window.pageYOffset > fixedTop) {
            mainHeader.classList.add('fixedTop')
          } else {
            mainHeader.classList.remove('fixedTop')
          }
        }
        window.addEventListener('scroll', fixedHeader)
      }, [])
     
    
    
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
        <Logo style={{fontSize:"1.5rem"}}/>
        <div  id={"mainHeader"} ref={stickyHeader} className="mainHeader">
            <input ref={searchRef} onChange={(e)=>{searching(e)}} onFocus={(e)=>{}} type={"search"} className={styles.search+ "  searchBar"} placeholder={"Search"}/>
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
