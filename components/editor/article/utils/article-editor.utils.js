import { SECTION_TYPE } from "../../../../constants"
import Image from "next/image"
import styles from './index.module.scss'
import Editor from './TextEditor'
import VideoEditor from "./VideoEditor"

export const getSection = (section,index) =>{
    if(section){
        switch(section?.type){
            case SECTION_TYPE.TEXT_BLOCK :
                return(
                    <Editor
                        index={index}
                    >
                        {section?.content}
                    </Editor>
                )
      
            case SECTION_TYPE.IMAGE_BLOCK :

                const imageProps = {
                    mediaUrl : section?.content,
                    width : section?.meta?.width,
                    height : section?.meta?.height,
                    alt : section?.meta?.alt,
                }

                return(
                    <ImageEditor
                        imageProps = {imageProps}
                        index={index}
                    />
                )
            case SECTION_TYPE.VIDEO_BLOCK :

                const videoProps = {
                    mediaUrl : section?.content,
                    width : section?.meta?.width,
                    height : section?.meta?.height,
                    alt : section?.meta?.alt,
                }

                return(
                    <VideoEditor
                        imageProps = {videoProps}
                        index={index}
                    />
                )
            default :
                return <p></p>
        }

    }
}