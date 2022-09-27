import React, { useState } from 'react'
import { FaItalic } from 'react-icons/fa';
import styles from './index.module.scss'
import { useStoryContext } from '../../../../../contexts/story.contex'

export default function FontStyle() {

  const {state,dispatch} = useStoryContext()
  const [fontStyle,setFontStyle] = useState(state?.currentElement?.style?.fontStyle )
  
  const handleChangeStyle  = () =>{
      dispatch({
          type:"changeElementStyle",
          payload:!fontStyle 
      })
      setFontStyle(!fontStyle)
  }
  return (
    <div className={styles.fontWeight + " "+ (state?.currentElement?.style?.fontStyle ? styles.active : "")} onClick={(e)=>{handleChangeStyle()}}>
        <FaItalic/>
    </div>
  )
}
