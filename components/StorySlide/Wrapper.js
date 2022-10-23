import React, { useRef,useState,useEffect } from 'react'
import ResizableRect from 'react-resizable-rotatable-draggable'
import { useStoryContext } from '../../contexts/story.contex'
import { Textfit } from 'react-textfit';
import styles from './index.module.scss'

 
export default function Wrapper(props) {

    const inputRef = useRef(null);

    const style = {
        width: props.style.width,
        height: props.style.height,
        top: props.style.top,
        left: props.style.left,
        rotateAngle: props.style.rotateAngle,
    }

    const {state,dispatch} = useStoryContext()

    const currentElement = state.currentElement

    
    
    function useOutsideAlerter(ref,currentElement) {

        useEffect(() => {
            
            const wrapperRef = props.boxRef
            
            function handleClickOutside(event) {
                
                if (ref.current && !ref.current.contains(event.target)) {
                    
                    if(
                        (ref.current?.textContent != props.content)
                        && event.target?.className.includes('containerContent')
                    ){
                        console.log({
                            content : ref.current?.textContent,
                                position :  {
                                    height : (ref.current?.clientHeight * 100 / wrapperRef.current?.clientHeight) + '%',
                                    width :(ref.current?.clientWidth * 100 / (wrapperRef.current?.clientWidth - 64)) + '%',
                                }
                        })

                        dispatch({
                            type : 'patch-text-block-and-content',
                            payload : {
                                content : ref.current?.textContent,
                                position :  {
                                    height : (ref.current?.clientHeight * 100 / wrapperRef.current?.clientHeight) + '%',
                                    width :(ref.current?.clientWidth * 100 / (wrapperRef.current?.clientWidth - 64)) + '%',
                                }
                            }
                        })

                        // dispatch({
                        //     type : 'patch-text',
                        //     payload : ref.current?.textContent
                        // })

                        // dispatch({
                        //     type : 'patchElementPosition',
                        //     payload : {
                        //         height : (ref.current?.clientHeight * 100 / wrapperRef.current?.clientHeight) + '%',
                        //         width :(ref.current?.clientWidth * 100 / (wrapperRef.current?.clientWidth - 64)) + '%',
                        //     }
                        // })
                        
                    }
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    useOutsideAlerter(inputRef,currentElement);
  

    return (
        <>{state.currentElement?.id === props.id ? (
            <Textfit
                mode="multi"
                forceSingleModeWidth={false}
                style={{...props.style,position:"relative",cursor:"pointer"}}
            >
                <div 
                    className={((state.currentElement.id === props.id) &&( state.currentElement.type === props.type) )? styles.active : ""}
                    contentEditable 
                    autoFocus
                    type="text" 
                    ref={inputRef}
                    style={{...props.style,width:"max-content",maxWidth:"100%",height:"100%",border:"none",backgroundColor:"transparent",wordWrap:"break-word",marginBottom:"1rem"}} 
                    dangerouslySetInnerHTML={{__html: props.content}}
                >
                    {/* {props.content}  */}
                </div>
            </Textfit>       
        ):(
            <Textfit
                mode="multi"
                forceSingleModeWidth={false}
                style={{...props.style,position:"relative",cursor:"pointer"}}
            >{props.children}</Textfit>
        )}
        </>
    )
}
