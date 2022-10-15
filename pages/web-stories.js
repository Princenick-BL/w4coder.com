import React from 'react'
import MobileWS from '../components/WebStories/Mobile'
import DeskTopWS from '../components/WebStories/Desktop'
import Head from 'next/head'

import { getTopArticles,getArticle } from '../services/articles'
import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(0);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(1);
    } else {
      setTargetReached(2);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(1);
    }else{
      setTargetReached(2);

    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};




export default function WebStories({page1,topA}) {

  const isBreakpoint = useMediaQuery(768)
  const [themeDark,setThemeDark] = useState(false)

  // function to set a given theme/color-scheme
  function setTheme(themeName) {
    localStorage.setItem('theme-dark', themeName);
    document.documentElement.className = themeName;
  }
  
  // function to toggle between light and dark theme
  function toggleTheme() {
    if (localStorage.getItem('theme-dark') === 'true'){
        setTheme(false);
        setThemeDark(false);

    } else {
        setTheme(true);
        setThemeDark(true);

    }
  }
  
  // Immediately invoked function to set the theme on initial load
  useEffect(()=>{
    const theme = localStorage.getItem('theme-dark')
    
    console.log("Theme",theme)
    if ( theme == 'true') {
        setThemeDark(true);
    } else {
      setThemeDark(false);
    }
  },[])

   return (
    <div  className={themeDark===false ? "theme-light" : "theme-dark"}>
      <Head>
        <meta name="theme-color" content={themeDark===false ? "#fff" : "#202029"}/>
      </Head>
      { isBreakpoint === 2 ? (
        <div>
          <DeskTopWS page1={page1} topA={topA} toggleTheme={toggleTheme}/>
        </div>
      ) : isBreakpoint === 1 ?(
        <div>
          <MobileWS page1={page1} topA={topA} toggleTheme={toggleTheme}/>
        </div>
      ):(
        <></>
      )}
   </div>
   )
}

export async function getServerSideProps(context) {
  // Fetch data from external API

  const page1 =  await getArticle({filter:{
    page : 1
  }})

  const topA =  await getTopArticles()

  //console.log(res.length)

  return { 
      props: {
        page1 : page1 || [],
        topA : topA || []
      } 
  }
}