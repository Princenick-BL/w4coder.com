import { useState,useEffect,useCallback } from 'react';
import '../styles/globals.scss'


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

  useEffect(()=>{
    const theme = localStorage.getItem('theme-dark')
    
    console.log("Theme",theme)
    if ( theme == 'true') {
        setThemeDark(true);
    } else {
      setThemeDark(false);
    }
  },[])
  return(
    <div  className={themeDark===false ? "theme-light" : "theme-dark"}>
      <Component  {...pageProps} isBreakpoint={isBreakpoint} toggleTheme={toggleTheme}/>
    </div>
  )
}

export default MyApp
