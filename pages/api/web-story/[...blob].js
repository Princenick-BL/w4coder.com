
import axios from 'axios'
import { config as endpoint } from '../../../constants'
import * as gtag from '../../../lib/gtag'
import RedisCache from '../../../seoOpt/cache'
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

  const story = await RedisCache.fetch(`story-${storyId}`,fetcher,3600 * 24) || {}

  if (!story._id ) { 
    res.redirect('/404')
  }

  const html = `
    <!doctype html>
    <html ⚡>
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
            background : #fff;
          }
          amp-story {
            font-family: 'Oswald',sans-serif;
            color: #fff;
            border-radius : 10px;
          }
          amp-story-page {
            background-color: #000;
          }
          .homeH1 {
            font-weight: bold;
            font-size: 2.875em;
            font-weight: normal;
            line-height: 1.174;
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
            background-color: #000;
            line-height: 2em;
          }
        </style>
      </head>
      <body>
        <!-- Cover page -->
        <amp-story standalone
            title="Joy of Pets"
            publisher="AMP tutorials"
            publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
            poster-portrait-src="https://picsum.photos/720/1280">
          ${getStorySlides(story?.slides)}
          
    
          <!-- Bookend -->    
          <amp-story-bookend src="bookend.json" layout="nodisplay"></amp-story-bookend>
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