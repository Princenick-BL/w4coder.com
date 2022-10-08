import React from 'react'
import MobileHP from '../components/Home/Mobile'
import DeskTopHP from '../components/Home/Desktop'

import { getTopArticles,getArticle } from '../services/articles'
import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};




export default function index({page1,topA}) {
  const isBreakpoint = useMediaQuery(768)
   return (
    <div>
      { isBreakpoint ? (
        <div>
          <MobileHP page1={page1} topA={topA}/>
        </div>
      ) : (
        <div>
          <DeskTopHP page1={page1} topA={topA}/>
        </div>
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