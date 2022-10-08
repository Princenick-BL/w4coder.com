import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

export default function DeskTopHP({topA,page1}) {

    const [firstA,setfirstA] = useState(false)
    const [secondA,setSecondA] = useState(false)

    useEffect(()=>{
        const arr = [...topA]
        setfirstA(arr.pop())
        setSecondA(arr)
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.topWrapper}>
                <div>

                </div>
                <br></br>
                <div className={styles.mainContent}>
                    {firstA && (
                        <div className={styles.articlesFirst}>
                            <div className={styles.img}>
                                <Image
                                    src={firstA?.poster}
                                    width={500}
                                    height={400}
                                    layout={"fill"}
                                    
                                />
                            </div>
                            <div className={styles.articleInfo}>
                                <div className={styles.cat}>{firstA?.category?.name || "A LA Une"}</div>
                                <h2 className={styles.title}>
                                    {firstA?.title}
                                </h2>
                                <div className={styles.desc}>
                                    {firstA?.description}
                                </div>
                                <div className={styles.more}>
                                    READ MORE
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={styles.articlesSecond}>
                        {secondA?.length > 0 && (
                            secondA?.map((a,index)=>{
                                return(
                                    <div key={index} className={styles.article}>
                                        <div className={styles.img}>
                                            <Image
                                                src={a?.poster||"https://picsum.photos/400/300"}
                                                width={500}
                                                height={400}
                                                layout={"fill"}
                                                
                                            />
                                        </div>
                                        <div className={styles.articleInfo}>
                                            <div className={styles.cat}>{a?.category?.name || "A LA Une"}</div>
                                            <h2 className={styles.title}>
                                                {a?.title}
                                            </h2>
                                        </div>
                                    </div>
                                )

                            })
                        )}
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
