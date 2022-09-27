import React, { useState } from 'react'
import { 
    FaAlignRight,
    FaAlignCenter,
    FaAlignJustify,
    FaAlignLeft
} from 'react-icons/fa';
import styles from './index.module.scss'
import { useStoryContext } from '../../../../../contexts/story.contex'

export default function TextAlign() {

    const [align,setAlign] = useState('center')

    const {state,dispatch} = useStoryContext()

    const handleChangeTextAlign  = (e) =>{
        dispatch({
            type:"changeTextAlign",
            payload:e
        })
        setAlign(e)
    }

    const getAlign = () =>{
        console.log(align)
        switch(state?.currentElement?.style?.textAlign){
            case 'center':
                return(
                    <div className={styles.textAlign} onClick={(e)=>{handleChangeTextAlign('justify')}}>
                        <FaAlignJustify/>
                    </div>
                )
            case 'justify':
                return(
                    <div className={styles.textAlign} onClick={(e)=>{handleChangeTextAlign('left')}}>
                        <FaAlignLeft/>
                    </div>
                )
            case 'left':
                return(
                    <div className={styles.textAlign} onClick={(e)=>{handleChangeTextAlign('right')}}>
                        <FaAlignRight/>
                    </div>
                )
            case 'right':
                return(
                    <div className={styles.textAlign} onClick={(e)=>{handleChangeTextAlign('center')}}>
                        <FaAlignCenter/>
                    </div>
                )
            default:
                return(
                    <div className={styles.textAlign} onClick={(e)=>{handleChangeTextAlign('center')}}>
                        <FaAlignCenter/>
                    </div>
                )
        }
    }

    return (
        <>
            {getAlign()}
        </>
    )
}
