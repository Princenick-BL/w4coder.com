import React,{Fragment,useState,useEffect,useRef} from 'react'
import dynamic from 'next/dynamic'
import styles from './index.module.scss'
import { getSection } from '../../components/client/article/article.utils'
import axios from 'axios'
import { config as endpoint } from '../../constants'
import * as gtag from '../../lib/gtag'
import router from 'next/router'
import RedisCache from '../../seoOpt/cache'
import Head from 'next/head'

export const config = { amp: true };

const BlogHead = dynamic(()=>import('../../components/BlogHead'))
const Menu = dynamic(()=>import('../../components/Menu'))
const ArticleHeader = dynamic(()=>import('../../components/HeaderB/header'))



export default function Article({article,canonical,social,articleTop}) {   

    return (
        <Fragment>
            {/* <Head>
                <meta name="theme-color" content="#000"/>
                <title>{article?.title}</title>
                <meta name="description" content={article?.description}/>
                <link rel="canonical" href={canonical}/>
                <link rel="preload" as="image" href={article?.poster} />
                <link rel="apple-touch-icon" href="/favicon.ico"></link>
                <link rel="preload stylesheet" as="style" href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" ></link>
                <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
                <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
                <style
                    amp-custom=""
                    dangerouslySetInnerHTML={{
                    __html: `
                        html {
                            font-family: sans-serif;
                            line-height: 1.15;
                            -webkit-text-size-adjust: 100%;
                            background-color: #202029;

                        }`,
                    }}
                ></style>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
                        {
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${canonical}"
                        },
                        "headline": "${article?.description}",
                        "image": "${article?.poster}",  
                        "author": {
                            "@type": "Person",
                            "name": "Prince Nick BALLO",
                            "url": "https://princenickballo.fr"
                        },  
                        "publisher": {
                            "@type": "Organization",
                            "name": "Nickscorp",
                            "logo": {
                            "@type": "ImageObject",
                            "url": ""
                            }
                        },
                        "datePublished":"${article?.publishedAt}"
                        }
                        `
                    }}>
                </script>
            </Head> */}
            <BlogHead
                title = {article?.title}
                poster={article?.poster}
                description={article?.description}
                publishedAt={article?.updatedAt}
                location = {canonical}
            />

            <amp-analytics type="gtag" data-credentials="include">
                <script type="application/json"
                    dangerouslySetInnerHTML={{
                        __html: `
                            {
                                "vars": {
                                    "gtag_id": "${gtag?.UA_TRACKING_ID}",
                                    "config": {
                                        "${gtag?.UA_TRACKING_ID}": "general"
                                    }
                                },
                                "triggers": {
                                    "pageView": { 
                                      "on": "visible",
                                      "request": "pageview"
                                    }     
                                }
                            }
                        `,
                      }}
                >
                    
                </script>
            </amp-analytics>
            {/* <Fragment>*/}
               
                <ArticleHeader/> 
                <main id="content" role="main">
                    
                    <article className="recipe-article" >
                        <div className={"recipe-article-content"}>
                            <span className="ampstart-subtitle block px3 pt2 mb2">{article?.category}</span>
                            <h1 className="mb2 px3 fsh1">{article?.title}</h1>
                            <address className="ampstart-byline clearfix mb4 px3 h5">
                                <time
                                    style={{overflow :"hidden",fontSize:"1rem"}}
                                    className="ampstart-byline-pubdate block bold mb2"
                                    dateTime="2016-12-13"
                                >{`Updated at : ${new Date(article?.updatedAt).toLocaleDateString()}`}</time>
                            </address>
                            <header>
                                <amp-img
                                    data-hero=""
                                    src={article?.poster}
                                    width={article?.meta?.width || "1280"}
                                    height={article?.meta?.height || "853"}
                                    layout="responsive"
                                    alt="The final spritzer"
                                    className="mb4 mx3 br5"
                                ></amp-img>
                            </header>
                            <div  className="main">

                                {article?.sections?.map((section,index)=>{
                                    return <div key={index}>{getSection(section)}</div> 
                                })}
                            </div>
                            {social && (
                                <div className='mb1 mx3 br5'>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <amp-embed
                                        type="taboola"
                                        width="400"
                                        height="300"
                                        layout="responsive"
                                        data-publisher="amp-demo"
                                        data-mode="thumbnails-a"
                                        data-placement="Ads Example"
                                        data-article="auto"
                                        >
                                    </amp-embed>
                                </div>

                            )}
                            <br></br>
                        </div>
                    </article>
                    <div className='ads-zone'>
                        <div style={{
                            width : "350px",
                            height : "450px",
                            backgroundColor:"#fff",
                            borderRadius : "10px",
                            padding : "5px"
                        }}>
                            <div style={{
                                width : "340px",
                                height : "340px",
                                backgroundColor:"#fff",
                                borderRadius : "10px",
                                padding : "5px",
                                boxShadow: "0 0 .5rem rgba(17,17,17,.7)",

                            }} >

                            </div>

                        </div>
                        <br></br>
                        <span style={{width:"340px",marginTop:"1rem",color:"#fff",fontSize:"1.2rem"}}>Top articles</span>
                        <br></br>
                        {articleTop && articleTop?.map((top,index)=>{
                            return(
                                <a key={index} href={`/article/${top?._id}/${top?.slug}`} 
                                style={{textDecoration : "none" }}>
                                    <div style={{
                                        width : "350px",
                                        height : "120px",
                                        backgroundColor:"#fff",
                                        borderRadius : "10px",
                                        padding : "5px",
                                        marginTop : "1rem"
                                    }}>
                                        <div style={{
                                            width : "100%",
                                            height : "110px",
                                            borderRadius : "5px",
                                            boxShadow: "0 0 .5rem rgba(17,17,17,.7)",
                                            transition: ".15s",
                                            overflow:"hidden",
                                            padding:"5px",
                                            display:"flex",
                                        }}>
                                            <div>
                                                <h5 style={{
                                                    fontSize:"1rem",
                                                    fontWeight:"initial",
                                                    margin:"0px",
                                                    lineHeight:"1.5",
                                                    "overflow": "hidden",
                                                    "display": "-webkit-box",
                                                    "-webkit-line-clamp": "4",
                                                    "-webkit-box-orient": "vertical",
                                                    textDecoration : "none"
                                                }}>{top?.title} </h5>
                                                {/* <h5 style={{
                                                    "overflow": "hidden",
                                                    "display": "-webkit-box",
                                                    "-webkit-line-clamp": "2",
                                                    "-webkit-box-orient": "vertical",
                                                }}>{top?.description} </h5> */}
                                            </div>
                                            <div
                                                style={{
                                                    width:"120px",
                                                    height:"80px"
                                                }}
                                            >
                                                <amp-img
                                                    data-hero=""
                                                    src={top?.poster}
                                                    width={100}
                                                    height={70}
                                                    layout="responsive"
                                                    alt="The final spritzer"
                                                ></amp-img>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                        <br></br>
                        {/* <amp-embed type="taboola"
                            width="400"
                            height="300"
                            layout="responsive"
                            data-publisher="amp-demo"
                            data-mode="thumbnails-a"
                            data-placement="Ads Example"
                            data-article="auto">
                        </amp-embed> */}
                        {/* <amp-ad width="300"
                            height="250"
                            type="industrybrains"
                            data-width="300"
                            data-height="250"
                            data-cid="19626-3798936394">
                        </amp-ad> */}
                        {/* 
                        <br></br>
                        <br></br>
                         */}
                        {/* <amp-ad 
                            width={300} 
                            height={200}
                            type="adsense"
                            layout="responsive"
                            data-ad-client="ca-pub-8125901705757971"
                            data-ad-slot="7783467241"
                            data-ad-format="auto">
                        </amp-ad> */}
                        
                    </div>
                </main>
                <footer className="ampstart-footer flex flex-column items-center px3">
                    <nav className="ampstart-footer-nav">
                        <ul className="list-reset flex flex-wrap mb3">
                        <li className="px1">
                            <a className="text-decoration-none ampstart-label" href="#">About</a>
                        </li>
                        <li className="px1">
                            <a className="text-decoration-none ampstart-label" href="#">Contact</a>
                        </li>
                        <li className="px1">
                            <a className="text-decoration-none ampstart-label" href="#">Terms</a>
                        </li>
                        </ul>
                    </nav>
                    <small> © Your Company, 2016 </small>
                </footer>
            {/* </Fragment> */}
            
        </Fragment>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    
    const {query,headers,params} = context;
    const {blob,social}  = query
    const articleId = blob[0]

    const fetcher = async ( )=>{
        try{
            const result = await axios.get(`${endpoint.API_ENDPOINT}/article/${articleId}`)
            return result.data?.data
        }catch(e){
            return null
        }
    }

    const fetcherTop = async ( )=>{
        try{
            const result = await axios.get(`${endpoint.API_ENDPOINT}/article/top`)
            return result.data?.data
        }catch(e){
            return null
        }
    }


    const canonical =  context?.req?.url
    const article = await RedisCache.fetch(`article-${articleId}`,fetcher,3600 * 24) || {}
    const articleTop = await RedisCache.fetch(`article-top`,fetcherTop,3600 * 24) || {}

    // console.log("Article Top",articleTop)

    // const article = await fetcher() 

   
    if (!article ) { 
        return {
          notFound: true,
        }
    }

    return { 
        props: {
            article : article,
            canonical : canonical || "",
            social : social || null,
            articleTop : articleTop
        } 
    }
    
    
  }