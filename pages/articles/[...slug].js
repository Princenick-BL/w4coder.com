import { getSingleArticleById } from '@/services/articles'
import Head from 'next/head'
import React,{useState,useEffect} from 'react'
import Header from '@/layouts/templates/2/components/Header'
import styles from './index.module.scss'
import moment from 'moment'
import Image from 'next/legacy/image'
// import CodeHighlighter from '@/components/Highligter'
import Footer from '@/layouts/templates/2/components/Footer'
import { config } from '@/constants'
import { useTheme } from 'next-themes';

export default function Article({isBreakpoint,article}) {
  const pageTitle = `${article?.title} | My Blog`;
  const pageDescription = article?.description || 'A great blog post about something awesome!';
  const pageKeywords = article?.keywords || 'blog, awesome, something';
  const pageImage = article?.poster || '/images/default-image.jpg';
  const pageUrl = `${config?.CURRENT_DOMAIN}/articles/${article._id}/${article.slug}`;
  const { theme } = useTheme();
   // Handle loading state while fetching data
   const [loading, setLoading] = useState(true);

   // Fetch post data on page load
   useEffect(() => {
     setLoading(false);
   }, []);
 
   // Render loading state
   if (loading) {
     return <div>Loading...</div>;
   }
 
   // Render post data
  return (
    <>
        <Header
          isBreakpoint={isBreakpoint}
        />
         <Head>
          <title>{`${article?.title} | My Blog`}</title>
          <meta name="description" content={article?.description || 'A great blog post about something awesome!'} />
          <meta name="keywords" content={ article?.keywords || 'blog, awesome, something'} />
          <meta name="author" content="My Blog" />
          <meta name="theme-color" content={theme === 'dark' ? '#161716' : '#ffffff'}/>
          {/* Open Graph */}
          <meta property="og:title" content={`${article?.title} | My Blog`} />
          <meta property="og:description" content={article?.description || 'A great blog post about something awesome!'} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={article?.poster || '/images/default-image.jpg'} />
          <meta property="og:url" content={`${config?.CURRENT_DOMAIN}/articles/${article._id}/${article.slug}`} />

          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${article?.title} | My Blog`} />
          <meta name="twitter:description" content={article?.description || 'A great blog post about something awesome!'} />
          <meta name="twitter:image" content={article?.poster || '/images/default-image.jpg'} />
          <meta name="twitter:url" content={`${config?.CURRENT_DOMAIN}/articles/${article._id}/${article.slug}`} />

          {/* Canonical URL */}
          <link rel="canonical" href={pageUrl} />
         
        </Head>
        <article className={styles.article}>
          <h1>{article?.title}</h1>
          <span>Published by <strong>{article?.author?.name}</strong> {moment(article?.updatedAt).fromNow()}</span>
          <section className={styles.section}>
            <section className={styles.content}>
              {/* <figure>
              <Image
                    src={ article.poster?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n/tr:w-1080,h-1080,cm-pad_resize,bg-F3F3F3")}
                    width={1}
                    height={1}
                    layout="responsive"
                    className={styles.img}
                    alt={article.title}
                    placeholder="blur"
                    blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0/89QDwAEYgG3DMBzIAAAAABJRU5ErkJggg=="
                />
                <figcaption>Hello</figcaption>
              </figure> */}
              {/* {article?.sections?.map(({ content },id) => (
                <CodeHighlighter key={id} text={content} language="javascript"/>
              ))} */}
            </section>
            <aside>

            </aside>
          </section>
        </article>
        <Footer/>
    </>
  )
}
export async function getServerSideProps(context) {
    // Fetch data from external API
    const {params,local} = context
    const res = await fetch(`${config.API_ENDPOINT}/article/${params?.slug[0]}`);
    const article = await res.json();
    console.log(article)
    return { 
        props: {
            article : article?.data || null
        } 
    }
  }