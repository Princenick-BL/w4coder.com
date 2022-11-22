import { useState,useEffect,useCallback } from 'react';
import '../styles/globals.scss'
import Script from 'next/script';
import Head from 'next/head';


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


function MyApp({ Component, pageProps }) {

  const isBreakpoint = useMediaQuery(800)
  const [themeDark,setThemeDark] = useState(null)

  // function to set a given theme/color-scheme
  function setTheme(themeName) {
    localStorage.setItem('theme-dark', themeName);
    document.documentElement.className = themeName;
  }
  
  // function to toggle between light and dark theme
  function toggleTheme(theme) {
    if(theme == 'true' || theme == 'false'){
      setTheme(theme);
      setThemeDark(theme);
    }else{
      setTheme(null);
      setThemeDark(null);
    }
  }

  useEffect(()=>{
    const theme = localStorage.getItem('theme-dark')
    
    if ( theme == 'true') {
      setThemeDark(true);
    } else if(theme == 'false') {
      setThemeDark(false);
    }

  },[])
  return(
    <div id='app'  className={themeDark===false ? "theme-light" :themeDark===true ? "theme-dark" : ""}>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WV85CLJKTF"></script>
      </Head>
      <script dangerouslySetInnerHTML={{__html:`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-WV85CLJKTF');
      `}}/>
      <Component  {...pageProps} isBreakpoint={isBreakpoint} toggleTheme={(e)=>toggleTheme(e)}/>
    </div>
  )
}

export default MyApp
