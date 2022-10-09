
import { getSection } from '../../../components/client/article/article.utils'
import axios from 'axios'
import { config as endpoint } from '../../../constants'
import * as gtag from '../../../lib/gtag'
import RedisCache from '../../../seoOpt/cache'
import {getStyles,getSections,getRecentArticles} from '../../../utils/article-utils'

export default async function handler(req, res) {

    const {query,headers,params} = req;
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


    const article = await RedisCache.fetch(`article-${articleId}`,fetcher,3600 * 24) || {}
    const articleTop = await RedisCache.fetch(`article-top`,fetcherTop,3600 * 24) || {}

    // console.log("Article Top",articleTop)
    // console.log("Article Top",article)
    // const article = await fetcher() 

   
    if (!article._id ) { 
        res.redirect('/404')
    }

    const html = `
    
    <!DOCTYPE html>
    <html ⚡="">
      <head>
        <meta charset="utf-8" />
        <title>${article?.title}</title>
        <link rel="canonical" href="https://w4coder.com/api/article/${article?._id}/${article?.slug}" />
        <meta name="viewport" content="width=device-width" />
        <meta name="amp-google-client-id-api" content="googleanalytics" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
        <script async="" src="https://cdn.ampproject.org/v0.js"></script>
        ${getStyles()}
        <style amp-boilerplate="">
          body {
            -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            animation: -amp-start 8s steps(1, end) 0s 1 normal both;
          }
          @-webkit-keyframes -amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }
          @-moz-keyframes -amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }
          @-ms-keyframes -amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }
          @-o-keyframes -amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }
          @keyframes -amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }
        </style>
        <noscript
          ><style amp-boilerplate="">
            body {
              -webkit-animation: none;
              -moz-animation: none;
              -ms-animation: none;
              animation: none;
            }
          </style></noscript
        >

        <script
          custom-element="amp-carousel"
          src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"
          async=""
        ></script>
  
        <script
          custom-element="amp-form"
          src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
          async=""
        ></script>
        <script
          custom-element="amp-instagram"
          src="https://cdn.ampproject.org/v0/amp-instagram-0.1.js"
          async=""
        ></script>
        <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
       
      </head>
      <body>
        <header class="article-head">
            <a href="/"> w4coder</a>
        </header>
        <main id="content" role="main" >
          <div class="main">
            <article class="recipe-article">
              <header>
                <span class="ampstart-subtitle block px3 pt2 mb2">${article?.category?.name || 'A LA UNE'}</span>
                <h1 class="mb1 px3">${article?.title}</h1>

                <!-- Start byline -->
                <address class="ampstart-byline clearfix mb4 px3 h5">
                  <time
                    class="ampstart-byline-pubdate block bold my1"
                    datetime="2016-12-13"
                    >${new Date(article?.updatedAt).toDateString()}</time
                  >
                </address>
                <!-- End byline -->
                <amp-img
                  src="${article?.poster}"
                  width="${article?.meta?.width}"
                  height="${article?.meta?.height}"
                  layout="responsive"
                  alt="${article?.title}"
                  class="mb4 mx3"
                ></amp-img>
              </header>
              ${getSections(article?.sections)}
            </article>
          </div>
          <aside>
            <div class="sider-search" >
              <input type="search"/>
              <input type="submit" value="Search"/>
            </div>
            <div style="margin-bottom:1rem;">
              <span style="font-size:1.2rem;font-weight:800;">Recent Posts</span>
              ${getRecentArticles(articleTop)}
            </div>
            <amp-ad
              layout="fixed"
              width="300"
              height="600"
              type="adsense"
              data-ad-client="ca-pub-5455960452945884"
              data-ad-slot="5358300827">
                  <amp-img
                      src="/images/adPlaceholder.png"
                      width="300"
                      height="600"
                      layout="responsive"
                      alt="placeholder"
                      class="mb4 mx3"
                  ></amp-img>
            </amp-ad>
          </aside>
        </main>

        <!-- Start Footer -->
        <footer class="ampstart-footer flex flex-column items-center px3">
          <nav class="ampstart-footer-nav">
            <ul class="list-reset flex flex-wrap mb3">
              <li class="px1">
                <a class="text-decoration-none ampstart-label" href="#">About</a>
              </li>
              <li class="px1">
                <a class="text-decoration-none ampstart-label" href="#">Contact</a>
              </li>
              <li class="px1">
                <a class="text-decoration-none ampstart-label" href="#">Terms</a>
              </li>
            </ul>
          </nav>
          <small> © Your Company, 2016 </small>
        </footer>
        <!-- End Footer -->
      </body>
    </html>
    `

    
    res.send(html)
}