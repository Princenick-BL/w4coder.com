import { SECTION_TYPE } from "../constants"

export function getStorySlides(slides){


  var htmlSections = ``
  var booken = ` `

  slides?.map((slide,index)=>{

    if(index === 0){
      if(slide && slide?.sections?.length > 0){
      
        const slideTop = `<amp-story-page auto-advance-after="4s" id="page-${index}">`
        const slideBottom = `</amp-story-page>`
        var slideBG = ``
        slide.sections.map((section,index)=>{
            if(index === 0 && section.type === "BACKGROUND"){
                slideBG = `
                    <amp-story-grid-layer template="fill">
                        <amp-img src="${section.content?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n")}"
                            width="720" height="1280"
                            layout="responsive">
                        </amp-img>
                    </amp-story-grid-layer>`            
            }
        })
        var slideContentTop = '<amp-story-grid-layer template="vertical">'
        var slideContentBottom = '</amp-story-grid-layer>'
        var slideContent = ``
        slide.sections.map((section,index)=>{
            if(section.type === "TEXTBLOCK"){
  
                switch(section.balise){
                    case  "h1":
                        return slideContent = slideContent +`<h1 class="homeH1" style="color:${section?.style?.color||"#000"};font-size:${section?.style?.fontSize||"1.5rem"};font-style:${section?.style?.fontStyle||"initial"}">${section?.content}</h1>`
                    case  "p":
                        return slideContent = slideContent +`<p class="homeP" style="color:${section?.style?.color||"#000"};font-size:${section?.style?.fontSize||"1.5rem"};font-style:${section?.style?.fontStyle||"initial"}">${section?.content}</p>`
                    default :
                        return slideContent = slideContent +`<p class="homeP" style="color:${section?.style?.color||"#000"};font-size:${section?.style?.fontSize||"1.5rem"};font-style:${section?.style?.fontStyle||"initial"}">${section?.content}</p>`
  
                    
                }
            }
        })
        htmlSections += slideTop + slideBG + slideContentTop+ slideContent + slideContentBottom + slideBottom
      }else {
          return ''
      }
    }else {

      if(slide && slide?.sections?.length > 0){
      
        const slideTop = `<amp-story-page auto-advance-after="22s" id="page-${index}">`
        const slideBottom = `</amp-story-page>`
        var slideBG = ``
       
        var slideContentTop = '<amp-story-grid-layer template="vertical">'
        var slideContentBottom = '</amp-story-grid-layer>'
        var slideContent = ``
        slide.sections.map((section,index)=>{
            if(section.type === "TEXTBLOCK"){
  
                switch(section.balise){
                    case  "h1":
                        return slideContent = slideContent +`<h1 style="color:${section?.style?.color||"#000"};font-size:${section?.style?.fontSize||"1.5rem"};font-style:${section?.style?.fontStyle||"initial"}">${section?.content}</h1>`
                    case  "p":
                        return slideContent = slideContent +`<p style="color:${section?.style?.color||"#000"};font-size:${section?.style?.fontSize||"1.5rem"};font-style:${section?.style?.fontStyle||"initial"}">${section?.content}</p>`
                    default :
                        return slideContent = slideContent +`<p style="color:${section?.style?.color||"#000"};font-size:${section?.style?.fontSize||"1.5rem"};font-style:${section?.style?.fontStyle||"initial"}">${section?.content}</p>` 
                    
                }
            }
            if(section.type === "IMAGEBLOCK"){
                booken = booken + `
                <amp-img 
                    src="${section.content?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n")}"
                    width="4" 
                    height="3"
                    layout="responsive"
                    animate-in="fade-in"
                    animate-in-delay="0.4s"
                    class="br3"
                >
                </amp-img>`
              return slideContent = slideContent +`
                <amp-img 
                    src="${section.content?.replace("https://api.w4coder.com/read","https://ik.imagekit.io/l93htbc1n")}"
                    width="4" 
                    height="3"
                    layout="responsive"
                    class="br3"
                >
                </amp-img>
              `
            }
        })
        htmlSections += slideTop + slideBG + slideContentTop+ slideContent + slideContentBottom + slideBottom
      }else {
          return ''
      }

    }
    
    // else{

    //   if(slide && slide?.sections?.length > 0){
      
    //     const slideTop = `<amp-story-page id="page-${index}">`
    //     const slideBottom = `</amp-story-page>`
    //     var slideBG = ``
    //     slide.sections.map((section,index)=>{
    //         if(section.type === "BACKGROUND"){
    //             slideBG = `
    //                 <amp-story-grid-layer template="fill">
    //                     <amp-img src="${section.content}"
    //                         width="720" height="1280"
    //                         layout="responsive">
    //                     </amp-img>
    //                 </amp-story-grid-layer>`  
    //             booken = booken + `
    //             <amp-img src="${section.content}"
    //                 width="720" height="1280"
    //                 layout="responsive"
    //                 animate-in="fade-in"
    //                 animate-in-delay="0.4s">
    //             </amp-img>`          
    //         }
    //     })
    //     var slideContentTop = ''
    //     var slideContentBottom = ''
    //     var slideContent = ``
    //     slide.sections.map((section,index)=>{
    //         if(section.type === "TEXTBLOCK"){
  
    //             switch(section.balise){
    //                 case  "h1":
    //                     return slideContent = slideContent +` <amp-story-grid-layer template="vertical"><h1>${section?.content}</h1></amp-story-grid-layer>`
    //                 case  "p":
    //                     return slideContent = slideContent +`<amp-story-grid-layer template="vertical" class="bottom"><p>${section?.content}</p></amp-story-grid-layer>`
    //                 default :
    //                     return slideContent = slideContent +`<amp-story-grid-layer template="vertical" class="bottom"><p>${section?.content}</p></amp-story-grid-layer>`
  
                    
    //             }
    //         }
    //     })

        
    //     htmlSections += slideTop + slideBG + slideContentTop+ slideContent + slideContentBottom + slideBottom
    //   }else {
    //       return ''
    //   }
    // }

   
    
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