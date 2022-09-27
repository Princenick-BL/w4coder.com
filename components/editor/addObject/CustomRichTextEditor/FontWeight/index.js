import React,{useState} from 'react'
import { FaBold } from 'react-icons/fa';
import styles from './index.module.scss'
import { useStoryContext } from '../../../../../contexts/story.contex'

export default function FontWeight() {

    const {state,dispatch} = useStoryContext()
    const [fontStyle,setFontStyle] = useState(state?.currentElement?.style?.fontWeight )
    
    const handleChangeColor  = () =>{
        dispatch({
            type:"changeElementWeight",
            payload:!fontStyle 
        })
        setFontStyle(!fontStyle)
    }
    return (
        <div className={styles.fontWeight + " "+ (state?.currentElement?.style?.fontWeight ? styles.active : "")} onClick={(e)=>{handleChangeColor()}}>
            <FaBold/>
        </div>
    )
}
