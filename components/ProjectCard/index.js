import React,{useState} from 'react'
import Image from 'next/image'
import styles from './index.module.scss'

export default function ProjectCard({data,odd=false,color}) {

    const [size,setSize] = useState({})

    return (
        <>
        {odd ? (
        <div className={styles.card + " "+ (odd? styles.odd : "")}  style={{borderColor:color ? color : "var(--color-primary)",backgroundColor:color ? color : "var(--color-primary)"}}>
            <div className={styles.cat} style={{backgroundColor:color ? color : "var(--color-primary)"}}>
                {data?.cat}
            </div>
            <Image
                onLoad={({ target }) => {
                    const { naturalWidth, naturalHeight } = target ;
                    setSize({
                        width:naturalWidth,
                        height:naturalHeight
                    })
                }}
                width={size?.width || "1280"}
                height={size?.height || "853"}
                layout="responsive"
                src={data?.url}
            />
            <div className={styles.elmt}>
                <div className={styles.banner} style={{background: `linear-gradient(360deg, ${color ? color : "var(--color-primary)"}, transparent)`}}>
                </div>
                <div className={styles.cnt}  style={{borderColor:color ? color : "var(--color-primary)",backgroundColor:color ? color : "var(--color-primary)"}}> 
                    <p>{data?.title}</p>
                
                    <p style={{ lineHeight: 1.5 }}>
                        {data?.desc}
                    </p>
                </div>
            </div>
           
            
        </div>
        ):(
            <div className={styles.card + " "+ (odd? styles.odd : "")} >
                <div className={styles.cat}>
                {data?.cat}
                </div>
                <Image
                    onLoad={({ target }) => {
                        const { naturalWidth, naturalHeight } = target ;
                        setSize({
                            width:naturalWidth,
                            height:naturalHeight
                        })
                    }}
                    width={size?.width || "1280"}
                    height={size?.height || "853"}
                    layout="responsive"
                    src={data?.url}
                />
            
                <div className={styles.elmt}>
                    <div className={styles.banner}>
                    </div>
                    <div className={styles.cnt}> 
                        <p>{data?.title}</p>
                    
                        <p style={{ lineHeight: 1.5 }}>
                            {data?.desc}
                        </p>
                    </div>
                </div>
                
                
            </div>
        )}
        </>
        
    )
}
