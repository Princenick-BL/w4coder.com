import React ,{useEffect,useLayoutEffect,useState,useRef} from 'react'
import Logo from '../Logo'
import styles from './header.module.scss'
import {searchArticle} from '../../services/articles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import i18n from '../../i18n'

const date_options =  { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function Mobile({style,border=true}) {

  const router = useRouter()
  const lang = router.locale

  const [searchResult,setSearchResult]=useState([])
  const [openedMenu,setOpenedMenu] = useState(false)
  const [openedSearch,setOpenedSearch] = useState(false)

  const searchRef = useRef(null);
  //useAmpStoryPlayer(loadPlayer(playerRef))
  const stickyHeader = useRef()

  // useLayoutEffect(() => {
  //     const mainHeader = document.getElementById('mainHeader')
  //     let fixedTop = stickyHeader.current.offsetTop
  //     const fixedHeader = () => {
  //       if (window.pageYOffset > fixedTop) {
  //         mainHeader.classList.add('fixedTop')
  //       } else {
  //         mainHeader.classList.remove('fixedTop')
  //       }
  //     }
  //     window.addEventListener('scroll', fixedHeader)
  //   }, [])
    
  const handleChangeLang = (lang) =>{
    const value = lang;
    router.push(router.route, router.asPath, {      locale: value,    });
    i18n.changeLanguage(lang)

  }
  
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
      <>
        <div className={styles.annonce}>
          <div>{new Date().toLocaleDateString("fr-FR",date_options)}</div>
          <span><Link href={"/newsletter"}> S'abonner ?</Link></span>
        </div>
        <div className={styles.mobileHead}  style={{...style,borderBottom:border?"1px solid #eaeaea":"none"}}>
            <div className={styles.mobileSubHead} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div className={styles.hW} onClick={(e)=>{setOpenedMenu(!openedMenu)}}>
                {openedMenu ? (
                  <svg  className='hamburger' style={{width:"1.5rem",height:"1.5rem",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"></path></svg>
                ):(
                  <svg className='hamburger' style={{width:"1.5rem",height:"1.5rem",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path></svg>
                )}
              </div>
              <Logo style={{fontSize:"1.5rem"}}  w={40} h={40} />
              <div
               className={styles.hW} 
                style={{
                  display:"flex"
                }}>
                  <svg 
                    style={{
                      width:"1.5rem",
                      height:"1.5rem",
                      cursor:"pointer",
                      display:"flex",
                      marginRight:"1rem"
                    }}
                    className='hamburger' 
                    onClick={(e)=>{setOpenedMenu(!openedMenu)}}
                    focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                  <select defaultValue={lang} defaultChecked={lang} style={{
                      background:"transparent",
                      border:"none",
                      fontSize:"1.1rem"
                    }}
                    onChange={(e)=>{handleChangeLang(e.target.value)}}
                  >
                    <option value="en">{getUnicodeFlagIcon('US')}</option>
                    <option value="fr">{getUnicodeFlagIcon('FR')}</option>
                  </select>
                </div>
              </div>
            
            <ul className={styles.submenu+"  "+(openedMenu?styles.visible:styles.hidden)}>
              <li><Link href={"/"}>. Acceuil .</Link></li>
              <li><Link href={"/web-stories"}>. Web Stories .</Link></li>
              <li><Link href={"/youtube"}>. YouTube .</Link></li>
              <li><Link href={"/contact"}>. Contact .</Link></li>
            </ul>
            {openedSearch&&(
              
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
            )}
        </div>
       
      </>
    )
}
