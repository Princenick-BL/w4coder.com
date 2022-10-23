import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios';

export const StoryContext = React.createContext();


const StoryReducer = (state,action) =>{    

    const {
        pos,
        value,
        url
    } = action?.payload;

    const sections = state?.story?.sections
    var section = null
    const slides = state?.story?.slides

   // console.log(action?.payload)
    
    if(sections && pos!==null){
        section = sections[pos];
    }

    //console.log(section)

    console.log("Dispatch", action.type);
    switch (action.type) {


        case 'init':

            state.story = value

            return {
                ...state,
            } 

        break

        case 'changeTab':

            switch(action.payload){
                case 'THEMEBLOCK':

                    return {
                        ...state,
                        currentTab : 1
                    } 
                case 'TEXTBLOCK':
                    return {
                        ...state,
                        currentTab : 2
                    } 
                case 'IMAGEBLOCK':
                    return {
                        ...state,
                        currentTab : 3
                    } 
                case 'INSTABLOCK':
                    return {
                        ...state,
                        currentTab : 4
                    }  
                case 'TWITTERBLOCK':
                    return {
                        ...state,
                        currentTab : 5
                    }  
                default :
                    return {
                        ...state,
                    } 
            }
        break
            
        case 'setCurrentSlide':

            const newCurrentSlide = action?.payload

            return {
                ...state,
                currentSlide : newCurrentSlide
            } 

        break

        case 'setCurrentElement':

            return {
                ...state,
                currentElement : action.payload
            } 

        break
        
        case 'changeElementBackground':

            state.story.slides = slides.filter((slide)=>{
                if(slide.id === state.currentSlide.id){
                    const newSlide = slide.sections
                    slide.sections = newSlide.filter(section=>{
                        if(section.id === state.currentElement.id){
                            const oldStyle = section.style 
                            section.style = {
                                ...oldStyle,
                                backgroundColor : action.payload
                            }
                        }
                        return section
                    })
                }
                return slide
            })

            return {
                ...state,
            } 

        break
       
        case 'changeElementColor':

            const newSlideForColor = slides.filter((slide)=>{
                if(slide.id === state.currentSlide.id){
                    const newSlide = slide.sections
                    slide.sections = newSlide.filter(section=>{
                        if(section.id === state.currentElement.id){
                            const oldStyle = section.style 
                            section.style = {
                                ...oldStyle,
                                color : action.payload
                            }
                        }
                        return section
                    })
                }
                return slide
            })

            return {
                ...state,
                story:{
                    ...state.story,
                    slides : newSlideForColor
                }
            }  

        break
    
        case 'changeElementWeight':

            const newSlideForFontWeight = slides.filter((slide)=>{
                if(slide.id === state.currentSlide.id){
                    const newSlide = slide.sections
                    slide.sections = newSlide.filter(section=>{
                        if(section.id === state.currentElement.id){
                            const oldStyle = section.style 
                            section.style = {
                                ...oldStyle,
                                fontWeight : action.payload
                            }
                        }
                        return section
                    })
                }
                return slide
            })

            return {
                ...state,
                story:{
                    ...state.story,
                    slides : newSlideForFontWeight
                }
            } 

        break
        
        case 'changeElementStyle':

            const newSlidesForStyle = slides.filter((slide)=>{
                if(slide.id === state.currentSlide.id){
                    const newSlide = slide.sections
                    slide.sections = newSlide.filter(section=>{
                        if(section.id === state.currentElement.id){
                            const oldStyle = section.style 
                            section.style = {
                                ...oldStyle,
                                fontStyle : action.payload
                            }
                        }
                        return section
                    })
                }
                return slide
            })

            return {
                ...state,
                story:{
                    ...state.story,
                    slides : newSlidesForStyle
                }
            } 

        break
        
        case 'changeTextAlign':

            const newSlidesForTextAlign = slides.filter((slide)=>{
                if(slide.id === state.currentSlide.id){
                    const newSlide = slide.sections
                    slide.sections = newSlide.filter(section=>{
                        if(section.id === state.currentElement.id){
                            const oldStyle = section.style 
                            section.style = {
                                ...oldStyle,
                                textAlign : action.payload
                            }
                        }
                        return section
                    })
                }
                return slide
            })

            return {
                ...state,
                story:{
                    ...state.story,
                    slides : newSlidesForTextAlign
                }
            }

        break
    
        case 'changeElementFontSize':

            const newSlideForFontSize = slides.filter((slide)=>{
                if(slide.id === state.currentSlide.id){
                    const newSlide = slide.sections
                    slide.sections = newSlide.filter(section=>{
                        if(section.id === state.currentElement.id){
                            const oldStyle = section.style 
                            section.style = {
                                ...oldStyle,
                                fontSize : action.payload 
                            }
                        }
                        return section
                    })
                }
                return slide
            })

            return {
                ...state,
                story:{
                    ...state.story,
                    slides : newSlideForFontSize
                }
            }  

        break

        case 'patchElementPosition':


             const newSlidesPatchPos = slides.filter((slide)=>{
                if(slide.id === state.currentSlide.id){
                    const newSlide = slide.sections
                    slide.sections = newSlide.filter(section=>{
                        if(section.id === state.currentElement.id){
                            const oldStyle = section.style 
                            section.style = {
                                ...oldStyle,
                                ...action.payload 
                            }
                        }
                        return section
                    })
                }
                return slide
            })

            return {
                ...state,
                story:{
                    ...state.story,
                    slides : newSlidesPatchPos
                }
            } 

        break

        case 'add-object':

            const newAddSlide = [...state?.story?.slides,value]

            return {
                ...state,
                story:{
                    slides : newAddSlide
                }
            }  
        break

        case 'patch-text':


            const newSlides = slides.filter((slide)=>{
                if(slide.id === state.currentSlide.id){
                    const newSlide = slide.sections
                    slide.sections = newSlide.filter(section=>{
                        if(section.id === state.currentElement.id){
                            section.content = action.payload
                        }
                        return section
                    })
                }
                return slide
            })

            return {
                ...state,
                story:{
                    ...state.story,
                    slides : newSlides
                }
            }
        break

        case 'patch-text-block-and-content':


            const updateTextAndContent = slides.filter((slide)=>{
                if(slide.id === state.currentSlide.id){
                    const newSlide = slide.sections
                    slide.sections = newSlide.filter(section=>{
                        if(section.id === state.currentElement.id){
                            const oldStyle = section.style 
                            // section.style = {
                            //     ...oldStyle,
                            //     ...action.payload.position
                            // }
                            section.content = action.payload.content
                        }
                        return section
                    })
                }
                return slide
            })

            return {
                ...state,
                story:{
                    ...state.story,
                    slides : updateTextAndContent
                }
            }
        break

        case 'patch-image':


            if(section){
                section.content = url;
                state.story.sections[pos] = section
            }


            return {
                ...state,
            } 
        break

        case 'patch-image-dim':


            if(section && value?.width && value?.height){
                section.meta.width = value?.width;
                section.meta.height = value?.height;
                state.story.sections[pos] = section
            }


            return {
                ...state,
            } 
        break
    
        case 'patch-header':

            const {
                title,
                category,
                poster,
                description,
                posterSize
            } = value;


            if(title || category){

                state.story.title = title
                state.story.category  = category
                state.story.poster  = poster
                state.story.meta = posterSize || {}
                state.story.description = description
                state.story.slug = title.toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '')
                .replace("'", '-');
            }



            return {
                ...state,
            } 

        break
            
            
               
        case 'remove':


            state.story.sections.splice(pos, 1); 
            

            return {
                ...state,
            } 
        break

        default:
            return {
                ...state,
            } 
        break;
    }
}



function StoryProvider({children}){
    
    var story = null
   
    const defaultValue = {
        story : story,
        currentTab : 1,
        currentSlide : {},
        currentElement : {}
    }
    
    const [state,dispatch] = React.useReducer(StoryReducer,defaultValue)

    const value = {state,dispatch}

    return <StoryContext.Provider value={value}>{children}</StoryContext.Provider>
}

function useStoryContext(){
    const context = useContext(StoryContext)
    if(context == undefined){
        throw new Error('useStoryContext must be used within a StoryContext')
    }
    return context
}

export {StoryProvider,useStoryContext}