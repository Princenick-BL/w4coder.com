
import axios from 'axios'
import { config as endpoint } from '../../../constants'
import {getStyles,getSections,getRecentArticles} from '../../../utils/article-utils'
const AmpOptimizer = require('@ampproject/toolbox-optimizer');
const ampOptimizer = AmpOptimizer.create();

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


    const article = await fetcher()
    const articleTop = await fetcherTop()

    // console.log("Article Top",articleTop)
    // console.log("Article Top",article)
    // const article = await fetcher() 

   
    if (!article._id ) { 
        res.redirect('/404')
    }

    const html = `
    
    <!DOCTYPE html>
    <html ⚡="" lang="fr">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="amp-google-client-id-api" content="googleanalytics" />
        <meta name="description" content="${article?.description}">
        <link rel="preload" href="https://cdn.ampproject.org/v0.js"  as="script">
        <link rel="preconnect dns-prefetch" href="https://fonts.gstatic.com/" crossorigin>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        ${getStyles()}
        <title>${article?.title}</title>
        <link rel="apple-touch-icon" href="/favicon.icon">
        <link rel="canonical" href="https://w4coder.com/blog/article/${article?._id}/${article?.slug}" />
        <link href=https://fonts.gstatic.com rel="dns-prefetch preconnect" crossorigin>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Oswald&display=optional" as="style">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald&display=optional">      
        <link rel="preload" href="${article?.poster}" as="image"/>
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
          custom-element="amp-form"
          src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
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
            <div class="ads600">
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
                    ></amp-img>
              </amp-ad>
            </div>
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

    res.setHeader(
      "Content-Type", 'text/html; charset=utf-8' 
    );    
    res.setHeader(
      "Accept-Encoding" , 'gzip, compress, br'
    )
    const optimizedHtml = await ampOptimizer.transformHtml(html);
    res.send(optimizedHtml)
}