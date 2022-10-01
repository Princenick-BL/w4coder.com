import React from 'react'
import styles from './index.module.scss'
import { FaPlus } from 'react-icons/fa'; 
import { useStoryContext } from '../../../../../contexts/story.contex'


export default function TextColor() {

    const colors = [
    'transparent','#ffffff','#000000','#FF6633', '#FFB399', '#FF33FF', '#FFFF99', 
    '#00B3E6', '#E6B333', '#3366E6', '#999966', 
    '#99FF99', '#B34D4D', '#80B300', '#809900', 
    '#E6B3B3', '#6680B3', '#66991A',];

    const {state,dispatch} = useStoryContext()
    
    const handleChangeColor  = (e) =>{
        dispatch({
            type:"changeElementColor",
            payload:e
        })
    }

    return (
        <div className={styles.textColor}>
            <span>| TEXT COLOR</span>
            <div className={styles.colors}>
                {colors.map((color,index)=>{
                    return(
                        <div key={index} className={styles.color} style={{backgroundColor:color}} onClick={(e)=>{handleChangeColor(color)}}></div>
                    )
                })}
                <div className={styles.colorPicker}>
                    <input type="color"/>
                    <FaPlus color='#fff'/>
                </div>
            </div>
        </div>
    )
}
