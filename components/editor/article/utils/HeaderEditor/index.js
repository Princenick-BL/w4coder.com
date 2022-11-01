import React, { useState,useEffect,useRef } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import {
    EditFilled
} from '@ant-design/icons';
import { useArticleContext } from '../../../../../contexts/article.context'
import { uploadfile } from '../../../../../services/files-editor';

export default function HeaderEditor(props) {

    const wrapperRef = useRef()
    const [showEdit,setShowEdit] = useState(false)
    const [title,setTitle] = useState(props?.title)
    const [description,setDescription] = useState(props?.description)
    const [category,setCategory] = useState(props?.category)
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState(props?.poster)
    const [size,setSize] = useState({})

    const onSelectFile = async (e ) => {

        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0]) 

    }

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const {state,dispatch} = useArticleContext()

    const handleChangeHeader = async () =>{

            // I've kept this example simple by using the first image instead of multiple
        dispatch({
            type : "patch-header",
            payload : {
                value : {
                    title : title,
                    description : description,
                    category : category,
                }
            }
        })
        setShowEdit(false)
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
    
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowEdit(false)
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
    useOutsideAlerter(wrapperRef);
    


    return (
        <header className={styles.header} ref={wrapperRef}>
            <div className={styles.edit}>
                <span className={styles.category }>{props?.category?.name}</span>
            
                <div className={styles.editBtn}>
                    <EditFilled onClick={(e)=>{setShowEdit(!showEdit)}}/>
                    {showEdit &&

                        <div className={styles.editBtnContent}>
                            <div>
                                <label>Catégory : </label>
                                <select  onClick={(e)=>{setCategory(e.target.value)}}>
                                    <option value="Houses">Houses</option>
                                    <option value="Cars">Cars</option>
                                    <option value="Jewelry">Jewelry</option>

                                </select>
                            </div>
                            <br></br>
                            <div>
                                <label>Title : </label>
                                <input type={"text"} value={title} onChange={(e)=>{setTitle(e.target.value)}}  placeholder='Set title'/>
                            </div>
                            <br></br>
                            <div>
                                <label>Description : </label>
                                <br></br>
                                <textarea type={"text"} value={description} onChange={(e)=>{setDescription(e.target.value)}}  placeholder='Set description'/>
                            </div>
                            
                            <div className={styles.submit} onClick={(e)=>{handleChangeHeader()}} >UPDATE</div>
                        </div>
                    }
                </div>
            </div>
            <h1 style={{fontSize:"2rem"}}>{props?.title}</h1>
            <address >
                <time
                    className="ampstart-byline-pubdate block bold my1"
                    dateTime="2016-12-13"
                >{`Updated at : ${new Date(props?.updatedAt).toLocaleDateString()}`}</time>
            </address>

            <br></br>
        </header>
    )
}
