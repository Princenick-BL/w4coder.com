import React, { useState } from 'react'
import styles from './index.module.scss'
import { useStoryContext } from '../../../../../contexts/story.contex'

export default function FontSize() {

    const {state,dispatch} = useStoryContext()

    const handleChangeStyle  = (e) =>{

        dispatch({
            type:"changeElementFontSize",
            payload:e 
        })
    }
    return (
        <div className={styles.fontSize}>
            <div>
                <span>FontSize : </span>
            </div>
            <div>
                <input type={"number"} value={state?.currentElement.style?.fontSize || 16} onChange={(e)=>{handleChangeStyle(e.target.value)}}/>
            </div>
        </div>
    )
}
