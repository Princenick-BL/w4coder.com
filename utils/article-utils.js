import { SECTION_TYPE } from "../constants"
export function getSections(sections){

  var htmlSections = ""
  const regex = /class="(.*?)"/

  sections?.map((section,index)=>{
        
        if(section){
            switch(section?.type){
                case SECTION_TYPE.TEXT_BLOCK :
                  htmlSections += section?.content?.replace("h1>","h1 class=\"px3\">")
                  return
                case SECTION_TYPE.IMAGE_BLOCK :
                  htmlSections+= `
                        <amp-img
                            src=${section?.content?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n")}
                            width=${section?.meta?.width}
                            height=${section?.meta?.height}
                            layout="responsive"
                            alt=${section?.meta?.alt||"w4coder"}}
                            class="mb4 mx3 br5"
                        ></amp-img>
                    `
                    return
                case SECTION_TYPE.GIT_BLOCK:
                  htmlSections += `
                  <p class="max-w">
                    <script src="https://princenick-bl.github.io/codeprinter/embed-v2.js?target=${section?.content}&style=default&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"></script>              
                  </p>
                  `
                  return
                
                default :
                    return ""
            }
    
        }else {
            return ''
        }
    })
    return htmlSections
}

export function getRecentArticles(recentA){

  var htmlSections = ""
  recentA?.map((article,index)=>{ 

    if(article){

      htmlSections += `<div class="top-article">
        <amp-img
          src="${article?.poster?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n/tr:w-1920,h-1920,cm-pad_resize,bg-F3F3F3")}"
          width="1"
          height="1"
          layout="responsive"
          alt="The final spritzer"
          class="br3"
        ></amp-img>
        <span>
          <a href=${`/articles/${article._id}/${article.slug}`}>${article?.title}</a>
        </span>
      </div>`
              
    }

  })

  return htmlSections
}

export function injectAnalytics(tag){
  if(tag){
    return  `
      <amp-analytics  type="googleanalytics"  config="https://amp.analytics-debugger.com/ga4.json"  data-credentials="include">
        <script  type="application/json">
        {
          "vars": {
            "GA4_MEASUREMENT_ID": "${tag}",
            "GA4_ENDPOINT_HOSTNAME": "www.google-analytics.com",
            "GOOGLE_CONSENT_ENABLED": false,
            "WEBVITALS_TRACKING": false,
            "PERFORMANCE_TIMING_TRACKING": false,
            "DEFAULT_PAGEVIEW_ENABLED": true,
            "SEND_DOUBLECLICK_BEACON": false,
            "ENABLE_REGIONAL_DATA_COLLECTION": true
          }
        }
        </script>
      </amp-analytics>
    `
  }else{
    return ``
  }
}

