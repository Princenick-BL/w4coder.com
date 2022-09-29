import React,{Fragment,useState,useEffect,useRef} from 'react'
import dynamic from 'next/dynamic'
import styles from './index.module.scss'
import { getSection } from '../../utils/article.utils'
import axios from 'axios'
import { config as endpoint } from '../../constants'
import * as gtag from '../../lib/gtag'
import router from 'next/router'
//import RedisCache from '../../seoOpt/cache'

export const config = { amp: true };

const BlogHead = dynamic(()=>import('../../components/BlogHead'))
const Menu = dynamic(()=>import('../../components/Menu'))
const ArticleHeader = dynamic(()=>import('../../components/HeaderB/header'))



export default function Article({article,canonical,social}) {   

    return (
        <Fragment>
            
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
                    
                    <article className="recipe-article">
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
                                    return getSection(section)
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
                        </div>
                    </article>
                    <div className='ads-zone'>
                    <br></br>

                        <span className='most-read'>Articles les plus lues</span>
                        <br></br>
                        <br></br>

                        {/* <amp-ad width="300"
                            height="250"
                            type="industrybrains"
                            data-width="300"
                            data-height="250"
                            data-cid="19626-3798936394">
                        </amp-ad>
                        <br></br>
                        <br></br>
                        <amp-embed type="taboola"
                            width="400"
                            height="300"
                            layout="responsive"
                            data-publisher="amp-demo"
                            data-mode="thumbnails-a"
                            data-placement="Ads Example"
                            data-article="auto">
                        </amp-embed> */}
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


    const canonical =  context?.req?.url
    //const article = await RedisCache.fetch(`article-${articleId}`,fetcher,3600 * 24) || {}
    const article = await fetcher() 

   
    if (!article ) { 
        return {
          notFound: true,
        }
    }

    return { 
        props: {
            article : article,
            canonical : canonical || "",
            social : social || null
        } 
    }
    
    
  }