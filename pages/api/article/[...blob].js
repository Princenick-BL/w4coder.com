
import axios from 'axios'
import { config as endpoint } from '../../../constants'
import {getStyles,getSections,getRecentArticles,injectAnalytics} from '../../../utils/article-utils'
const AmpOptimizer = require('@ampproject/toolbox-optimizer');
const ampOptimizer = AmpOptimizer.create();
import { menu } from '../../../constants';
import Prism from 'prismjs';



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
            const result = await axios.get(`${endpoint.API_ENDPOINT}/article/top?lang=en`)
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

    var html = `
    
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
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Oswald&display=optional" as="style">
        <link rel="stylesheet" type="text/css" href="/prism-okaidia.css" />
        <link rel="preload" href="${article?.poster?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n/tr:w-1920,h-1920,cm-pad_resize,bg-F3F3F3")}" as="image"/>
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
            "url":"${article?.poster?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n/tr:w-1920,h-1920,cm-pad_resize,bg-F3F3F3")}",
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
       
        <!-- <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script> -->
        
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
        <header>
          <div class="flexHead">
            <div class="flexBetween">
              <div class="armure">
                <div class="svg">
                  <svg width="5" height="12" viewBox="0 0 5 12" id="icon-social-facebook" class="disable-css-transitions"><title class="disable-css-transitions">Icon - Facebook</title><desc class="disable-css-transitions">Facebooks brand mark for use in social sharing icons.</desc><path d="M5 3.886H3.297V2.64c0-.468.278-.577.474-.577h1.202V.007L3.318 0C1.48 0 1.062 1.534 1.062 2.515v1.37H0v2.12h1.062V12h2.235V6.004h1.508L5 3.886z" class="disable-css-transitions"></path></svg>
                </div>
                <div class="svg">
                  <svg width="12" height="12" viewBox="0 0 12 12" id="icon-social-instagram" class="disable-css-transitions"><title class="disable-css-transitions">Icon - Instagram</title><desc class="disable-css-transitions">Instagrams brand mark for use in social sharing icons.</desc><path d="M9.68 0H2.32A2.322 2.322 0 0 0 0 2.319V9.68A2.322 2.322 0 0 0 2.32 12H9.68A2.321 2.321 0 0 0 12 9.681V2.318A2.321 2.321 0 0 0 9.68 0zm.666 1.383l.265-.001v2.034l-2.027.006-.007-2.033 1.77-.006zM4.287 4.768A2.111 2.111 0 0 1 6 3.888a2.11 2.11 0 0 1 1.712.88c.25.347.4.772.4 1.232A2.115 2.115 0 0 1 6 8.112 2.114 2.114 0 0 1 3.888 6c0-.46.15-.885.4-1.232zm6.544 4.913a1.15 1.15 0 0 1-1.15 1.15H2.319a1.15 1.15 0 0 1-1.15-1.15V4.768H2.96c-.154.38-.241.796-.241 1.232A3.285 3.285 0 0 0 6 9.28 3.285 3.285 0 0 0 9.281 6c0-.436-.087-.851-.242-1.232h1.792v4.913z" class="disable-css-transitions"></path></svg>
                </div>
              </div>
              <div class="logo">
                <a href="/">w4coder</a>
              </div>
              <div
                class="armure"
                style="display:flex">
                <svg 
                  style="width:1.5rem;height:1.5rem; cursor:pointer; display:flex; margin-right:1rem "
                  class='hamburger' 
                  focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                <select defaultValue={lang} defaultChecked={lang} style="background:transparent;border:none;fontSize:1.1rem;cursor:pointer;">
                  <option value="en">US</option>
                  <option value="fr">FR</option>
                </select>
              </div>
            </div>
            <ul class="submenu">
              <li><a href="#">HOME</a></li>
              <li><a href="#">WEB STORIES</a></li>
              <li><a href="#">YOUTUBE</a></li>
              <li><a href="#">PROJECTS</a></li>
            </ul>
          </div>
        </header>
        ${injectAnalytics(article?.domainInfo?.ga)}
        <main id="content" role="main" >
          <h1 class="mb1 ">${article?.title}</h1>
          
          <!-- Start byline -->
          <address class="flex mf">
            <span class="mrl">${article?.categoryInfo?.name || 'A LA UNE'}</span>
            <time
              class="ampstart-byline-pubdate block bold my1"
              datetime="2016-12-13"
              >${new Date(article?.updatedAt).toDateString()}</time
            >
          </address>
          <!-- End byline -->
          <div class="main">
            <article class="recipe-article">
              <header>
                <amp-img
                  src="${article?.poster?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n/tr:w-1920,h-1920,cm-pad_resize,bg-F3F3F3")}"
                  width="1"
                  height="1"
                  layout="responsive"
                  alt="The final spritzer"
                  class="br3"
                ></amp-img>
              </header>
              <div class="article-content">
              ${getSections(article?.sections)}
              </div>
            </article>
          
            <aside>
              <div class="popular-posts">
                <h2>Popular posts</h2>
                ${getRecentArticles(articleTop)}
              </div>
              <br/>
              <div class="ads600">
               <!-- <amp-ad
                  layout="fixed"
                  width="300"
                  height="600"
                  type="adsense"
                  data-ad-client="ca-pub-5455960452945884"
                  data-ad-slot="5358300827">
                      <amp-img
                          src="/adPlaceholder.png"
                          width="300"
                          height="600"
                          layout="responsive"
                          alt="placeholder"
                      ></amp-img>
                </amp-ad> -->
              </div>
            </aside>
          <div/>
        </main>

        <!-- Start Footer -->
        <footer>
          <div class="content">
            <div class="left">
              <div class="h3"><a href="/">W4CODER</a></div>
            </div>
            <div class="right">
              <div class="h3">Stay Updated</div>
              <span>Stay informed of the news and don't miss anything</span>
              <form class="newsletterbox">
                  <input type='text' placeholder='Type your email ...'/>
                  <input type='submit' value='subscribe'/>
              </form>
            </div>
          </div>
          <div class="small"> 
            <span>Copyright © 2022 w4coder. All rights reserved.</span>
            <div class="small-powered">Powered by Nick's corp <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                <g className="sun-beams" stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
            </svg>
            <select >
                <option value="system">System</option>
                <option value="lignt">Light</option>
                <option value="dark">Dark</option>
            </select></div>
          </div>
        </footer>
        <!-- End Footer -->
      </body>
    </html>
    `
    html = html.replace(/<code>(.*?)<\/code>/gs, (match, p1) => {
      const highlightedCode = Prism.highlight(p1, Prism.languages["javascript"], "javascript");
      return `<code class="language-${"javascript"}">${highlightedCode}</code>`;
    });

    res.setHeader(
      "Content-Type", 'text/html; charset=utf-8' 
    );    
    res.setHeader(
      "Accept-Encoding" , 'gzip, compress, br'
    )
    const optimizedHtml = await ampOptimizer.transformHtml(html);
    res.send(optimizedHtml)
}