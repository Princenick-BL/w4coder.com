import { SECTION_TYPE } from "../constants"

export function getStorySlides(slides){


    var htmlSections = ``

    slides?.map((slide,index)=>{
        
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
            var slideContentTop = '<amp-story-grid-layer template="vertical">'
            var slideContentBottom = '</amp-story-grid-layer>'
            var slideContent = ``
            slide.sections.map((section,index)=>{
                if(section.type === "TEXTBLOCK"){

                    switch(section.balise){
                        case  "h1":
                            return slideContent = slideContent +`<h1>${section?.content}</h1>`
                        case  "p":
                            return slideContent = slideContent +`<p>${section?.content}</p>`
                        default :
                            return slideContent = slideContent +`<p>${section?.content}</p>`

                        
                    }
                }
            })
            htmlSections += slideTop + slideBG + slideContentTop+ slideContent + slideContentBottom + slideBottom
        }else {
            return ''
        }
    })
    return htmlSections
    var storySlides = `
        <amp-story-page id="cover">
            <amp-story-grid-layer template="fill">
              <amp-img src="https://picsum.photos/720/1280"
                  width="720" height="1280"
                  layout="responsive">
              </amp-img>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical">
              <h1>The Joy of Pets</h1>
              <p>By AMP Tutorials</p>
            </amp-story-grid-layer>
        </amp-story-page>

          <!-- Page 1 (Cat): 1 layer (vertical) -->
          <amp-story-page id="page1">
            <amp-story-grid-layer template="vertical">
              <h1>Cats</h1>
              <amp-img src="https://picsum.photos/720/1280"
                  width="720" height="1280"
                  layout="responsive">
              </amp-img>
              <q>Dogs come when they're called. Cats take a message and get back to you. --Mary Bly</q>
            </amp-story-grid-layer>
          </amp-story-page>

          <!-- Page 2 (Dog): 2 layers (fill + thirds) -->
          <amp-story-page id="page2">
            <amp-story-grid-layer template="fill">
              <amp-img src="https://picsum.photos/720/1280" 
                  width="720" height="1280"
                  layout="responsive">
              </amp-img>
            </amp-story-grid-layer>
              <amp-story-grid-layer template="thirds">
                <h1 grid-area="upper-third">Dogs</h1>
                <p grid-area="lower-third">Dogs were probably the first tame animals. They have accompanied humans for some 10,000 years. Some scientists assert that all dogs, domestic and wild, share a common ancestor in the small South Asian wolf.</p>
            </amp-story-grid-layer>
          </amp-story-page>

          <!-- Page 3 (Bird): 3 layers (fill + vertical + vertical) + Audio-->
          <amp-story-page id="page3" background-audio="assets/bird-singing.mp3">
            <amp-story-grid-layer template="fill">
              <amp-img src="https://picsum.photos/720/1280"
                  width="720" height="1280"
                  layout="responsive">
              </amp-img>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical">
              <h1>Birds</h1>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical" class="bottom">
              <q>A bird is three things: Feathers, flight and song, And feathers are the least of these. -Marjorie Allen Seiffert</q>
            </amp-story-grid-layer>
          </amp-story-page>

          <!-- Page 4 (Rabbit): 3 layers (fill (video) + vertical + vertical) -->
          <amp-story-page id="page4">
            <amp-story-grid-layer template="fill">
              <amp-video autoplay loop
                    width="720" height="1280"
                    poster="https://picsum.photos/720/1280"
                    layout="responsive">
                  <source src="assets/rabbit.mp4" type="video/mp4">
              </amp-video>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical">
              <h1>Rabbits</h1>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical" class="bottom">
              <p>Rabbits can learn to follow simple voice commands and come when called by name, and are curious and playful.</p>
            </amp-story-grid-layer>
          </amp-story-page>

          <!-- Page 5 (Collage): 2 layers + animations -->
          <amp-story-page id="page5">
            <amp-story-grid-layer template="vertical" class="noedge">
              <div class="wrapper">
                <amp-img src="https://picsum.photos/720/1280"
                    width="720" height="1280"
                    layout="responsive"
                    animate-in="fade-in"
                    animate-in-delay="0.4s">
                </amp-img>
                <amp-img src="https://picsum.photos/720/1280"
                    width="720" height="1280"
                    layout="responsive"
                    animate-in="fade-in"
                    animate-in-delay="0.6s">
                </amp-img>
                <amp-img src="https://picsum.photos/720/1280"
                    width="720" height="1280"
                    layout="responsive"
                    animate-in="fade-in"
                    animate-in-delay=".8s">
                </amp-img>
                <amp-img src="https://picsum.photos/720/1280"
                    width="720" height="1280"
                    layout="responsive"
                    animate-in="fade-in"
                    animate-in-delay="1s">
                </amp-img>
              </div>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical" class="center-text">
              <p class="banner-text" animate-in="whoosh-in-right">Pets can lower your stress levels!</p>
            </amp-story-grid-layer>
          </amp-story-page>

          <!-- Bookend -->`
    return storySlides
    
}