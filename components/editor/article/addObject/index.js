import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import {
    FontSizeOutlined,
    PictureOutlined ,
    InstagramOutlined,
    TwitterOutlined,
    PlaySquareOutlined,
    FormatPainterOutlined,
    HomeFilled
} from '@ant-design/icons';
import { useArticleContext } from '../../../../contexts/article.context';

export default function AddObject() {

    const [show,setShow] = useState(false)

    const {state,dispatch} = useArticleContext()

    const handleAddText = () =>{

        dispatch({
            type : "add-object",
            payload :  {  
                value : {
                    pos : 1,
                    type : "TEXT_BLOCK",
                    meta : {  },
                    content : `<p>Hello world</p>`
    
                },
            }
        })
        setShow(!show)
        console.log("Ok")
    }
    const handleAddPicture = () =>{
        dispatch({
            type : "add-object",
            payload :  {  value : 
                {
                    pos : 2,
                    type : "IMAGE_BLOCK",
                    meta : {
                        width : 1280,
                        height : 700,
                        alt : state?.title
                    },
                    content : `https://picsum.photos/1024/700`

                },
            }
        })
        setShow(!show)

    }

  return (
    <div className={styles.content}>
        <div className={styles.text} onClick={(e)=>{setShow(!show)}}>+ Add New</div>
        {show && (
            <div className={styles.modal}>
                    
                <div className={styles.item} onClick={(e)=>{handleAddText()}}>
                    <FontSizeOutlined />   
                    Text 
                </div>
                <div className={styles.item} onClick={(e)=>{handleAddPicture()}}>
                    <PictureOutlined />
                    Images
                </div>
                <div className={styles.item} onClick={(e)=>{setShow(!show)}}>
                    <InstagramOutlined />
                    Insta
                </div>
                <div className={styles.item} onClick={(e)=>{setShow(!show)}}>
                    <TwitterOutlined />
                    Twitter
                </div>

            </div>
        )}
    </div>
  )
}