export function getStyles(){
    return `
    <style amp-custom="">
    /*! Bassplate | MIT License | http://github.com/basscss/bassplate */

    /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */
    html {
      font-family: Oswald;
      line-height: 1.15;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      display:flex;
      justify-content:center;
    }
    :root{
      --color-primary:#264cbf;
      --color-primary-a:#d01100;
      --color-secondary-1:#bbf7d0;
      --color-secondary-2:#dcfce7;
      --placeholder-color : #F8F8F8;
      --boder-color : rgb(226, 221, 221);
      --background-primary : #fff;
      --background-secondary : #ebebf0;
      --background-tertiary : #ccc;
    }
    *{
      box-sizing: border-box;
    }
    p{
        font-size : 1.2rem;
        line-height : 1.5;
    }

    body {
      background: #fff;
      font-family: Oswald;
      min-width: 315px;
      overflow-x: hidden;
      font-smooth: always;
      -webkit-font-smoothing: antialiased;
      padding: 0;
      width: 100%;
      margin: 0 auto !important;
      min-width: max-content;
    }
    header{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-bottom: 40px;
      box-shadow: 0 1px 0 0 var(--background-secondary);
      width: 100%;
    }

    header .flexHead{
      padding: 40px 40px 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .flexBetween{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .armure{
      width: 10%;
      display: flex;
      align-items: center;
    }

    .svg{
      border: 1px solid var(--background-secondary);
      width: 30px;
      height: 30px;
      min-width: 30px;
      min-height: 30px;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
    }
    .logo{
      font-size: 2rem;
      width: max-content;
      text-transform: uppercase;
      font-weight: bold;
    }
    .logo a{
      text-decoration : none;
      color : inherit;
    }
    .submenu{
      display: flex;
      justify-content: left;
      width: max-content;
      margin: 0;
      padding: 0;
      position: relative;
    }
    .submenu li{
      text-decoration: none;
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;
      padding: 2rem 0;
      text-transform: uppercase;
      text-decoration: underline;
      font-weight: bold;
    }
    .submenu li a{
      color : inherit;
    }
    main{
      width: 100%;
      max-width: 65.26316em;
      margin-left: auto;
      margin-right: auto;
      display:flex;
      flex-direction : column;
      align-items:center;
    }
    @media only screen and (max-width: 700px) {
      .armure{
        width: initial;
      }
      header .flexHead{
        padding: 40px 10px 0;
      }
      h1{
        font-size: 2rem !important;
      }
      .main,main,header,footer,footer .content,.submenu{
        flex-direction: column;
        max-width: 100vw !important;
      }

      .article-content{
        padding: 1rem;
      }

      .popular-posts{
        width: 100% !important;
      }
      .top-article amp-img{
        flex : 1 50% !important;
      }
      .submenu{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content : center;
        margin-top: 1rem;
      }
      .submenu li{
        padding : 5px 0;
        margin: 10px;
      }
      .submenu li a {
        text-align: center;
      }
      footer{
        padding: 1rem !important;
      }
      footer .left,footer .right{
        width: 100% !important;
      }
      footer .small{
        flex-direction: column;
      }
      footer .small-powered{
        margin: 10px 0 !important;
      }
    }
    .main{
      flex: 1 1;
      display: flex;
      width: 100%;
      max-width: 65.26316em;
      margin-left: auto;
      margin-right: auto;
    }
    h1{
      font-size:3rem;
      text-align:center;
    }
    amp-img,img{
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: contain;
    }

  
    @media (prefers-color-scheme: dark) {
      :root{
        --color-secondary-1:#95169a;
        --color-secondary-2:#d96fbb;
        --placeholder-color : #4d4d4d;
        --background-primary : #161716;
        --background-secondary : #070705;
        --background-tertiary : #000;

      }
      html {
        color-scheme: dark;
      }
      body {
        color: white;
        background-color: var(--background-primary);
      }
    }
    .flex{
      display : flex;
    }
    .mrl{
      margin : 0 1rem;
    }
    .mf{
      margin : 1rem
    }
    h1,h2,h3,h4,h5{
      margin : 0;
      padding : 0;
    }
    aside{
      padding: 0 1rem;
      position: sticky;
      position: -webkit-sticky; /* Safari */
      top: 10px;
    }

    .popular-posts{
      width : 300px;
      height: max-content;
      min-height : 600px;
      background-color : var(--background-secondary);
      padding: 1rem;
      border : 1px solid var(--background-tertiary);
    }
    .top-article{
      border-top : 1px solid var(--background-tertiary);
      margin-top: 1rem;
      padding: 1rem 0;
      display: flex;
    }

    .top-article amp-img{
      width: 80px;
      height: 80px;
      margin-right: 8px;
      flex : 1 100%;
    }
    .top-article span{
      font-size: 1.1875rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-height: 1.3 !important;
      margin: 0;
    }

    footer{
      border-top: 1px solid var(--background-secondary);
      padding: 64px 0;
      min-height: 500px;
      display : flex;
      flex-direction: column;
      justify-content: space-between;
    }

    footer .content{
      display: flex;
      max-width: 65.26316em;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      height: 100%;
    }

    footer .h3{
      font-size : 2rem;
      font-weight: bold;
      margin-bottom : 1rem;
    }

    footer .h3 a{
      color: inherit;
      text-decoration: none;
    }

    footer .content .left{
      width: 50%;
    }

    footer .content .right{
      width: 50%;
    }

    footer .small{
      max-width: 65.26316em;
      margin : 0 auto;
      max-width: 65.26316em;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    footer .small-powered{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left : 2rem;
    }

    footer .small-powered svg{
      margin-left: 1rem;
    }

    footer .small-powered select{
      margin-left: 1rem;
    }

    footer .newsletterbox{
      width: 100%;
      display: flex;
      margin-bottom: 50px;
      margin-top : 2rem;
    }
    
    footer .newsletterbox input[type="text"]{
      flex: 1 1 auto;
      padding: 13px 16px;
      font-size: .80472rem;
      font-family: Circular Std;
      border: 1px solid #383842;
      padding: 0;
      padding: 1rem;
      font-size: 1.1rem;
    }

    footer .newsletterbox input[type="submit"]{
      font-size: .6875rem;
      text-transform: uppercase;
      font-family: Circular Std;
      background-color: var(--color-primary);
      color: #fff;
      border: none;
      line-height: 3rem;
      font-weight: 900;
      padding: 0 16px;
      transition: all .3s ease;
      cursor: pointer;
      letter-spacing: .0375rem;
    }
   
  </style>`
}