
import axios from 'axios'
import { config as endpoint } from '../../../constants'
import {getStorySlides} from '../../../utils/story-utils'
const AmpOptimizer = require('@ampproject/toolbox-optimizer');
const ampOptimizer = AmpOptimizer.create();
export default async function handler(req, res) {

  const {query,headers,params} = req;
  const {blob,social}  = query
  const storyId = blob[0]

  const fetcher = async ( )=>{
      try{
          const result = await axios.get(`${endpoint.API_ENDPOINT}/stories/${storyId}`)
          return result.data?.data
      }catch(e){
          return null
      }
  }

  const recomandedFetcher = async ( )=>{
    try{
        const result = await axios.get(`${endpoint.API_ENDPOINT}/stories/recomanded/${storyId}`)
        return result.data?.data
    }catch(e){
        return null
    }
}

  const story = await fetcher()
  const recomanded = await recomandedFetcher()

  // console.log(recomanded)

  if (!story._id ) { 
    res.redirect('/404')
  }

  const html = `
    <!doctype html>
    <html ⚡ lang="en">
      <head>
        <meta charset="utf-8">
        <title>${story.title}</title>
        <meta name="description" content="${story?.description}">
        <link rel="canonical" href="https://w4coder.com/blog/web-story/${story?._id}/${story?.slug}">
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
        <link rel="preload" href="https://cdn.ampproject.org/v0.js"  as="script">
        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
        <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
        <link rel="preload" href="${story?.poster}" as="image"/>
        <script type="application/ld+json">
          {
            "@context":"http://schema.org",
            "publisher": {
              "@type": "Organization",
              "name": "w4coder",
              "logo": {
                "@type":"ImageObject",
                "url":"/logo.png",
                "width":500,
                "height":500
              }
            },
            "image": {
              "@type":"ImageObject",
              "url":"${story?.posterP}",
              "width":640,
              "height":853
            },
            "@type":"Article",
            "mainEntityOfPage":"https://w4coder.com/blog/web-story/${story?._id}/${story?.slug}",
            "headline":"",
            "datePublished":"${story?.createdAt}",
            "dateModified":"${story?.updatedAt}",
            "author": {
              "@type":"Organization",
              "name":"w4coder"
            }
          }        
        </script>
        <style amp-custom>
          html{
            background : #000;
          }
          amp-story {
            color: #000;
            border-radius : 10px;
          }
          amp-story-page {
            background-color: #fff;
          }
          .homeH1 {
            font-weight: bold;
            font-size: 2em;
            font-weight: normal;
            line-height: 1.5;
          }
          homeP {
            font-weight: normal;
            font-size: 1.3em;
            line-height: 1.5em;
            color: #fff;
          }
          q {
            font-weight: 300;
            font-size: 1.1em;
          }
          amp-story-grid-layer.bottom {
            align-content:end;
          }
          amp-story-grid-layer.noedge {
            padding: 0px;
          }
          amp-story-grid-layer.center-text {
            align-content: center;
          }
          .wrapper {
            display: grid;
            grid-template-columns: 25% 25% 25% 25%;
            grid-template-rows: 50% 50% ;
          }
          .banner-text {
            text-align: center;
            background-color: #fff;
            line-height: 2em;
            border-radius : 5px;
            height : max-content;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          }
          .br3{
            border-radius: 5px;
          }
          #bookend{
            background-color:#000;
          }
          .reco{
            display:flex;
            background-color: #fff;
            border-radius : 5px;
            height: max-content;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            padding : 5px;
          }
         
          p{
            line-height: 1.5;
          }
        </style>
      </head>
      <body>
        <!-- Cover page -->
        <amp-story 
          standalone
          title="${story.title}"
          publisher="w4coder"
          publisher-logo-src="/logo.png"
          poster-portrait-src="${story?.posterP}"
          poster-square-src="${story?.posterS}"
          poster-landscape-src="${story?.posterL}"
        >
          ${getStorySlides(story?.slides)}
          <!-- Bookend -->  
          <amp-story-page id="bookend">
            <amp-story-grid-layer template="fill">
              <amp-img 
                src="/bookend.webp"
                layout="fill"
                class="blur"
                >
              </amp-img>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical" class="center-text">
              <p class="banner-text" animate-in="fly-in-top">Read More</p>
              ${recomanded.map((r,id)=>{
                return `
                  <a href="/blog/web-story/${r._id}/${r?.slug}">
                    <div class="reco" animate-in="${id==0 ? "fly-in-left" : id==1 ? "fly-in-right" : "fly-in-bottom"}" >
                      <amp-img 
                        src="${r.posterS}"
                        width="1" 
                        height="1"
                        layout="responsive"
                        animate-in="fade-in"
                        style="width:250px; height:auto;border-radius:5px;margin-right:10px;"
                        >
                      </amp-img>
                      <div> ${r.title} </div>
                    </div>
                  </a>
                  `
              })}
            </amp-story-grid-layer>
            <amp-story-page-outlink 
              layout="nodisplay" 
              cta-image="/logo.png"
            >
              <a href="https://w4coder.com" title="More stories">w4coder.com</a>
            </amp-story-page-outlink>
          </amp-story-page> 
        </amp-story>
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