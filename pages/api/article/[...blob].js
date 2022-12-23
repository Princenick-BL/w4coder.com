
import axios from 'axios'
import { config as endpoint } from '../../../constants'
import {getStyles,getSections,getRecentArticles,injectAnalytics} from '../../../utils/article-utils'
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

   
    if (!article ) { 
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
        <link rel="apple-touch-icon" href="/favicon.ico">
        <link rel="canonical" href="https://w4coder.com/blog/article/${article?._id}/${article?.slug}" />
        <link href=https://fonts.gstatic.com rel="dns-prefetch preconnect" crossorigin>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Monoton&display=optional" as="style">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Monoton&display=optional">      
        <link rel="preload" href="${article?.poster}" as="image"/>
        <script type="application/ld+json">
        {
          "@context": "http://schema.org",
          "publisher": {
            "@type":"Organization",
            "name":"w4coder",
            "sameAs":"https://w4coder.com",
            "logo": {
              "@type":"ImageObject",
              "url":"/logo.png",
              "height":500,
              "width":500
            }
          },
          "headline":"titre",
          "url":"url",
          "thumbnailUrl":"poster",
          "image":{
            "@type":"ImageObject",
            "url":"${article?.poster}",
            "width":${article?.meta?.width || 1024},
            "height":${article?.meta?.height || 682}
          },
          "mainEntityOfPage": "https://w4coder.com/blog/article/${article?._id}/${article?.slug}",
          "@type":"NewsArticle",
          "dateCreated":"${article?.createdAt}",
          "datePublished":"${article?.createdAt}",
          "dateModified":"${article?.updatedAt}",
          "articleSection":"news",
          "creator":[
            {
              "name":"w4coder",
              "@type":"Organization"
            }
          ],
          "author":[
            {
              "name":"w4coder",
              "@type":"Organization",
              "URL":"https://w4coder.com"
            }
          ],
          "keywords":[
            ${article?.keywords?.map((v)=>{
              return '"'+v+'"'
            })},
            "/article"
          ]
        }			
        </script>
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
        <noscript>
          <style amp-boilerplate="">
            body {
              -webkit-animation: none;
              -moz-animation: none;
              -ms-animation: none;
              animation: none;
            }
          </style>
        </noscript>
  
        <script
          custom-element="amp-form"
          src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
          async=""
        ></script>
       
        <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
        
        <script>
        function openeMenu(){
              var closed = document.getElementById("closed")
              var opened = document.getElementById("opened")
              var submenu = document.getElementById("submenu")
              closed.classList.toggle("close");
              closed.classList.toggle("show");
              opened.classList.toggle("close");
              opened.classList.toggle("show");
              submenu.classList.toggle("close");
              submenu.classList.toggle("show");
            }
        </script>
      </head>
      <body class="px2">
        <div>
          <div class="flexHead">
            <a href="/"> <img src="/logo.png" width="40" alt="logo"  height="40"/></a>
            <ul class="menu">
              <li><a href="/">Acceuil</a></li>
              <li><a href="/web-stories">Web Stories </a></li>
              <li><a href="/tutos">Tutos</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <div style="width:40px;height:40px;" width="40"  height="40"></div>
          </div>
          <div class="menuMobile">
            <div class="menuView">
              <div class="article-head"> <a href="/"> <img src="/logo.png" width="40"  height="40"/></a></div>
              <svg id="opened"  onclick="openeMenu()"  class='hamburger show' style="width:1.5rem;height:1.5rem;cursor:pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path></svg>
              <svg id="closed" onclick="openeMenu()"  class='hamburger close' style="width:1.5rem;height:1.5rem;cursor:pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"></path></svg>
            </div>
            <ul id="submenu" class=" submenu close">
              <li><a href="/">. Acceuil .</a></li>
              <li><a href="/web-stories">. Web Stories .</a></li>
              <li><a href="/tutos">. Tutos .</a></li>
              <li><a href="/contact">. Contact .</a></li>
            </ul>
          </div>
        </div>
        ${injectAnalytics(article?.domainInfo?.ga)}
        <main id="content" role="main" >
          <div class="main ">
            <article class="recipe-article">
             
              <header>
                <span class="ampstart-subtitle block pt2 mb2">${article?.categoryInfo?.name || 'A LA UNE'}</span>
                <h1 class="mb1 ">${article?.title}</h1>

                <!-- Start byline -->
                <address class="ampstart-byline clearfix mb4  h5">
                  <time
                    class="ampstart-byline-pubdate block bold my1"
                    datetime="2016-12-13"
                    >${new Date(article?.updatedAt).toDateString()}</time
                  >
                </address>
                <!-- End byline -->
              <amp-img
                src="${article?.poster}"
                width="${article?.meta?.width || 16}"
                height="${article?.meta?.height || 9}"
                layout="responsive"
                alt="The final spritzer"
                class="br3"
              ></amp-img>
              </header>
              ${getSections(article?.sections)}
            </article>
          </div>
          <aside>
            <br></br>
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