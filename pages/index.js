
import styles from './index.module.scss'
import HomePage from '../components/HomePage'
import { getTopArticles,getArticle } from '../services/articles'
import {getStories} from '../services/stories'
import { useRouter } from 'next/router'
import DefaultLayout from '../layouts/default'


export default function Home({isBreakpoint,page1,topA,toggleTheme,stories}) {

  const router = useRouter()
  const lang = router.locale

  return (
    <DefaultLayout
      title={"w4coder"}
      description={""}
      isBreakpoint={isBreakpoint}
    >
      <HomePage isBreakpoint={isBreakpoint} topA={topA} page1={page1} stories={stories} lang={lang}/>      
    </DefaultLayout>
  )
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
  //console.log(res.length)

  return { 
      props: {
        page1 : page1 || [],
        stories : stories || [],
        topA :  []
      } 
  }
}