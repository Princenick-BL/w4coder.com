import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

export default function TopicSlider() {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.textColor}>React JS</h2>
            <div className={styles.container}>
                <div className={styles.top}> 
                    <Image
                        src={"https://picsum.photos/500/300"}
                        width={500}
                        height={300}
                        layout={"responsive"}
                        className={styles.img}
                    />
                    <div className={styles.desc}>
                        Lorem enim tempor Lorem excepteur aliquip reprehenderit. Enim id aliqua nisi officia sit. Magna veniam adipisicing cillum aliqua ut cillum do et id adipisicing esse quis ad. Anim ex qui quis sint commodo laboris laborum mollit dolore ipsum. Ullamco laboris mollit ut nisi. Do pariatur esse id aute reprehenderit ut enim sit velit pariatur sit.  
                    </div>
                </div>
                <div  className={styles.bottom}>
                    <div className={styles.positions}>2 sur 4</div>
                    <div className={styles.arrows}>
                        <div>&#x2039;</div>
                        <div>&#x203A;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
