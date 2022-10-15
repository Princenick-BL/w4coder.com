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
                    state.currentTab = 1

                    return {
                        ...state,
                    } 
                case 'TEXTBLOCK':
                    state.currentTab = 2

                    return {
                        ...state,
                    } 
                case 'IMAGEBLOCK':
                    state.currentTab = 3

                    return {
                        ...state,
                    } 
                case 'INSTABLOCK':
                    state.currentTab = 4

                    return {
                        ...state,
                    } 
                case 'TWITTERBLOCK':
                    state.currentTab = 5

                    return {
                        ...state,
                    } 
                default :
                    return {
                        ...state,
                    } 
            }
        break
            
        case 'setCurrentSlide':

            state.currentSlide = action?.payload

            return {
                ...state,
            } 

        break

        case 'setCurrentElement':

            state.currentElement = action?.payload
            return {
                ...state,
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

            state.story.slides = slides.filter((slide)=>{
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
            } 

        break
    
        case 'changeElementWeight':

            state.story.slides = slides.filter((slide)=>{
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
            } 

        break
        
        case 'changeElementStyle':

            state.story.slides = slides.filter((slide)=>{
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
            } 

        break
        
        case 'changeTextAlign':

            state.story.slides = slides.filter((slide)=>{
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
            } 

        break
    
        case 'changeElementFontSize':

            state.story.slides = slides.filter((slide)=>{
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
            } 

        break

        case 'patchElementPosition':

            state.story.slides = slides.filter((slide)=>{
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
            } 

        break

        case 'add-object':

            state.story.sections = [...state?.story?.sections,value]

            return {
                ...state,
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