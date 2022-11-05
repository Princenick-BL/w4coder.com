import React from 'react'
import Logo from '../Logo'
import styles from './header.module.scss'

export default function Desktop() {
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
