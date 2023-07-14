import React , {useState,useRef,useLayoutEffect,useEffect} from 'react'
// import Logo from '@/components/Logo'
import styles from './header.module.scss'
import Link from 'next/link'
import {searchArticle} from '@/services/articles'
import { useRouter } from 'next/router'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import i18n from '@/i18n'
import { menu } from '@/constants'
import { useTranslation } from 'next-i18next'

export default function Desktop({style,border=false}) {
    const router = useRouter()
    const lang = router.locale
    const [searchResult,setSearchResult]=useState([])
    const [openedMenu,setOpenedMenu] = useState(false)
    const searchRef = useRef(null);
    const { t } = useTranslation()
    //useAmpStoryPlayer(loadPlayer(playerRef))
    const date_options =  { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
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

    const handleChangeLang = (lang) =>{
      const value = lang;
      router.push(router.route, router.asPath, {      locale: value,    });
      i18n.changeLanguage(lang)
    }
    
  return (
    <div className={styles.deskHead} >
      <div className={styles.pad}>
        <div className={styles.flexBetween}>
          <div className={styles.armure}>
            <div className={styles.svg}>
              <svg width="5" height="12" viewBox="0 0 5 12" id="icon-social-facebook" className="disable-css-transitions"><title className="disable-css-transitions">Icon - Facebook</title><desc className="disable-css-transitions">Facebooks brand mark for use in social sharing icons.</desc><path d="M5 3.886H3.297V2.64c0-.468.278-.577.474-.577h1.202V.007L3.318 0C1.48 0 1.062 1.534 1.062 2.515v1.37H0v2.12h1.062V12h2.235V6.004h1.508L5 3.886z" className="disable-css-transitions"></path></svg>
            </div>
            <div className={styles.svg}>
              <svg width="12" height="12" viewBox="0 0 12 12" id="icon-social-instagram" className="disable-css-transitions"><title className="disable-css-transitions">Icon - Instagram</title><desc className="disable-css-transitions">Instagrams brand mark for use in social sharing icons.</desc><path d="M9.68 0H2.32A2.322 2.322 0 0 0 0 2.319V9.68A2.322 2.322 0 0 0 2.32 12H9.68A2.321 2.321 0 0 0 12 9.681V2.318A2.321 2.321 0 0 0 9.68 0zm.666 1.383l.265-.001v2.034l-2.027.006-.007-2.033 1.77-.006zM4.287 4.768A2.111 2.111 0 0 1 6 3.888a2.11 2.11 0 0 1 1.712.88c.25.347.4.772.4 1.232A2.115 2.115 0 0 1 6 8.112 2.114 2.114 0 0 1 3.888 6c0-.46.15-.885.4-1.232zm6.544 4.913a1.15 1.15 0 0 1-1.15 1.15H2.319a1.15 1.15 0 0 1-1.15-1.15V4.768H2.96c-.154.38-.241.796-.241 1.232A3.285 3.285 0 0 0 6 9.28 3.285 3.285 0 0 0 9.281 6c0-.436-.087-.851-.242-1.232h1.792v4.913z" className="disable-css-transitions"></path></svg>
            </div>

          </div>
          <div>
            {/* <Logo style={{fontSize:"2rem"}} w={20} h={20} /> */}
          </div>
          <div
            className={styles.armure}
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
                fontSize:"1.1rem",
                cursor:"pointer"
              }}
              onChange={(e)=>{handleChangeLang(e.target.value)}}
            >
              <option value="en">{getUnicodeFlagIcon('US')}</option>
              <option value="fr">{getUnicodeFlagIcon('FR')}</option>
            </select>
          </div>
        </div>
        <div className={styles.flexC} style={{...style,borderBottom:border?"1px solid #eaeaea":"none"}}>
          <ul className={styles.submenu}>
            {menu?.filter(m=>m?.level>0)?.map((m,i)=>{
              return <li key={i}><Link href={m.slug}>{t(m.name)}</Link></li>
            })}
          </ul>
        </div>
      </div>
      <div className={styles.subnav}> 
        {openedMenu && (
          <div 
            style={{
              top:"60px",
              zIndex: 1
            }} 
            id="mainHeader"
            className="mainHeader searching"
          >
            <div style={{flex:"1 1 30%"}}>
              <input ref={searchRef} onChange={(e)=>{searching(e)}} onFocus={(e)=>{}} type={"search"} className={styles.search+ "  searchBar"} placeholder={"Search"}/>
              <br></br>
            </div>
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
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
