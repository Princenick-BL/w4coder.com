import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye,FaNewspaper } from 'react-icons/fa';
import { getTopArticles } from '../../services/articles';


const Card = ({card ,index}) =>{
    return(
        <div className={styles.card} style={{borderColor:index === 1 ? "#FF6F32":index === 2 ? "#E6AD1C":index === 3 ? "#466FFF":"#4CA47C"}}>
            <div className={styles.publisher}>
                <Image
                    src={card?.author?.logo}
                    width="40"
                    height="40"
                    layout="fixed"
                    className={styles.publisher_logo}
                />
                <div className={styles.name}>Published by <strong>{card?.author?.name || "Prince Nick BALLO"}</strong> on {new Date(card?.updatedAt).toDateString()||"2022-09-17"}</div>
            </div>
            <br></br>
            <div className={styles.title}>
                <h1>
                    {card?.title}
                </h1>
                <div className={styles.titlebottom}>
                    <Link href='/'>
                        <a >{"Read this article "}	&#10148;</a>
                    </Link>
                    <span>{card.keywords?.join(" - ")}</span>
                </div>
            </div>
            <div className={styles.read}><FaEye/>&nbsp;&nbsp;{card?.reads||"300"} </div>
        </div>
    )
}

export default function LasrArticle({topA}) {

    

    const [data,setData] = useState([
        {
            author : {
                name :"Prince Nick BALLO",
                logo : "https://assets.codepen.io/1780597/4.png"
            },
            date : "2022-09-17",
            reads : "300",
            keywords : ["ReactJS","NextJs","Web","Web3"],
            title : "Pourquoi choisir react js au lieu de next js et vis versa",
            color : '#FF6F32',

        },
        {
            author : {
                name :"Prince Nick BALLO",
                logo : "https://assets.codepen.io/1780597/4.png"
            },
            date : "2022-09-17",
            reads : "300",
            keywords : ["ReactJS","NextJs","Web","Web3"],
            title : "Pourquoi choisir react js au lieu de next js et vis versa",
            color :"#E6AD1C" ,

        },
        {
            author : {
                name :"Prince Nick BALLO",
                logo : "https://assets.codepen.io/1780597/4.png"
            },
            date : "2022-09-17",
            reads : "300",
            keywords : ["ReactJS","NextJs","Web","Web3"],
            title : "Pourquoi choisir react js au lieu de next js et vis versa",
            color : "#466FFF",

        },
        {
            author : {
                name :"Prince Nick BALLO",
                logo : "https://assets.codepen.io/1780597/4.png"
            },
            date : "2022-09-17",
            reads : "300",
            keywords : ["ReactJS","NextJs","Web","Web3"],
            title : "Pourquoi choisir react js au lieu de next js et vis versa",
            color : "#4CA47C",

        },
       
    ])

  return (
    <div className={styles.wrapper}>

        <div className={styles.container} style={{
            
        }}>
            <div className={styles.mostreadedArticle}>
                <div className={styles.title}>
                    <span>
                        scroll left
                    </span>
                    <br></br>
                    <div>
                        MOST READED ARTICLES
                    </div>
                </div>
            </div>
            {topA.map(((card,index)=>{
                return(
                    <Card key={index} index={index} card={card}/>
                )
            }))}
           <div className={styles.mostreadedArticleMore}>
                <div>
                    <Link href="/read/article?page=2">
                        <a> Read more article &#10148; </a>
                    </Link>
                </div>
                <div className={styles.icon}>
                    <FaNewspaper size={30}/>
                </div>
            </div>
        </div>
    </div>
  )
}
