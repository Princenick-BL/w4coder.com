import React, { Component,useState } from 'react'
import ResizableRect from 'react-resizable-rotatable-draggable'
import { useStoryContext } from '../../contexts/story.contex'

export default function Wrapper(props) {

    const [editing,setEditing] = useState(false)

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

    return (
        <>{state.currentElement?.id === props.id ? (
            <div className="App">
                <div style={{...style,position:"absolute"}}>{props.children}</div>
                <ResizableRect
                left={style.left}
                top={style.top}
                width={style.width}
                height={style.height}
                rotateAngle={style.rotateAngle}
                // aspectRatio={false}
                // minWidth={10}
                // minHeight={10}
                zoomable='n, w, s, e, nw, ne, se, sw'
                rotatable={true}
                // onRotateStart={this.handleRotateStart}
                onRotate={handleRotate}
                // onRotateEnd={this.handleRotateEnd}
                // onResizeStart={this.handleResizeStart}
                onResize={handleResize}
                // onResizeEnd={this.handleUp}
                // onDragStart={this.handleDragStart}
                onDrag={handleDrag}
                // onDragEnd={this.handleDragEnd}
                />
            </div>
        ):(
            <div style={{...props.style,position:"absolute",cursor:"pointer"}}>{props.children}</div>
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