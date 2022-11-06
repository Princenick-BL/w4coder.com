import React , {useState,useRef,useLayoutEffect,useEffect} from 'react'
import Logo from '../Logo'
import styles from './header.module.scss'
import Link from 'next/link'
import {searchArticle} from '../../services/articles'

export default function Desktop() {
    const [searchResult,setSearchResult]=useState([])
    const [openedMenu,setOpenedMenu] = useState(false)
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
          setSearchResult([])
        }
    
      }
    
      // function useSearchStop(ref) {
      //   useEffect(() => {
    
      //     /**
      //      * Alert if clicked on outside of element
      //      */
      //     function handleClickOutside(event) {
      //       if (ref.current && !ref.current.contains(event.target)) {
      //         setOpenedMenu(false)
      //         setSearchResult([])
      //       }
      //     }
      //     // Bind the event listener
      //     document.addEventListener("mousedown", handleClickOutside);
      //     return () => {
      //       // Unbind the event listener on clean up
      //       document.removeEventListener("mousedown", handleClickOutside);
      //     };
      //   }, [ref]);
      // }
      // useSearchStop(searchRef);
  return (
    <div className={styles.deskHead}>
        <ul className={styles.submenu}>
          <li><Link href={"/"}>Acceuil</Link></li>
          <li><Link href={"/web-stories"}>Web Stories </Link></li>
          <li><Logo style={{fontSize:"2rem",margin:"0 2rem"}}/></li>
          <li><Link href={"/about"}>A propos</Link></li>
          <li><Link href={"/contact"}>Contact</Link></li>
          <li>
            <svg 
              className='hamburger' 
              onClick={(e)=>{setOpenedMenu(!openedMenu)}}
              style={{
                width:"1.5rem",
                height:"1.5rem",
                cursor:"pointer",
                position:"absolute",
                right:"0"
              }} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
          </li>
        </ul>
        {openedMenu && (
          <div style={{
            position:"absolute",
            right:"0",
            top:"60px",
            zIndex: 1
          }} 
          id="mainHeader"
          className="mainHeader searching"
          >
            <input ref={searchRef} onChange={(e)=>{searching(e)}} onFocus={(e)=>{}} type={"search"} className={styles.search+ "  searchBar"} placeholder={"Search"}/>
            <div className='mainHeaderResult' id="mainHeaderResult">
              {searchResult && searchResult.length > 0 ? searchResult.map((res,index)=>{
                return(
                    <Link href={`/blog/article/${res?._id}/${res?.slug}`}  key={index}>
                      <div className={"searchResultText"}>
                          {res.title}
                      </div>
                    </Link>
                )
              }):(
                <div style={{
                  padding:"1rem",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}>No match found</div>
              )}
              <div>Search result</div>
            </div>
          </div>
        )}
    </div>
  )
}
