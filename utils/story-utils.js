import { SECTION_TYPE } from "../constants"

export function getStorySlides(slides){


  var htmlSections = ``

  slides?.map((slide,index)=>{

    if(index === 0){
      if(slide && slide?.sections?.length > 0){
      
        const slideTop = `<amp-story-page id="page-${index}">`
        const slideBottom = `</amp-story-page>`
        var slideBG = ``
        slide.sections.map((section,index)=>{
            if(index === 0 && section.type === "BACKGROUND"){
                slideBG = `
                    <amp-story-grid-layer template="fill">
                        <amp-img src="${section.content}"
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
                        return slideContent = slideContent +`<h1 class="homeH1">${section?.content}</h1>`
                    case  "p":
                        return slideContent = slideContent +`<p class="homeP">${section?.content}</p>`
                    default :
                        return slideContent = slideContent +`<p class="homeP">${section?.content}</p>`
  
                    
                }
            }
        })
        htmlSections += slideTop + slideBG + slideContentTop+ slideContent + slideContentBottom + slideBottom
      }else {
          return ''
      }
    }else if (index === 1){

      if(slide && slide?.sections?.length > 0){
      
        const slideTop = `<amp-story-page id="page-${index}">`
        const slideBottom = `</amp-story-page>`
        var slideBG = ``
       
        var slideContentTop = '<amp-story-grid-layer template="vertical">'
        var slideContentBottom = '</amp-story-grid-layer>'
        var slideContent = ``
        slide.sections.map((section,index)=>{
            if(section.type === "TEXTBLOCK"){
  
                switch(section.balise){
                    case  "h1":
                        return slideContent = slideContent +`<h1 style="font-size:1rem">${section?.content}</h1>`
                    case  "p":
                        return slideContent = slideContent +`<p style="font-size:1rem">${section?.content}</p>`
                    default :
                        return slideContent = slideContent +`<p style="font-size:1rem">${section?.content}</p>`
  
                    
                }
            }
            if(section.type === "IMAGEBLOCK"){
              return slideContent = slideContent +`
                <amp-img src="${section.content}"
                    width="720" height="1280"
                    layout="responsive">
                </amp-img>
              `
            }
        })
        htmlSections += slideTop + slideBG + slideContentTop+ slideContent + slideContentBottom + slideBottom
      }else {
          return ''
      }

    }else{

      if(slide && slide?.sections?.length > 0){
      
        const slideTop = `<amp-story-page id="page-${index}">`
        const slideBottom = `</amp-story-page>`
        var slideBG = ``
        slide.sections.map((section,index)=>{
            if(section.type === "BACKGROUND"){
                slideBG = `
                    <amp-story-grid-layer template="fill">
                        <amp-img src="${section.content}"
                            width="720" height="1280"
                            layout="responsive">
                        </amp-img>
                    </amp-story-grid-layer>`            
            }
        })
        var slideContentTop = ''
        var slideContentBottom = ''
        var slideContent = ``
        slide.sections.map((section,index)=>{
            if(section.type === "TEXTBLOCK"){
  
                switch(section.balise){
                    case  "h1":
                        return slideContent = slideContent +` <amp-story-grid-layer template="vertical"><h1>${section?.content}</h1></amp-story-grid-layer>`
                    case  "p":
                        return slideContent = slideContent +`<amp-story-grid-layer template="vertical" class="bottom"><p>${section?.content}</p></amp-story-grid-layer>`
                    default :
                        return slideContent = slideContent +`<amp-story-grid-layer template="vertical" class="bottom"><p>${section?.content}</p></amp-story-grid-layer>`
  
                    
                }
            }
        })
        htmlSections += slideTop + slideBG + slideContentTop+ slideContent + slideContentBottom + slideBottom
      }else {
          return ''
      }
    }
    
    
  })

  return htmlSections
  
  return storySlides
    
}