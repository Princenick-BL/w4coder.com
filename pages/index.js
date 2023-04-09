
import styles from './index.module.scss'
import HomePage from '@/layouts/templates/2/components/HomePage'
import { getTopArticles,getArticle } from '../services/articles'
import {getStories} from '@/services/stories'
import { useRouter } from 'next/router'
import DefaultLayout from '@/layouts/templates/1'
import Template2 from '@/layouts/templates/2'
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://youtube.googleapis.com/youtube/v3/search';
const theme = 2
export default function Home({isBreakpoint,page1,topA,toggleTheme,stories}) {
  // console.log("Stories",stories)
  const router = useRouter()
  const lang = router.locale
  if(theme===1){
    return (
      <DefaultLayout
        title={"w4coder"}
        description={""}
        isBreakpoint={isBreakpoint}
      >
        <HomePage isBreakpoint={isBreakpoint} topA={topA} page1={page1} stories={stories} lang={lang}/>      
      </DefaultLayout>
    )
  }else{
    return(
      <Template2
        title={"w4coder"}
        description={""}
        isBreakpoint={isBreakpoint}
        stories={stories}
        topA={topA} 
        page1={page1} 
        lang={lang}
      ></Template2>
    )
  }
}

export async function getServerSideProps({locale}) {
  // Fetch data from external API

  const page1 =  await getArticle({filter:{
    page : 1,
    lang : locale
  }})

  const stories =  await getStories({filter:{
    page : 1,
    lang : locale
  }})

  const ressult = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?key=${process.env.NEXT_PUBLIC_APP_YOUTUBE_API_KEY}&part=snippet&myRating=true&channelId=UCENrVFimv0tFrBM9SJqr1Aw&maxResults=5&order=viewCount&type=video`)
  const data = await ressult.json()

  const finalPage = [...page1,...data?.items]
  finalPage.sort(() => Math.random() - 0.5);
  //console.log(finalPage)

  return { 
      props: {
        page1 : finalPage || [],
        stories : stories || [],
        topA :  []
      } 
  }
}