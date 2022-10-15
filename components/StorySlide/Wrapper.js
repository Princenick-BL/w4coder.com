import React, { useRef,useState,useEffect } from 'react'
import ResizableRect from 'react-resizable-rotatable-draggable'
import { useStoryContext } from '../../contexts/story.contex'
import { Textfit } from 'react-textfit';

const layout = [{ key: 'test', x: 0, y: 0, width: 200, height: 100, zIndex: 1 }]
 
export default function Wrapper(props) {
    const inputRef = useRef(null);
    const [editing,setEditing] = useState(false)
    const [value,setValue] = useState(props?.content)
    const style = 
    // {
    //     left: "37.5%",
    //     top: "37.5%",
    //     width: "25%",
    //     height: "25%",
    //     rotation: "30deg"
    //   }
    {
        width: props.style.width,
        height: props.style.height,
        top: props.style.top,
        left: props.style.left,
        rotateAngle: props.style.rotateAngle,
    }
    const {state,dispatch} = useStoryContext()

    const handleResize = (style, isShiftKey, type) => {
        // type is a string and it shows which resize-handler you clicked
        // e.g. if you clicked top-right handler, then type is 'tr'
    
        let { top, left, width, height } = style
        top = Math.round(top)
        left = Math.round(left)
        width = Math.round(width)
        height = Math.round(height)
    
        dispatch({
            type : 'patchElementPosition',
            payload :{
                top ,
                left,
                width,
                height
            }
        })
        
      }
    
    const handleRotate = (rotateAngle) => {
    
        dispatch({
            type : 'patchElementPosition',
            payload :{
                rotateAngle
            }
        })
    
      }
    
    const handleDrag = (deltaX, deltaY) => {
    
        dispatch({
            type : 'patchElementPosition',
            payload :{
                left: state.left + deltaX,
                top: state.top + deltaY
            }
        })
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
        
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log(state,ref.current)
                if(ref.current?.textContent != props.content && event.target?.className.includes('slideContainer')){
                    dispatch({
                        type : 'patch-text',
                        payload : ref.current?.textContent
                    })
                    dispatch({
                        type : 'patchElementPosition',
                        payload : {
                            height : (ref.current?.clientHeight * 100 / 590.2222222222) + '%',
                            width :(ref.current?.clientWidth * 100 / 316) + '%',
                        }
                    })
                    
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
    useOutsideAlerter(inputRef);
    // useEffect(() => {
    //     // Moving cursor to the end
    //     if(inputRef?.current){

    //         inputRef.current.selectionStart = inputRef.current?.value?.length;
    //         inputRef.current.selectionEnd = inputRef.current?.value?.length;
    //         inputRef.current.focus()
    //     }
    // }, [props.content]);

    const handleChangeContent = (value) => {
        console.log(value)
        setValue(value)
        
        
    }


    return (
        <>{state.currentElement?.id !== props.id ? (
            <Textfit
                mode="multi"
                forceSingleModeWidth={false}
                style={{...props.style,position:"relative",cursor:"pointer"}}
            >
                <div 
                    contentEditable 
                    autoFocus
                    type="text" 
                    ref={inputRef}
                    style={{...props.style,width:"max-content",maxWidth:"100%",height:"100%",border:"none",backgroundColor:"transparent",wordWrap:"break-word",margin:"10px 0"}} 
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

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       width: props.style.width,
//       height: props.style.height,
//       top: props.style.top,
//       left: props.style.left,
//       rotateAngle: props.style.rotateAngle,
//     }
//   }

//   handleResize = (style, isShiftKey, type) => {
//     // type is a string and it shows which resize-handler you clicked
//     // e.g. if you clicked top-right handler, then type is 'tr'
//     const {dispatch} = useStoryContext()

//     let { top, left, width, height } = style
//     top = Math.round(top)
//     left = Math.round(left)
//     width = Math.round(width)
//     height = Math.round(height)

//     dispatch({
//         type : 'patchElementPosition',
//         payload :{
//             top,
//             left,
//             width,
//             height
//         }
//     })
    
//   }

//   handleRotate = (rotateAngle) => {
//     const {dispatch} = useStoryContext()

//     dispatch({
//         type : 'patchElementPosition',
//         payload :{
//             rotateAngle
//         }
//     })

//   }

//   handleDrag = (deltaX, deltaY) => {
//     const {dispatch} = useStoryContext()

//     dispatch({
//         type : 'patchElementPosition',
//         payload :{
//             left: this.state.left + deltaX,
//             top: this.state.top + deltaY
//         }
//     })
//   }

//   render() {
//     const {width, top, left, height, rotateAngle} = this.state
//     return (
//       <div className="App">
//         <div style={{...this.state,position:"absolute"}}>{this.props.children}</div>
//         <ResizableRect
//           left={left}
//           top={top}
//           width={width}
//           height={height}
//           rotateAngle={rotateAngle}
//           // aspectRatio={false}
//           // minWidth={10}
//           // minHeight={10}
//           zoomable='n, w, s, e, nw, ne, se, sw'
//           // rotatable={true}
//           // onRotateStart={this.handleRotateStart}
//           onRotate={this.handleRotate}
//           // onRotateEnd={this.handleRotateEnd}
//           // onResizeStart={this.handleResizeStart}
//           onResize={this.handleResize}
//           // onResizeEnd={this.handleUp}
//           // onDragStart={this.handleDragStart}
//           onDrag={this.handleDrag}
//           // onDragEnd={this.handleDragEnd}
//         />
//       </div>
//     )
//   }
// }

// export default App