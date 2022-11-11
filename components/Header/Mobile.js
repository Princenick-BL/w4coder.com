import React ,{useEffect,useLayoutEffect,useState,useRef} from 'react'
import Logo from '../Logo'
import styles from './header.module.scss'
import {searchArticle} from '../../services/articles'
import Link from 'next/link'

export default function Mobile() {
    const [searchResult,setSearchResult]=useState([])
    const [openedMenu,setOpenedMenu] = useState(false)
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
        <div className={styles.mobileHead}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <Logo style={{fontSize:"2rem"}}/>
              <div onClick={(e)=>{setOpenedMenu(!openedMenu)}}>
                {openedMenu ? (
                  <svg  className='hamburger' style={{width:"1.5rem",height:"1.5rem",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"></path></svg>
                ):(
                  <svg className='hamburger' style={{width:"1.5rem",height:"1.5rem",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path></svg>
                )}
              </div>
            </div>
            
            <ul className={styles.submenu+"  "+(openedMenu?styles.visible:styles.hidden)}>
              <li><Link href={"/"}>. Acceuil .</Link></li>
              <li><Link href={"/web-stories"}>. Web Stories .</Link></li>
              <li><Link href={"/about"}>. A propos .</Link></li>
              <li><Link href={"/contact"}>. Contact .</Link></li>
            </ul>
              
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
