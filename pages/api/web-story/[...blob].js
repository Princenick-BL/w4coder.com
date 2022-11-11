
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

  const story = await fetcher()

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
        <script async custom-element="amp-video"
            src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
        <script async custom-element="amp-story"
            src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Oswald:200,300,400" rel="stylesheet">
        <link rel="preload" href="${story?.poster}" as="image"/>

        <style amp-custom>
          html{
            background : #000;
          }
          amp-story {
            font-family: 'Oswald',sans-serif;
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
            border : 1px solid #000;
            line-height: 2em;
            border-radius : 5px;
            margin-top: 50%;
          }
          .br3{
            border-radius: 5px;
          }
          #bookend{
            background-color:#000;
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
            <amp-story-grid-layer  aspect-ratio="4:3" template="thirds" class="noedge">
              <amp-img 
                src="${story.posterP}"
                width="720" 
                height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="0.4s"
                aspect-ratio="4:3"
                >
              </amp-img>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical" class="center-text">
                <p class="banner-text" animate-in="whoosh-in-right">w4coder.com</p>
            </amp-story-grid-layer>
            <amp-story-page-outlink 
              layout="nodisplay" 
              cta-text="More stories"
              cta-image="/logo.png"
            >
              <a href="https://w4coder.com" title="More stories"></a>
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